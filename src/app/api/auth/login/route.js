import { NextRequest, NextResponse } from 'next/server'
import { supabasePublic } from '../../supabase.js'

export async function POST(request) {
  try {
    const { email, password } = await request.json()
    
    console.log('Login attempt for:', email)

    // Validate required fields
    if (!email || !password) {
      console.log('Missing required fields')
      return NextResponse.json({ 
        error: 'Email and password are required' 
      }, { status: 400 })
    }

    // Authenticate with Supabase using public client
    console.log('Attempting Supabase authentication...')
    const { data, error } = await supabasePublic.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      console.error('Supabase auth error:', error)
      return NextResponse.json({ 
        error: error.message || 'Authentication failed' 
      }, { status: 401 })
    }

    if (!data.user) {
      console.log('No user data returned')
      return NextResponse.json({ 
        error: 'User not found' 
      }, { status: 401 })
    }

    console.log('User authenticated successfully:', data.user.id)

    // Get user profile data using service role client for database access
    const { supabase } = await import('../../supabase.js')
    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', data.user.id)
      .single()

    if (profileError) {
      console.log('Profile fetch error (non-critical):', profileError)
    }

    const responseData = {
      user: {
        id: data.user.id,
        email: data.user.email,
        firstName: profileData?.first_name || data.user.user_metadata?.firstName,
        lastName: profileData?.last_name || data.user.user_metadata?.lastName,
        phone: profileData?.phone || data.user.user_metadata?.phone,
      },
      accessToken: data.session?.access_token,
      refreshToken: data.session?.refresh_token,
    }

    console.log('Login successful, returning user data')
    return NextResponse.json(responseData)

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ 
      error: 'Internal server error during login' 
    }, { status: 500 })
  }
}
