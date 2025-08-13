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
}

export default function OrderConfirmationPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, loading: authLoading, logout } = useAuth();
  const [orderId, setOrderId] = useState<string | null>(null);
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const id = searchParams.get('orderId');
    if (id) {
      setOrderId(id);
      validateOrder(id);
    } else {
      setLoading(false);
      setError('No order ID provided');
    }
  }, [searchParams]);

  const validateOrder = async (id: string) => {
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
          setError('Failed to validate order');
        }
        setLoading(false);
        return;
      }

      const data = await response.json();
      setOrder(data.order);
      setLoading(false);
    } catch (error) {
      console.error('Error validating order:', error);
      setError('Failed to validate order');
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingState 
      message="Validating Order..." 
      submessage="Please wait while we verify your order details."
      className="confirmation-hero-bg" 
    />;
  }

  if (error || !order) {
    return (
      <div className="App">
        <div className="confirmation-hero-bg">
          <StandardHeader user={user} loading={authLoading} onLogout={logout} />

          <main className="confirmation-main">
            <div className="confirmation-container-modern">
              <div className="confirmation-error">
                <div className="error-icon">❌</div>
                <h2>Order Not Found</h2>
                <p>{error || 'Unable to find order details. Please check your order history or contact support.'}</p>
                <div className="error-actions">
                  <Link href="/account" className="btn-error-primary">
                    📋 View Orders
                  </Link>
                  <Link href="/restaurants" className="btn-error-secondary">
                    🍽️ Order Again
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="confirmation-hero-bg">
        <StandardHeader user={user} loading={authLoading} onLogout={logout} />

        <section className="confirmation-hero">
          <div className="confirmation-hero-container">
            <div className="confirmation-hero-content">
              <div className="success-icon">✅</div>
              <h1>Order Confirmed!</h1>
              <p className="order-id">Order #{order.id}</p>
              <p>Thank you for your order! We&apos;ve received your payment and your food is being prepared.</p>
              
              <div className="confirmation-hero-stats">
                <div className="modern-stat">
                  <span className="modern-stat-number">${order.total.toFixed(0)}</span>
                  <span className="modern-stat-label">Total Paid</span>
                </div>
                <div className="modern-stat">
                  <span className="modern-stat-number">20min</span>
                  <span className="modern-stat-label">Est. Delivery</span>
                </div>
                <div className="modern-stat">
                  <span className="modern-stat-number">✓</span>
                  <span className="modern-stat-label">Confirmed</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <main className="confirmation-main">
        <div className="confirmation-container-modern">
          <div className="confirmation-layout">
            {/* Order Details */}
            <div className="order-details-modern">
              <div className="details-section">
                <div className="section-header-confirmation">
                  <h2>📋 Order Summary</h2>
                  <span className={`status-badge-modern ${order.status}`}>{order.status.toUpperCase()}</span>
                </div>
                
                <div className="summary-grid">
                  <div className="summary-item">
                    <div className="summary-icon">💰</div>
                    <div className="summary-content">
                      <span className="summary-label">Total Amount</span>
                      <span className="summary-value">${order.total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="summary-item">
                    <div className="summary-icon">💳</div>
                    <div className="summary-content">
                      <span className="summary-label">Payment Method</span>
                      <span className="summary-value">{order.payment_method}</span>
                    </div>
                  </div>
                  
                  <div className="summary-item">
                    <div className="summary-icon">📅</div>
                    <div className="summary-content">
                      <span className="summary-label">Order Date</span>
                      <span className="summary-value">{new Date(order.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="summary-item">
                    <div className="summary-icon">📦</div>
                    <div className="summary-content">
                      <span className="summary-label">Order ID</span>
                      <span className="summary-value">#{order.id.slice(0, 8)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="details-section">
                <div className="section-header-confirmation">
                  <h2>🏢 Delivery Details</h2>
                </div>
                
                <div className="delivery-card">
                  <div className="delivery-info-item">
                    <span className="delivery-label">Building:</span>
                    <span className="delivery-value">{order.delivery_details.building}</span>
                  </div>
                  <div className="delivery-info-item">
                    <span className="delivery-label">Room/Area:</span>
                    <span className="delivery-value">{order.delivery_details.room}</span>
                  </div>
                  {order.delivery_details.instructions && (
                    <div className="delivery-info-item">
                      <span className="delivery-label">Instructions:</span>
                      <span className="delivery-value">{order.delivery_details.instructions}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="details-section">
                <div className="section-header-confirmation">
                  <h2>📞 Contact Information</h2>
                </div>
                
                <div className="contact-card">
                  <div className="contact-info-item">
                    <span className="contact-label">Name:</span>
                    <span className="contact-value">{order.contact_info.name}</span>
                  </div>
                  <div className="contact-info-item">
                    <span className="contact-label">Phone:</span>
                    <span className="contact-value">{order.contact_info.phone}</span>
                  </div>
                  <div className="contact-info-item">
                    <span className="contact-label">Email:</span>
                    <span className="contact-value">{order.contact_info.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Panel */}
            <div className="action-panel-modern">
              <div className="delivery-timeline">
                <h3>🚚 Delivery Timeline</h3>
                <div className="timeline-item">
                  <div className="timeline-icon confirmed">✓</div>
                  <div className="timeline-content">
                    <span className="timeline-title">Order Confirmed</span>
                    <span className="timeline-desc">Payment received and order sent to restaurant</span>
                  </div>
                </div>
                <div className="timeline-item upcoming">
                  <div className="timeline-icon">👨‍🍳</div>
                  <div className="timeline-content">
                    <span className="timeline-title">Preparing Food</span>
                    <span className="timeline-desc">Restaurant is preparing your order</span>
                  </div>
                </div>
                <div className="timeline-item upcoming">
                  <div className="timeline-icon">🚴</div>
                  <div className="timeline-content">
                    <span className="timeline-title">Out for Delivery</span>
                    <span className="timeline-desc">Driver will pick up and deliver your order</span>
                  </div>
                </div>
                <div className="timeline-item upcoming">
                  <div className="timeline-icon">🎉</div>
                  <div className="timeline-content">
                    <span className="timeline-title">Delivered!</span>
                    <span className="timeline-desc">Enjoy your meal</span>
                  </div>
                </div>
              </div>

              <div className="action-buttons">
                <Link href={`/order-tracking?orderId=${order.id}`} className="btn-track-order-modern">
                  📍 Track Order
                </Link>
                <Link href="/account" className="btn-view-orders">
                  📋 View All Orders
                </Link>
              </div>

              <div className="support-card">
                <h4>Need Help?</h4>
                <p>Our support team is here to help!</p>
                <p><strong>📧 support@campusangel.com</strong></p>
                <p><strong>📱 1-800-CAMPUS</strong></p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
