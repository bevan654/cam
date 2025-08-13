import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../supabase.js';

export async function GET(request) {
  try {
    // Get the orderId from query parameters
    const { searchParams } = new URL(request.url);
    const orderId = searchParams.get('orderId');

    if (!orderId) {
      return NextResponse.json(
        { error: 'Order ID is required' },
        { status: 400 }
      );
    }

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

    // Query the orders table to find the order
    const { data: orderData, error: orderError } = await supabase
      .from('orders')
      .select('*')
      .eq('id', orderId)
      .eq('customer_id', userData.user.id)
      .single();

    if (orderError || !orderData) {
      return NextResponse.json(
        { error: 'Order not found or access denied' },
        { status: 404 }
      );
    }

    // Return the order data
    return NextResponse.json({
      order: orderData,
      message: 'Order found successfully'
    });

  } catch (error) {
    console.error('Error validating order:', error);
    return NextResponse.json(
      { error: 'Failed to validate order' },
      { status: 500 }
    );
  }
}
