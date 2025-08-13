import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../supabase'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { accessToken } = req.body

    // Validate access token
    if (!accessToken) {
      return res.status(400).json({ 
        error: 'Access token is required' 
      })
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
      return res.status(400).json({ 
        error: logoutError.message || 'Logout failed' 
      })
    }

    // Return success response
    return res.status(200).json({
      message: 'Logout successful',
      success: true
    })

  } catch (error) {
    console.error('Logout error:', error)
    return res.status(500).json({ 
      error: 'Internal server error during logout' 
    })
  }
}
