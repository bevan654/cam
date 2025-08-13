import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../supabase.js';

export async function POST(request) {
  try {
    const { orderId, status } = await request.json();

    console.log('API received update request:', { orderId, status }); // Debug log

    // Validate required fields
    if (!orderId || !status) {
      return NextResponse.json(
        { error: 'Order ID and status are required' },
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

    // Verify the user (driver authentication)
    const { data: userData, error: userError } = await supabase.auth.getUser(token);
    if (userError || !userData.user) {
      return NextResponse.json(
        { error: 'Invalid authentication token' },
        { status: 401 }
      );
    }

    console.log('About to update order in database:', { orderId, newStatus: status }); // Debug log

    // First, get the current order to see its current status
    const { data: currentOrder, error: fetchError } = await supabase
      .from('orders')
      .select('status')
      .eq('id', orderId)
      .single();

    if (fetchError) {
      console.error('Error fetching current order status:', fetchError);
      return NextResponse.json(
        { error: 'Failed to fetch current order status' },
        { status: 500 }
      );
    }

    console.log('Current order status:', { orderId, currentStatus: currentOrder.status, newStatus: status }); // Debug log

    // Update the order status in the database
    const { data: updatedOrder, error: updateError } = await supabase
      .from('orders')
      .update({ 
        status: status,
        updated_at: new Date().toISOString()
      })
      .eq('id', orderId)
      .select()
      .single();

    if (updateError) {
      console.error('Error updating order status:', updateError);
      return NextResponse.json(
        { error: 'Failed to update order status' },
        { status: 500 }
      );
    }

    if (!updatedOrder) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      );
    }

    console.log('Order updated successfully:', { 
      orderId, 
      oldStatus: 'unknown', 
      newStatus: updatedOrder.status 
    }); // Debug log

    return NextResponse.json({
      message: 'Order status updated successfully',
      order: updatedOrder
    });

  } catch (error) {
    console.error('Error updating order status:', error);
    return NextResponse.json(
      { error: 'Failed to update order status' },
      { status: 500 }
    );
  }
}
