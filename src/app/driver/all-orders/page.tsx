'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Order {
  id: string;
  items: any[];
  total: number;
  status: string;
  delivery_details: {
    building: string;
    room: string;
    instructions: string;
  };
  contact_info: {
    name: string;
    phone: string;
    email: string;
  };
  payment_method: string;
  created_at: string;
  updated_at: string;
  customer_id: string;
}

const ORDER_STATUSES = [
  'placed',
  'confirmed', 
  'preparing',
  'delivered'
];

export default function DriverAllOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingOrder, setUpdatingOrder] = useState<string | null>(null);
  const [timeUntilNextPoll, setTimeUntilNextPoll] = useState(10);

  useEffect(() => {
    fetchAllOrders();
    
    // Set up polling every 10 seconds
    const interval = setInterval(() => {
      fetchAllOrders();
      setTimeUntilNextPoll(10); // Reset timer after each poll
    }, 10000);
    
    // Set up countdown timer
    const countdownInterval = setInterval(() => {
      setTimeUntilNextPoll(prev => Math.max(0, prev - 1));
    }, 1000);
    
    // Cleanup intervals on component unmount
    return () => {
      clearInterval(interval);
      clearInterval(countdownInterval);
    };
  }, []);

  const fetchAllOrders = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        console.error('No access token found');
        return;
      }

      const response = await fetch('/api/driver/all-orders', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        setOrders(data.orders || []);
      } else {
        console.error('Failed to fetch orders');
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    try {
      setUpdatingOrder(orderId);
      const token = localStorage.getItem('accessToken');
      
      if (!token) {
        alert('Authentication required');
        return;
      }

      console.log('Updating order status:', { orderId, newStatus }); // Debug log

      const response = await fetch('/api/driver/update-order-status', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          orderId,
          status: newStatus
        })
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('API response:', responseData); // Debug log
        
        // Update local state
        setOrders(prevOrders => 
          prevOrders.map(order => 
            order.id === orderId 
              ? { ...order, status: newStatus, updated_at: new Date().toISOString() }
              : order
          )
        );
        
        // Show success message
        alert(`Order status updated to: ${newStatus}`);
      } else {
        const errorData = await response.json();
        console.error('API error response:', errorData); // Debug log
        alert(`Failed to update order: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error updating order status:', error);
      alert('Failed to update order status');
    } finally {
      setUpdatingOrder(null);
    }
  };

  const getStatusColor = (status: string) => {
    const colors: { [key: string]: string } = {
      'placed': '#6c757d',
      'confirmed': '#17a2b8',
      'preparing': '#ffc107',
      'delivered': '#28a745'
    };
    return colors[status] || '#6c757d';
  };

  const getStatusIcon = (status: string) => {
    const icons: { [key: string]: string } = {
      'placed': '📝',
      'confirmed': '✅',
      'preparing': '👨‍🍳',
      'delivered': '🎯'
    };
    return icons[status] || '❓';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const renderCustomizations = (customizations: any) => {
    if (!customizations || Object.keys(customizations).length === 0) {
      return <span style={{ color: '#666', fontStyle: 'italic' }}>No customizations</span>;
    }

    return (
      <div style={{ marginTop: '5px' }}>
        {Object.entries(customizations).map(([key, value]: [string, any]) => (
          <div key={key} style={{ fontSize: '12px', color: '#666', marginLeft: '10px' }}>
            <strong>{key}:</strong> {Array.isArray(value) ? value.join(', ') : value}
          </div>
        ))}
      </div>
    );
  };

  const handleManualRefresh = () => {
    fetchAllOrders();
    setTimeUntilNextPoll(10); // Reset timer for manual refresh
  };

  if (loading) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <p>Loading orders...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <Link href="/driver" style={{ color: '#007bff', textDecoration: 'none' }}>
          ← Back to Dashboard
        </Link>
      </div>
      
      <h1>All Orders</h1>
      
      {/* Polling Status */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '20px',
        padding: '10px 15px',
        backgroundColor: '#f8f9fa',
        borderRadius: '6px',
        border: '1px solid #e9ecef'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '14px', color: '#666' }}>🔄 Auto-refresh:</span>
          <span style={{ 
            fontSize: '16px', 
            fontWeight: 'bold', 
            color: timeUntilNextPoll <= 3 ? '#dc3545' : '#28a745' 
          }}>
            Next poll in {timeUntilNextPoll}s
          </span>
        </div>
        <button
          onClick={handleManualRefresh}
          disabled={loading}
          style={{
            padding: '6px 12px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontSize: '12px',
            fontWeight: 'bold',
            opacity: loading ? 0.6 : 1
          }}
        >
          {loading ? 'Refreshing...' : '🔄 Refresh Now'}
        </button>
      </div>
      
      {orders.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
          <p>No orders found</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '20px' }}>
          {orders.map((order) => (
            <div key={order.id} style={{ 
              border: '1px solid #ddd', 
              borderRadius: '8px', 
              padding: '20px',
              backgroundColor: 'white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              {/* Order Header */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start',
                marginBottom: '15px',
                paddingBottom: '15px',
                borderBottom: '1px solid #eee'
              }}>
                <div>
                  <h3 style={{ margin: '0 0 5px 0', color: '#333' }}>
                    Order #{order.id}
                  </h3>
                  <p style={{ margin: '0', color: '#666', fontSize: '14px' }}>
                    {formatDate(order.created_at)}
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{
                    padding: '6px 12px',
                    backgroundColor: getStatusColor(order.status),
                    color: 'white',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    {getStatusIcon(order.status)} {order.status.replace(/_/g, ' ')}
                  </span>
                </div>
              </div>

              {/* Order Details */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <h4 style={{ margin: '0 0 10px 0', color: '#555' }}>Customer Info</h4>
                  <p style={{ margin: '5px 0', fontSize: '14px' }}>
                    <strong>Name:</strong> {order.contact_info?.name || 'N/A'}
                  </p>
                  <p style={{ margin: '5px 0', fontSize: '14px' }}>
                    <strong>Phone:</strong> {order.contact_info?.phone || 'N/A'}
                  </p>
                  <p style={{ margin: '5px 0', fontSize: '14px' }}>
                    <strong>Email:</strong> {order.contact_info?.email || 'N/A'}
                  </p>
                </div>
                
                <div>
                  <h4 style={{ margin: '0 0 10px 0', color: '#555' }}>Delivery Details</h4>
                  <p style={{ margin: '5px 0', fontSize: '14px' }}>
                    <strong>Building:</strong> {order.delivery_details?.building || 'N/A'}
                  </p>
                  <p style={{ margin: '5px 0', fontSize: '14px' }}>
                    <strong>Room:</strong> {order.delivery_details?.room || 'N/A'}
                  </p>
                  <p style={{ margin: '5px 0', fontSize: '14px' }}>
                    <strong>Instructions:</strong> {order.delivery_details?.instructions || 'None'}
                  </p>
                </div>
              </div>

              {/* Order Items */}
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ margin: '0 0 10px 0', color: '#555' }}>Items</h4>
                <div style={{ 
                  backgroundColor: '#f8f9fa', 
                  padding: '15px', 
                  borderRadius: '6px',
                  border: '1px solid #e9ecef'
                }}>
                  {order.items?.map((item: any, index: number) => (
                    <div key={index} style={{ 
                      padding: '10px 0',
                      borderBottom: index < order.items.length - 1 ? '1px solid #dee2e6' : 'none'
                    }}>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        marginBottom: '5px'
                      }}>
                        <span style={{ fontWeight: 'bold' }}>
                          {item.name || item.title || 'Unknown Item'} x{item.quantity}
                        </span>
                        <span style={{ fontWeight: 'bold' }}>
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                      {/* Show customizations */}
                      {item.customizations && (
                        <div style={{ fontSize: '13px', color: '#666' }}>
                          {renderCustomizations(item.customizations)}
                        </div>
                      )}
                    </div>
                  ))}
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    padding: '10px 0 0 0',
                    borderTop: '2px solid #dee2e6',
                    fontWeight: 'bold',
                    fontSize: '16px'
                  }}>
                    <span>Total:</span>
                    <span>${order.total?.toFixed(2) || '0.00'}</span>
                  </div>
                </div>
              </div>

              {/* Status Update and Actions */}
              <div>
                <h4 style={{ margin: '0 0 10px 0', color: '#555' }}>Update Status</h4>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '15px' }}>
                  {ORDER_STATUSES.map((status) => (
                    <button
                      key={status}
                      onClick={() => {
                        console.log('Button clicked for status:', status); // Debug log
                        updateOrderStatus(order.id, status);
                      }}
                      disabled={updatingOrder === order.id || order.status === status}
                      style={{
                        padding: '8px 16px',
                        backgroundColor: order.status === status ? getStatusColor(status) : '#f8f9fa',
                        color: order.status === status ? 'white' : '#333',
                        border: `1px solid ${order.status === status ? getStatusColor(status) : '#dee2e6'}`,
                        borderRadius: '6px',
                        cursor: updatingOrder === order.id ? 'not-allowed' : 'pointer',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        opacity: updatingOrder === order.id ? 0.6 : 1
                      }}
                    >
                      {updatingOrder === order.id && order.status === status ? 'Updating...' : status.replace(/_/g, ' ')}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
