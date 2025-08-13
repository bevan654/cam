import { NextRequest, NextResponse } from 'next/server'
import { supabasePublic } from '../../supabase.js'

export async function POST(request) {
  try {
    const { email, password } = await request.json()

    // Validate required fields
    if (!email || !password) {
      return NextResponse.json({ 
        error: 'Email and password are required' 
      }, { status: 400 })
    }

    // Authenticate with Supabase using public client
    const { data, error } = await supabasePublic.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      console.error('Login error:', error)
      return NextResponse.json({ 
        error: error.message || 'Authentication failed' 
      }, { status: 401 })
    }

    if (!data.user) {
      return NextResponse.json({ 
        error: 'User not found' 
      }, { status: 401 })
    }

    // Get user profile data using service role client for database access
    const { supabase } = await import('../../supabase.js')
    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', data.user.id)
      .single()

    // Return user data with tokens
    return NextResponse.json({
      user: {
        id: data.user.id,
        email: data.user.email,
        firstName: profileData?.first_name || data.user.user_metadata?.firstName,
        lastName: profileData?.last_name || data.user.user_metadata?.lastName,
        phone: profileData?.phone || data.user.user_metadata?.phone,
      },
      accessToken: data.session?.access_token,
      refreshToken: data.session?.refresh_token,
    })

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ 
      error: 'Internal server error during login' 
    }, { status: 500 })
  }
}
