import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

export async function POST(request) {
  try {
    const { items, total } = await request.json();

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'Invalid items array' },
        { status: 400 }
      );
    }

    if (!total || typeof total !== 'number' || total <= 0) {
      return NextResponse.json(
        { error: 'Invalid total amount' },
        { status: 400 }
      );
    }

    // Step 2: Backend validates prices against items
    const calculatedTotal = items.reduce((sum, item) => {
      const itemTotal = item.totalPrice || (item.price * item.quantity);
      return sum + itemTotal;
    }, 0);

    // Add delivery fee
    const finalTotal = calculatedTotal + 2.99; // $2.99 delivery fee

    // Validate that client-calculated total matches server-calculated total
    if (Math.abs(total - finalTotal) > 0.01) {
      console.error('Price mismatch:', { clientTotal: total, serverTotal: finalTotal });
      return NextResponse.json(
        { error: 'Price validation failed' },
        { status: 400 }
      );
    }

    // Convert to cents for Stripe
    const amountInCents = Math.round(finalTotal * 100);

    // Create PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: 'aud',
      metadata: {
        items_count: items.length.toString(),
        delivery_fee: '2.99',
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
      amount: finalTotal,
    });

  } catch (error) {
    console.error('Error creating payment intent:', error);
    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    );
  }
}
