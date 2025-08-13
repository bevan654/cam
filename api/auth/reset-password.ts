import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../supabase'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { password, accessToken } = req.body

    // Validate required fields
    if (!password || !accessToken) {
      return res.status(400).json({ 
        error: 'Password and access token are required' 
      })
    }

    // Validate password strength
    if (password.length < 8) {
      return res.status(400).json({ 
        error: 'Password must be at least 8 characters long' 
      })
    }

    // Set the auth header for this request
    supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: ''
    })

    // Update the user's password
    const { error: updateError } = await supabase.auth.updateUser({
      password: password
    })

    if (updateError) {
      console.error('Password update error:', updateError)
      return res.status(400).json({ 
        error: updateError.message || 'Failed to update password' 
      })
    }

    // Return success response
    return res.status(200).json({
      message: 'Password updated successfully',
      success: true
    })

  } catch (error) {
    console.error('Reset password error:', error)
    return res.status(500).json({ 
      error: 'Internal server error while updating password' 
    })
  }
}
