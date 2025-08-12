// api/create-payment-intent.ts
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

export default async function handler(req, res) {
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
    if (!process.env.STRIPE_SECRET_KEY) {
      return res.status(500).json({
        error: 'Stripe configuration error - secret key not found',
      });
    }

    const { amountCents, currency = 'AUD' } = req.body;

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

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amountCents),
      currency: currency.toLowerCase(),
      automatic_payment_methods: { enabled: true },
      metadata: { source: 'campus-angel-app' },
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({
      error: 'Internal server error',
      message: error.message || 'Unknown error occurred',
    });
  }
}
