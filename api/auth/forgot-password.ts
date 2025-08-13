import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../supabase'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { email } = req.body

    // Validate email
    if (!email) {
      return res.status(400).json({ 
        error: 'Email is required' 
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' })
    }

    // Send password reset email
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/reset-password`
    })

    if (resetError) {
      console.error('Password reset error:', resetError)
      return res.status(400).json({ 
        error: resetError.message || 'Failed to send password reset email' 
      })
    }

    // Return success response
    return res.status(200).json({
      message: 'Password reset email sent successfully',
      success: true
    })

  } catch (error) {
    console.error('Forgot password error:', error)
    return res.status(500).json({ 
      error: 'Internal server error while processing password reset request' 
    })
  }
}
