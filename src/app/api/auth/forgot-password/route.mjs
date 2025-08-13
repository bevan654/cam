import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '../../supabase.js'

export async function POST(request) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email) {
      return NextResponse.json({ 
        error: 'Email is required' 
      }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }

    // Send password reset email
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/reset-password`
    })

    if (resetError) {
      console.error('Password reset error:', resetError)
      return NextResponse.json({ 
        error: resetError.message || 'Failed to send password reset email' 
      }, { status: 400 })
    }

    // Return success response
    return NextResponse.json({
      message: 'Password reset email sent successfully',
      success: true
    })

  } catch (error) {
    console.error('Forgot password error:', error)
    return NextResponse.json({ 
      error: 'Internal server error while processing password reset request' 
    }, { status: 500 })
  }
}
