import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '../../supabase.js'

export async function POST(request) {

  try {
    const { email, password, firstName, lastName, phone } = await request.json()

    // Validate required fields
    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json({ 
        error: 'Missing required fields: email, password, firstName, lastName' 
      }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }

    // Validate password strength (minimum 8 characters)
    if (password.length < 8) {
      return NextResponse.json({ 
        error: 'Password must be at least 8 characters long' 
      }, { status: 400 })
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
      return NextResponse.json({ 
        error: authError.message || 'Failed to create user account' 
      }, { status: 400 })
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
    return NextResponse.json({
      message: 'User registered successfully',
      user: {
        id: authData.user?.id,
        email: authData.user?.email,
        firstName,
        lastName,
        phone
      }
    }, { status: 201 })

  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ 
      error: 'Internal server error during registration' 
    }, { status: 500 })
  }
}
