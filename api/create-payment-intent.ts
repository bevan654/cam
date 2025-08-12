import Stripe from 'stripe'

// Initialize Stripe with secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

export default async function handler(
  req: any,
  res: any
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { amountCents, currency = 'AUD' } = req.body

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

    // Create PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amountCents), // Ensure integer
      currency: currency.toLowerCase(),
      automatic_payment_methods: {
        enabled: true,
      },
      // Add metadata for tracking
      metadata: {
        integration_check: 'accept_a_payment',
        source: 'campus-angel-app'
      }
    })

    // Return client secret
    res.status(200).json({
      clientSecret: paymentIntent.client_secret
    })

  } catch (error) {
    console.error('Error creating payment intent:', error)
    
    if (error instanceof Stripe.errors.StripeError) {
      return res.status(400).json({ 
        error: error.message 
      })
    }
    
    res.status(500).json({ 
      error: 'Internal server error' 
    })
  }
}
