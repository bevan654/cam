import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { supabase } from '../supabase.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

export async function POST(request) {
  try {
    const { paymentIntentId, items, total, deliveryDetails, contactInfo, paymentMethod } = await request.json();

    // Get the authorization header
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Authorization header required' },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7);

    // Verify the user
    const { data: userData, error: userError } = await supabase.auth.getUser(token);
    if (userError || !userData.user) {
      return NextResponse.json(
        { error: 'Invalid authentication token' },
        { status: 401 }
      );
    }

    // Step 5: Backend verifies payment status with Stripe (server-to-server call)
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    
    if (paymentIntent.status !== 'succeeded') {
      return NextResponse.json(
        { error: 'Payment not completed' },
        { status: 400 }
      );
    }

    // Verify the amount matches
    if (paymentIntent.amount !== Math.round(total * 100)) {
      console.error('Amount mismatch:', { 
        paymentIntentAmount: paymentIntent.amount, 
        orderTotal: total, 
        orderTotalInCents: Math.round(total * 100) 
      });
      return NextResponse.json(
        { error: 'Payment amount mismatch' },
        { status: 400 }
      );
    }

    // Insert new row into Supabase orders table
    const { data: orderData, error: orderError } = await supabase
      .from('orders')
      .insert({
        customer_id: userData.user.id,
        items: items,
        total: total,
        payment_id: paymentIntentId,
        status: 'placed',
        delivery_details: deliveryDetails,
        contact_info: contactInfo,
        payment_method: paymentMethod,
        created_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (orderError) {
      console.error('Error creating order:', orderError);
      return NextResponse.json(
        { error: 'Failed to create order' },
        { status: 500 }
      );
    }

    // Clear the cart from localStorage (this will be done on the frontend)
    
    return NextResponse.json({
      message: 'Order created successfully',
      order: orderData,
      success: true
    });

  } catch (error) {
    console.error('Create order error:', error);
    return NextResponse.json(
      { error: 'Internal server error while creating order' },
      { status: 500 }
    );
  }
}
