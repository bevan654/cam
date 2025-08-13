'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../../hooks/useAuth';
import { LoadingState, AuthRequiredState, StandardHeader } from '../../components/AuthStates';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

interface Order {
  id: string;
  items: any[];
  total: number;
  status: string;
  delivery_details: {
    building: string;
    room: string;
    instructions?: string;
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

export default function AccountPage() {
  const router = useRouter();
  const { user, loading, isAuthenticated, logout } = useAuth({ requireAuth: true, redirectToLogin: true });
  const [orders, setOrders] = useState<Order[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(false);

  const fetchOrders = useCallback(async () => {
    if (!user) return;
    
    setOrdersLoading(true);
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) return;

      const response = await fetch('/api/user-orders', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
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
      setOrdersLoading(false);
    }
  }, [user]);

  // Fetch orders when user is authenticated
  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user, fetchOrders]);



  if (loading) {
    return <LoadingState message="Loading account..." className="account-hero-bg" />;
  }

  if (!isAuthenticated) {
    return null; // Will redirect to login via useAuth hook
  }

  return (
    <div className="App">
      <div className="account-hero-bg">
        <StandardHeader user={user} loading={loading} onLogout={logout} />

        <section className="account-hero">
          <div className="account-hero-container">
            <div className="account-hero-content">
              <h1>👤 My Account</h1>
              <p>Manage your profile, orders, and preferences</p>
              
              <div className="account-hero-stats">
                <div className="modern-stat">
                  <span className="modern-stat-number">{orders.length}</span>
                  <span className="modern-stat-label">Total Orders</span>
                </div>
                <div className="modern-stat">
                  <span className="modern-stat-number">{orders.filter(o => o.status !== 'delivered').length}</span>
                  <span className="modern-stat-label">Active</span>
                </div>
                <div className="modern-stat">
                  <span className="modern-stat-number">🎓</span>
                  <span className="modern-stat-label">Student</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <main className="account-main">
        <div className="account-container-modern">
          {/* Profile Section */}
          <div className="account-section-modern">
            <div className="section-header-account">
              <h2>👤 Profile Information</h2>
              <p>Your personal details and contact information</p>
            </div>
            
            <div className="profile-card-modern">
              <div className="profile-avatar-modern">
                <div className="avatar-icon">👤</div>
                <div className="avatar-status">Online</div>
              </div>
              <div className="profile-info-modern">
                <h3>{user.firstName} {user.lastName}</h3>
                <p className="profile-email-modern">{user.email}</p>
                <span className="profile-badge">Campus Student</span>
              </div>
              <div className="profile-actions">
                <button className="btn-edit-profile">✏️ Edit</button>
              </div>
            </div>
            
            <div className="account-details-modern">
              <div className="details-grid">
                <div className="detail-card">
                  <div className="detail-icon">👤</div>
                  <div className="detail-content">
                    <span className="detail-label">Full Name</span>
                    <span className="detail-value">{user.firstName} {user.lastName}</span>
                  </div>
                </div>
                
                <div className="detail-card">
                  <div className="detail-icon">📧</div>
                  <div className="detail-content">
                    <span className="detail-label">Email Address</span>
                    <span className="detail-value">{user.email}</span>
                  </div>
                </div>
                
                <div className="detail-card">
                  <div className="detail-icon">📱</div>
                  <div className="detail-content">
                    <span className="detail-label">Phone Number</span>
                    <span className="detail-value">{user.phone || 'Not provided'}</span>
                  </div>
                </div>
                
                <div className="detail-card">
                  <div className="detail-icon">📅</div>
                  <div className="detail-content">
                    <span className="detail-label">Member Since</span>
                    <span className="detail-value">August 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Order Section */}
          <div className="account-section-modern">
            <div className="section-header-account">
              <h2>📦 Current Order</h2>
              <p>Track your active order and delivery status</p>
              {orders.length > 0 && orders[0].status !== 'delivered' && (
                <span className={`order-status-modern ${orders[0].status}`}>
                  {orders[0].status.replace('_', ' ').toUpperCase()}
                </span>
              )}
            </div>
            
