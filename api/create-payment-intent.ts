const Stripe = require('stripe')

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
})

module.exports = async function handler(req: any, res: any) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Debug: Log environment variables (without exposing secrets)
    console.log('Environment check:', {
      hasStripeKey: !!process.env.STRIPE_SECRET_KEY,
      nodeEnv: process.env.NODE_ENV,
      vercelEnv: process.env.VERCEL_ENV
    })

    // Check if Stripe secret key is available
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('STRIPE_SECRET_KEY environment variable is not set')
      return res.status(500).json({ 
        error: 'Stripe configuration error - secret key not found',
        debug: 'Check Vercel environment variables'
      })
    }

    const { amountCents, currency = 'AUD' } = req.body

    // Validate request body
    if (!req.body) {
      return res.status(400).json({ error: 'Request body is required' })
    }

    // Validate amount
    if (!amountCents || typeof amountCents !== 'number' || amountCents < 50) {
      return res.status(400).json({ 
        error: 'Invalid amount. Must be at least 50 cents for AUD.' 
      })
    }

    // Validate currency
    if (currency !== 'AUD') {
      return res.status(400).json({ 
        error: 'Only AUD currency is supported' 
      })
    }

    console.log('Creating PaymentIntent:', { amountCents, currency })

    // Create PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amountCents),
      currency: currency.toLowerCase(),
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        source: 'campus-angel-app'
      }
    })

    console.log('PaymentIntent created successfully:', { id: paymentIntent.id })

    // Return client secret
    res.status(200).json({
      clientSecret: paymentIntent.client_secret
    })

  } catch (error: any) {
    console.error('Error creating payment intent:', error)
    
    // Handle Stripe errors
    if (error.type && error.message) {
      return res.status(400).json({ 
        error: error.message,
        type: error.type
      })
    }
    
    // Handle other errors
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message || 'Unknown error occurred'
    })
  }
}
