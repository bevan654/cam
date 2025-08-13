import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../supabase'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { email, password, firstName, lastName, phone } = req.body

    // Validate required fields
    if (!email || !password || !firstName || !lastName) {
      return res.status(400).json({ 
        error: 'Missing required fields: email, password, firstName, lastName' 
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' })
    }

    // Validate password strength (minimum 8 characters)
    if (password.length < 8) {
      return res.status(400).json({ 
        error: 'Password must be at least 8 characters long' 
      })
    }

    // Create user in Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true, // Auto-confirm email for demo purposes
      user_metadata: {
        firstName,
        lastName,
        phone: phone || null,
        role: 'customer'
      }
    })

    if (authError) {
      console.error('Supabase auth error:', authError)
      return res.status(400).json({ 
        error: authError.message || 'Failed to create user account' 
      })
    }

    // Create profile in profiles table (if you have one)
    if (authData.user) {
      const { error: profileError } = await supabase
        .from('profiles')
        .insert({
          id: authData.user.id,
          email: authData.user.email,
          first_name: firstName,
          last_name: lastName,
          phone: phone || null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })

      if (profileError) {
        console.error('Profile creation error:', profileError)
        // Don't fail the request if profile creation fails
        // The user account was still created successfully
      }
    }

    // Return success response
    return res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: authData.user?.id,
        email: authData.user?.email,
        firstName,
        lastName,
        phone
      }
    })

  } catch (error) {
    console.error('Registration error:', error)
    return res.status(500).json({ 
      error: 'Internal server error during registration' 
    })
  }
}