            {ordersLoading ? (
              <div className="loading-orders-modern">
                <div className="loading-spinner">⏳</div>
                <p>Loading orders...</p>
              </div>
            ) : orders.length > 0 && orders[0].status !== 'delivered' ? (
              <div className="current-order-modern">
                <div className="order-header-modern">
                  <div className="order-info">
                    <h3>Order #{orders[0].id}</h3>
                    <span className="order-date">
                      {new Date(orders[0].created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="order-actions-modern">
                    <Link href={`/order-tracking?orderId=${orders[0].id}`} className="btn-track-order">
                      📍 Track Order
                    </Link>
                  </div>
                </div>
                <div className="order-summary-modern">
                  <div className="summary-cards">
                    <div className="summary-card">
                      <div className="summary-icon">💰</div>
                      <div className="summary-details">
                        <span className="summary-label">Total</span>
                        <span className="summary-value">${orders[0].total.toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="summary-card">
                      <div className="summary-icon">📦</div>
                      <div className="summary-details">
                        <span className="summary-label">Status</span>
                        <span className="summary-value">{orders[0].status.replace('_', ' ')}</span>
                      </div>
                    </div>
                    <div className="summary-card">
                      <div className="summary-icon">🏢</div>
                      <div className="summary-details">
                        <span className="summary-label">Delivery</span>
                        <span className="summary-value">{orders[0].delivery_details.building}, {orders[0].delivery_details.room}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-items">
                  <h4>Order Items:</h4>
                  {orders[0].items.map((item, index) => (
                    <div key={index} className="order-item-detail">
                      <div className="item-info">
                        <span className="item-name">{item.name}</span>
                        {item.customizations && (
                          <div className="item-customizations">
                            {Array.isArray(item.customizations) ? (
                              <span className="customization-text">
                                {item.customizations.map((customId: string) => {
                                  // Map customization IDs to friendly names
                                  const customNames: { [key: string]: string } = {
                                    'D134': 'White Bread', 'D129': 'Italian Bread', 'D133': 'Flatbread',
                                    'D131': 'Wheat Bread', 'D854': 'Multigrain Flatbread',
                                    'D139': 'American Cheese', 'D138': 'Swiss Cheese', 'D136': 'Cheddar Cheese',
                                    'D518': 'Ham', 'D317': 'Steak',
                                    'D171': 'Pickles', 'D169': 'Jalapeños', 'D170': 'Spinach',
                                    'D163': 'Tomatoes', 'D164': 'Onions', 'D165': 'Cucumbers',
                                    'D166': 'Green Peppers', 'D173': 'Banana Peppers', 'D167': 'Black Olives',
                                    'D162': 'Lettuce',
                                    'D145': 'Ranch', 'D147': 'BBQ Sauce', 'D149': 'Hot Sauce',
                                    'D154': 'Honey Mustard', 'D156': 'Chipotle Southwest', 'D157': 'Light Mayonnaise',
                                    'D146': 'Italian Dressing', 'D141': 'Mayonnaise', 'D151': 'Oil & Vinegar',
                                    'D144': 'Ketchup', 'D174': 'Vinegar', 'D153': 'Sweet Onion',
                                    'D143': 'Mustard', 'D668': 'Sriracha', 'D1478': 'Buffalo Sauce',
                                    'D160': 'Pepper', 'D159': 'Salt',
                                    '2575': 'Double Meat', '2594': 'Extra Bread', '2590': 'Extra Toppings',
                                    '3668': 'Premium Sauces', '2588': 'Extra Sauce', '2407': 'Extra Cheese',
                                    '2435': 'Premium Toppings'
                                  };
                                  return customNames[customId] || `Option ${customId}`;
                                }).join(', ')}
                              </span>
                            ) : (
                              <span className="customization-text">
                                {Object.entries(item.customizations).map(([key, values]) => {
                                  if (!Array.isArray(values) || values.length === 0) return null;
                                  const customizationName = key.charAt(0).toUpperCase() + key.slice(1);
                                  return `${customizationName}: ${values.join(', ')}`;
                                }).filter(Boolean).join(' | ')}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                      <div className="item-details">
                        <span className="item-quantity">x{item.quantity}</span>
                        <span className="item-price">${(item.totalPrice || item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="order-placeholder-modern">
                <div className="placeholder-icon">📦</div>
                <h3>No Active Orders</h3>
                <p>You don&apos;t have any orders in progress right now.</p>
                <Link href="/restaurants" className="btn-order-food">
                  🍽️ Order Food
                </Link>
              </div>
            )}
          </div>

          {/* Previous Orders Section */}
          <div className="account-section-modern">
            <div className="section-header-account">
              <h2>📋 Order History</h2>
              <p>View your previous orders and reorder favorites</p>
              {orders.length > 0 && (
                <span className="order-count-modern">{orders.length} total orders</span>
              )}
            </div>
            
            {ordersLoading ? (
              <div className="loading-orders">
                <div className="loading-spinner">⏳</div>
                <p>Loading orders...</p>
              </div>
            ) : orders.length > 0 ? (
              <div className="previous-orders-modern">
                 {orders.slice(0, 3).map((order) => (
                   <div key={order.id} className="order-item">
                     <div className="order-item-header">
                       <h4>Order #{order.id}</h4>
                       <span className={`order-status ${order.status}`}>
                         {order.status.replace('_', ' ').toUpperCase()}
                       </span>
                     </div>
                     <div className="order-item-details">
                       <p><strong>Date:</strong> {new Date(order.created_at).toLocaleDateString()}</p>
                       <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
                       <p><strong>Items:</strong> {order.items.length} item{order.items.length !== 1 ? 's' : ''}</p>
                       <p><strong>Delivery:</strong> {order.delivery_details.building}, {order.delivery_details.room}</p>
                     </div>
                     <div className="order-items-preview">
                       <h5>Order Contents:</h5>
                       <div className="items-list">
                         {order.items.slice(0, 3).map((item, index) => (
                           <div key={index} className="item-preview">
                             <div className="item-info">
                               <span className="item-name">{item.name}</span>
                               {item.customizations && (
                                 <div className="item-customizations-preview">
                                   {Array.isArray(item.customizations) ? (
                                     <span className="customization-text-small">
                                       {item.customizations.slice(0, 2).map((customId: string) => {
                                         const customNames: { [key: string]: string } = {
                                           'D134': 'White Bread', 'D129': 'Italian Bread', 'D133': 'Flatbread',
                                           'D131': 'Wheat Bread', 'D854': 'Multigrain Flatbread',
                                           'D139': 'American Cheese', 'D138': 'Swiss Cheese', 'D136': 'Cheddar Cheese',
                                           'D518': 'Ham', 'D317': 'Steak',
                                           'D171': 'Pickles', 'D169': 'Jalapeños', 'D170': 'Spinach',
                                           'D163': 'Tomatoes', 'D164': 'Onions', 'D165': 'Cucumbers',
                                           'D166': 'Green Peppers', 'D173': 'Banana Peppers', 'D167': 'Black Olives',
                                           'D162': 'Lettuce',
                                           'D145': 'Ranch', 'D147': 'BBQ Sauce', 'D149': 'Hot Sauce',
                                           'D154': 'Honey Mustard', 'D156': 'Chipotle Southwest', 'D157': 'Light Mayonnaise',
                                           'D146': 'Italian Dressing', 'D141': 'Mayonnaise', 'D151': 'Oil & Vinegar',
                                           'D144': 'Ketchup', 'D174': 'Vinegar', 'D153': 'Sweet Onion',
                                           'D143': 'Mustard', 'D668': 'Sriracha', 'D1478': 'Buffalo Sauce',
                                           'D160': 'Pepper', 'D159': 'Salt',
                                           '2575': 'Double Meat', '2594': 'Extra Bread', '2590': 'Extra Toppings',
                                           '3668': 'Premium Sauces', '2588': 'Extra Sauce', '2407': 'Extra Cheese',
                                           '2435': 'Premium Toppings'
                                         };
                                         return customNames[customId] || `Option ${customId}`;
                                       }).join(', ')}
                                       {item.customizations.length > 2 && ` +${item.customizations.length - 2} more`}
                                     </span>
                                   ) : (
                                     <span className="customization-text-small">
                                       {Object.entries(item.customizations).slice(0, 1).map(([key, values]) => {
                                         if (!Array.isArray(values) || values.length === 0) return null;
                                         const customizationName = key.charAt(0).toUpperCase() + key.slice(1);
                                         return `${customizationName}: ${values.slice(0, 2).join(', ')}`;
                                       }).filter(Boolean).join(' | ')}
                                     </span>
                                   )}
                                 </div>
                               )}
                             </div>
                             <span className="item-quantity">x{item.quantity}</span>
                           </div>
                         ))}
                         {order.items.length > 3 && (
                           <div className="more-items">
                             +{order.items.length - 3} more items
                           </div>
                         )}
                       </div>
                     </div>
                     <div className="order-item-actions">
                       {order.status !== 'delivered' ? (
                         <Link href={`/order-tracking?orderId=${order.id}`} className="btn btn-sm btn-primary">
                           Track
                         </Link>
                       ) : (
                         <Link href={`/order-tracking?orderId=${order.id}`} className="btn btn-sm btn-secondary">
                           View
                         </Link>
                       )}
                     </div>
                   </div>
                 ))}
                {orders.length > 3 && (
                  <div className="view-more-orders">
                    <Link href="/orders" className="btn btn-outline">
                      View All {orders.length} Orders
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <div className="orders-placeholder">
                <div className="placeholder-icon">📋</div>
                <h3>No Previous Orders</h3>
                <p>Your order history will appear here once you start ordering.</p>
                <Link href="/restaurants" className="btn btn-primary">
                  Start Ordering
                </Link>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="account-section-modern">
            <div className="section-header-account">
              <h2>⚡ Quick Actions</h2>
              <p>Fast access to your most used features</p>
            </div>
            
            <div className="quick-actions-modern">
              <Link href="/restaurants" className="action-card-modern">
                <div className="action-icon-modern">🍕</div>
                <div className="action-content">
                  <h3>Order Food</h3>
                  <p>Browse restaurants and place a new order</p>
                </div>
                <div className="action-arrow">→</div>
              </Link>
              
              <Link href="/cart" className="action-card-modern">
                <div className="action-icon-modern">🛒</div>
                <div className="action-content">
                  <h3>View Cart</h3>
                  <p>Check your current cart and proceed to checkout</p>
                </div>
                <div className="action-arrow">→</div>
              </Link>
              
              <button className="action-card-modern">
                <div className="action-icon-modern">⚙️</div>
                <div className="action-content">
                  <h3>Account Settings</h3>
                  <p>Update your profile and preferences</p>
                </div>
                <div className="action-arrow">→</div>
              </button>
              
              <button className="action-card-modern">
                <div className="action-icon-modern">🔒</div>
                <div className="action-content">
                  <h3>Security</h3>
                  <p>Change password and manage security settings</p>
                </div>
                <div className="action-arrow">→</div>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}