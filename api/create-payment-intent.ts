// api/create-payment-intent.ts
const Stripe = require('stripe');

console.log('Loading Stripe module...');
console.log('Environment variables:', {
  hasStripeKey: !!process.env.STRIPE_SECRET_KEY,
  nodeEnv: process.env.NODE_ENV,
  vercelEnv: process.env.VERCEL_ENV
});

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

console.log('Stripe initialized successfully');

module.exports = async function handler(req: any, res: any) {
  console.log('Handler called with method:', req.method);
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('Processing POST request...');
    
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('STRIPE_SECRET_KEY not found');
      return res.status(500).json({
        error: 'Stripe configuration error - secret key not found',
      });
    }

    const { amountCents, currency = 'AUD' } = req.body;
    console.log('Request body:', { amountCents, currency });

    if (!req.body) {
      return res.status(400).json({ error: 'Request body is required' });
    }

    if (!amountCents || typeof amountCents !== 'number' || amountCents < 50) {
      return res.status(400).json({
        error: 'Invalid amount. Must be at least 50 cents for AUD.',
      });
    }

    if (currency !== 'AUD') {
      return res.status(400).json({
        error: 'Only AUD currency is supported',
      });
    }

    console.log('Creating PaymentIntent...');
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amountCents),
      currency: currency.toLowerCase(),
      automatic_payment_methods: { enabled: true },
      metadata: { source: 'campus-angel-app' },
    });

    console.log('PaymentIntent created:', paymentIntent.id);
    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error: any) {
    console.error('Error in handler:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message || 'Unknown error occurred',
    });
  }
};
