import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../supabase'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ 
        error: 'Authorization header with Bearer token is required' 
      })
    }

    const accessToken = authHeader.split(' ')[1]

    if (!accessToken) {
      return res.status(401).json({ 
        error: 'Access token is required' 
      })
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
      return res.status(401).json({ 
        error: 'Invalid or expired access token' 
      })
    }

    if (!user) {
      return res.status(401).json({ 
        error: 'User not found' 
      })
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
    return res.status(200).json({
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
    return res.status(500).json({ 
      error: 'Internal server error while fetching user data' 
    })
  }
}
