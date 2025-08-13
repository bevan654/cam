import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '../../supabase'

export async function POST(request: NextRequest) {
  try {
    const { accessToken } = await request.json()

    // Validate access token
    if (!accessToken) {
      return NextResponse.json({ 
        error: 'Access token is required' 
      }, { status: 400 })
    }

    // Set the auth header for this request
    supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: ''
    })

    // Sign out the user
    const { error: logoutError } = await supabase.auth.signOut()

    if (logoutError) {
      console.error('Logout error:', logoutError)
      return NextResponse.json({ 
        error: logoutError.message || 'Logout failed' 
      }, { status: 400 })
    }

    // Return success response
    return NextResponse.json({
      message: 'Logout successful',
      success: true
    })

  } catch (error) {
    console.error('Logout error:', error)
    return NextResponse.json({ 
      error: 'Internal server error during logout' 
    }, { status: 500 })
  }
}
