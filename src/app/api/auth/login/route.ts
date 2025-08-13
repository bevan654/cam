import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '../../supabase'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Validate required fields
    if (!email || !password) {
      return NextResponse.json({ 
        error: 'Email and password are required' 
      }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
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
        return NextResponse.json({ 
          error: 'Invalid email or password' 
        }, { status: 401 })
      }
      
      if (authError.message.includes('Email not confirmed')) {
        return NextResponse.json({ 
          error: 'Please confirm your email address before logging in' 
        }, { status: 401 })
      }
      
      return NextResponse.json({ 
        error: authError.message || 'Login failed' 
      }, { status: 400 })
    }

    if (!authData.user || !authData.session) {
      return NextResponse.json({ 
        error: 'Authentication failed - no user or session returned' 
      }, { status: 500 })
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
    return NextResponse.json({
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
    return NextResponse.json({ 
      error: 'Internal server error during login' 
    }, { status: 500 })
  }
}
