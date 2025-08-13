import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '../../supabase'

export async function GET(request: NextRequest) {

  try {
    const authHeader = request.headers.get('authorization')

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ 
        error: 'Authorization header with Bearer token is required' 
      }, { status: 401 })
    }

    const accessToken = authHeader.split(' ')[1]

    if (!accessToken) {
      return NextResponse.json({ 
        error: 'Access token is required' 
      }, { status: 401 })
    }

    // Set the auth header for this request
    supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: ''
    })

    // Get the current user
    const { data: { user }, error: userError } = await supabase.auth.getUser()

    if (userError) {
      console.error('Get user error:', userError)
      return NextResponse.json({ 
        error: 'Invalid or expired access token' 
      }, { status: 401 })
    }

    if (!user) {
      return NextResponse.json({ 
        error: 'User not found' 
      }, { status: 401 })
    }

    // Get user profile data
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    if (profileError && profileError.code !== 'PGRST116') {
      console.error('Profile fetch error:', profileError)
    }

    // Return user data
    return NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        firstName: user.user_metadata?.firstName || profile?.first_name,
        lastName: user.user_metadata?.lastName || profile?.last_name,
        phone: user.user_metadata?.phone || profile?.phone,
        role: user.user_metadata?.role || 'customer',
        emailConfirmed: user.email_confirmed_at ? true : false,
        createdAt: user.created_at,
        lastSignIn: user.last_sign_in_at
      }
    })

  } catch (error) {
    console.error('Get user error:', error)
    return NextResponse.json({ 
      error: 'Internal server error while fetching user data' 
    }, { status: 500 })
  }
}
