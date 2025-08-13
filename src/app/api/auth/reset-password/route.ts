import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '../../supabase'

export async function POST(request: NextRequest) {
  try {
    const { password, accessToken } = await request.json()

    // Validate required fields
    if (!password || !accessToken) {
      return NextResponse.json({ 
        error: 'Password and access token are required' 
      }, { status: 400 })
    }

    // Validate password strength
    if (password.length < 8) {
      return NextResponse.json({ 
        error: 'Password must be at least 8 characters long' 
      }, { status: 400 })
    }

    // For password reset, we need to verify the recovery token first
    // and then update the user's password using the admin API
    
    // First, verify the recovery token by getting user info
    const { data: userData, error: verifyError } = await supabase.auth.getUser(accessToken)
    
    if (verifyError || !userData.user) {
      console.error('Token verification error:', verifyError)
      return NextResponse.json({ 
        error: 'Invalid or expired recovery token' 
      }, { status: 401 })
    }

    // Now update the user's password using the admin API
    const { error: updateError } = await supabase.auth.admin.updateUserById(
      userData.user.id,
      { password: password }
    )

    if (updateError) {
      console.error('Password update error:', updateError)
      return NextResponse.json({ 
        error: updateError.message || 'Failed to update password' 
      }, { status: 400 })
    }

    // Return success response
    return NextResponse.json({
      message: 'Password updated successfully',
      success: true
    })

  } catch (error) {
    console.error('Reset password error:', error)
    return NextResponse.json({ 
      error: 'Internal server error while updating password' 
    }, { status: 500 })
  }
}
