import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../supabase'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { email, password } = req.body

    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({ 
        error: 'Email and password are required' 
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' })
    }

    // Authenticate user with Supabase
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (authError) {
      console.error('Login error:', authError)
      
      // Handle specific error cases
      if (authError.message.includes('Invalid login credentials')) {
        return res.status(401).json({ 
          error: 'Invalid email or password' 
        })
      }
      
      if (authError.message.includes('Email not confirmed')) {
        return res.status(401).json({ 
          error: 'Please confirm your email address before logging in' 
        })
      }
      
      return res.status(400).json({ 
        error: authError.message || 'Login failed' 
      })
    }

    if (!authData.user || !authData.session) {
      return res.status(500).json({ 
        error: 'Authentication failed - no user or session returned' 
      })
    }

    // Get user profile data
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', authData.user.id)
      .single()

    if (profileError && profileError.code !== 'PGRST116') {
      console.error('Profile fetch error:', profileError)
    }

    // Return success response with user data and session
    return res.status(200).json({
      message: 'Login successful',
      user: {
        id: authData.user.id,
        email: authData.user.email,
        firstName: authData.user.user_metadata?.firstName || profile?.first_name,
        lastName: authData.user.user_metadata?.lastName || profile?.last_name,
        phone: authData.user.user_metadata?.phone || profile?.phone,
        role: authData.user.user_metadata?.role || 'customer'
      },
      session: {
        accessToken: authData.session.access_token,
        refreshToken: authData.session.refresh_token,
        expiresAt: authData.session.expires_at
      }
    })

  } catch (error) {
    console.error('Login error:', error)
    return res.status(500).json({ 
      error: 'Internal server error during login' 
    })
  }
}
