import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { supabase } from '../supabase.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

export async function POST(request) {
  try {
    const { paymentIntentId, items, total, deliveryDetails, contactInfo, paymentMethod } = await request.json();
    
    console.log('Creating order with payment intent:', paymentIntentId);
    console.log('Order details:', { items: items.length, total, paymentMethod });

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
      console.error('User verification failed:', userError);
      return NextResponse.json(
        { error: 'Invalid authentication token' },
        { status: 401 }
      );
    }

    console.log('User verified:', userData.user.id);

    // Step 5: Backend verifies payment status with Stripe (server-to-server call)
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    
    if (paymentIntent.status !== 'succeeded') {
      console.error('Payment not completed:', paymentIntent.status);
      return NextResponse.json(
        { error: 'Payment not completed' },
        { status: 400 }
      );
    }

    console.log('Payment verified successfully');

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
    console.log('Inserting order into database...');
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

    console.log('Order created successfully:', orderData);
    console.log('Order ID:', orderData.id);

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
