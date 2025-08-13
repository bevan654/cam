import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '../../supabase.js'

export async function POST(request) {
  try {
    const { refreshToken } = await request.json()

    if (!refreshToken) {
      return NextResponse.json({ 
        error: 'Refresh token is required' 
      }, { status: 400 })
    }

    // Use the refresh token to get a new session
    const { data: refreshData, error: refreshError } = await supabase.auth.refreshSession({
      refresh_token: refreshToken
    })

    if (refreshError) {
      console.error('Token refresh error:', refreshError)
      return NextResponse.json({ 
        error: refreshError.message || 'Failed to refresh token' 
      }, { status: 401 })
    }

    if (!refreshData.session) {
      return NextResponse.json({ 
        error: 'No session returned from refresh' 
      }, { status: 401 })
    }

    // Return new tokens
    return NextResponse.json({
      message: 'Token refreshed successfully',
      session: {
        accessToken: refreshData.session.access_token,
        refreshToken: refreshData.session.refresh_token,
        expiresAt: refreshData.session.expires_at
      }
    })

  } catch (error) {
    console.error('Token refresh error:', error)
    return NextResponse.json({ 
      error: 'Internal server error during token refresh' 
    }, { status: 500 })
  }
}
