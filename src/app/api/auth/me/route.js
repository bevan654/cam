import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '../../supabase.js'

export async function GET(request) {
  try {
    // Get the Authorization header
    const authHeader = request.headers.get('authorization')
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ 
        error: 'Authorization header missing or invalid' 
      }, { status: 401 })
    }

    const token = authHeader.substring(7) // Remove 'Bearer ' prefix

    // Verify the token and get user data
    const { data: userData, error: userError } = await supabase.auth.getUser(token)

    if (userError || !userData.user) {
      console.error('Token verification error:', userError)
      return NextResponse.json({ 
        error: 'Invalid or expired token' 
      }, { status: 401 })
    }

    // Get user profile data
    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userData.user.id)
      .single()

    // Return user data
    return NextResponse.json({
      user: {
        id: userData.user.id,
        email: userData.user.email,
        firstName: profileData?.first_name || userData.user.user_metadata?.firstName,
        lastName: profileData?.last_name || userData.user.user_metadata?.lastName,
        phone: profileData?.phone || userData.user.user_metadata?.phone,
        role: profileData?.role || userData.user.user_metadata?.role || 'customer',
      }
    })

  } catch (error) {
    console.error('Get user error:', error)
    return NextResponse.json({ 
      error: 'Internal server error while fetching user data' 
    }, { status: 500 })
  }
}
