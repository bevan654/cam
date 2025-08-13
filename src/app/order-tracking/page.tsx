'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../../hooks/useAuth';
import { LoadingState, ErrorState, StandardHeader } from '../../components/AuthStates';

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
}

interface OrderStatus {
  status: string;
  description: string;
  icon: string;
  completed: boolean;
  current: boolean;
}

const ORDER_STATUSES: OrderStatus[] = [
  {
    status: 'placed',
    description: 'Order Placed',
    icon: '📝',
    completed: false,
    current: false
  },
  {
    status: 'confirmed',
    description: 'Order Confirmed',
    icon: '✅',
    completed: false,
    current: false
  },
  {
    status: 'picked_up',
    description: 'Order Picked Up',
    icon: '🚚',
    completed: false,
    current: false
  },
  {
    status: 'delivered',
    description: 'Order Delivered',
    icon: '🎯',
    completed: false,
    current: false
  }
];

export default function OrderTrackingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, loading: authLoading, logout } = useAuth();
  const [orderId, setOrderId] = useState<string | null>(null);
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  useEffect(() => {
    const id = searchParams.get('orderId');
    if (id) {
      setOrderId(id);
      fetchOrder(id);
      // Start polling every 30 seconds
      const interval = setInterval(() => {
        fetchOrder(id);
      }, 30000);
      
      return () => clearInterval(interval);
    } else {
      setLoading(false);
      setError('No order ID provided');
    }
  }, [searchParams]);

  const fetchOrder = async (id: string) => {
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        setError('Authentication required');
        setLoading(false);
        return;
      }

      const response = await fetch(`/api/validate-order?orderId=${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        if (response.status === 404) {
          setError('Order not found or access denied');
        } else if (response.status === 401) {
          setError('Authentication failed');
        } else {
          setError('Failed to fetch order');
        }
        setLoading(false);
        return;
      }

      const data = await response.json();
      setOrder(data.order);
      setLastUpdated(new Date());
      setLoading(false);
    } catch (error) {
      console.error('Error fetching order:', error);
      setError('Failed to fetch order');
      setLoading(false);
    }
  };

  const getStatusIndex = (status: string): number => {
    return ORDER_STATUSES.findIndex(s => s.status === status);
  };

  const getStatusDisplay = (order: Order) => {
    const currentStatusIndex = getStatusIndex(order.status);
    
    return ORDER_STATUSES.map((status, index) => ({
      ...status,
      completed: index <= currentStatusIndex, // Changed from < to <= so delivered shows as completed
      current: index === currentStatusIndex && order.status !== 'delivered' // Don't show delivered as current
    }));
  };

  const getEstimatedTime = (status: string): string => {
    switch (status) {
      case 'placed':
        return '2-3 minutes';
      case 'confirmed':
        return '5-10 minutes';
      case 'picked_up':
        return '10-15 minutes';
      case 'delivered':
        return 'Delivered!';
      default:
        return 'Unknown';
    }
  };

  if (loading) {
    return <LoadingState 
      message="Loading Order..." 
      submessage="Please wait while we fetch your order details."
      className="tracking-hero-bg" 
    />;
  }

  if (error || !order) {
    return <ErrorState
      title="Order Not Found"
      message={error || 'Unable to find order details. Please check your order history or contact support.'}
      primaryAction={{ text: "View Orders", href: "/account", icon: "📋" }}
      secondaryAction={{ text: "Order Again", href: "/restaurants", icon: "🍽️" }}
      className="tracking-hero-bg"
    />;
  }

  const statusDisplay = getStatusDisplay(order);

  return (
    <div className="App">
      <div className="tracking-hero-bg">
        <StandardHeader user={user} loading={authLoading} onLogout={logout} />

        <section className="tracking-hero">
          <div className="tracking-hero-container">
            <div className="tracking-hero-content">
              <div className="tracking-icon">📍</div>
              <h1>Track Your Order</h1>
              <p className="order-id-modern">Order #{order.id.slice(0, 8)}</p>
              <p>Real-time updates on your order status and delivery progress</p>
              
              <div className="tracking-hero-stats">
                <div className="modern-stat">
                  <span className="modern-stat-number">${order.total.toFixed(0)}</span>
                  <span className="modern-stat-label">Total</span>
                </div>
                <div className="modern-stat">
                  <span className="modern-stat-number">{getEstimatedTime(order.status)}</span>
                  <span className="modern-stat-label">Est. Time</span>
                </div>
                <div className="modern-stat">
                  <span className="modern-stat-number">🟢</span>
                  <span className="modern-stat-label">Live</span>
                </div>
              </div>
              
              <div className="last-updated-modern">
                Last updated: {lastUpdated.toLocaleTimeString()}
                <span className="live-indicator">🟢 Auto-updating</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <main className="tracking-main">
        <div className="tracking-container-modern">
          <div className="tracking-layout">
            {/* Order Progress Timeline */}
            <div className="tracking-timeline-modern">
              <div className="timeline-header">
                <h2>📦 Order Progress</h2>
                <span className={`status-badge-tracking ${order.status}`}>
                  {order.status.replace('_', ' ').toUpperCase()}
                </span>
              </div>
              
              <div className="timeline-modern">
                {statusDisplay.map((status, index) => (
                  <div 
                    key={status.status} 
                    className={`timeline-item-modern ${status.completed ? 'completed' : ''} ${status.current ? 'current' : ''}`}
                  >
                    <div className="timeline-icon-modern">
                      {status.completed ? '✅' : status.current ? '⏳' : status.icon}
                    </div>
                    <div className="timeline-content-modern">
                      <h3>{status.description}</h3>
                      <p>
                        {status.completed 
                          ? (status.status === 'delivered' ? 'Delivered!' : 'Completed')
                          : status.current 
                            ? `In progress - ${getEstimatedTime(status.status)}` 
                            : 'Pending'
                        }
                      </p>
                      {status.current && (
                        <div className="progress-bar">
                          <div className="progress-fill"></div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order & Delivery Details */}
            <div className="tracking-details">
              <div className="details-card">
                <div className="card-header">
                  <h3>📋 Order Summary</h3>
                  <span className="order-total">${order.total.toFixed(2)}</span>
                </div>
                <div className="card-content">
                  <div className="detail-row">
                    <span className="label">Order Date:</span>
                    <span className="value">{new Date(order.created_at).toLocaleDateString()}</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Payment:</span>
                    <span className="value">💳 {order.payment_method}</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Items:</span>
                    <span className="value">{order.items.length} item{order.items.length !== 1 ? 's' : ''}</span>
                  </div>
                </div>
              </div>

              <div className="details-card">
                <div className="card-header">
                  <h3>🏢 Delivery Address</h3>
                </div>
                <div className="card-content">
                  <div className="delivery-address">
                    <div className="address-line">
                      <strong>{order.delivery_details.building}</strong>
                    </div>
                    <div className="address-line">
                      {order.delivery_details.room}
                    </div>
                    {order.delivery_details.instructions && (
                      <div className="delivery-instructions">
                        <span className="instructions-label">Instructions:</span>
                        <span className="instructions-text">{order.delivery_details.instructions}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="details-card">
                <div className="card-header">
                  <h3>📞 Contact Info</h3>
                </div>
                <div className="card-content">
                  <div className="contact-info">
                    <div className="contact-row">
                      <span className="contact-label">Name:</span>
                      <span className="contact-value">{order.contact_info.name}</span>
                    </div>
                    <div className="contact-row">
                      <span className="contact-label">Phone:</span>
                      <span className="contact-value">{order.contact_info.phone}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="action-buttons-tracking">
                <button 
                  onClick={() => fetchOrder(order.id)} 
                  className="btn-refresh"
                  disabled={loading}
                >
                  {loading ? '⏳ Refreshing...' : '🔄 Refresh Status'}
                </button>
                <Link href="/account" className="btn-view-orders-tracking">
                  📋 View All Orders
                </Link>
                <Link href="/restaurants" className="btn-order-again">
                  🍽️ Order Again
                </Link>
              </div>

              <div className="support-info-modern">
                <h4>Need Help?</h4>
                <p>📧 support@campusangel.com</p>
                <p>📱 1-800-CAMPUS</p>
                <p className="auto-update">🔄 Status updates every 30 seconds</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
