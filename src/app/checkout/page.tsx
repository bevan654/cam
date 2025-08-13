'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useAuth } from '../../hooks/useAuth';
import { LoadingState, AuthRequiredState, StandardHeader } from '../../components/AuthStates';
import StripePaymentForm from '../../components/StripePaymentForm';

interface CheckoutForm {
  deliveryDetails: {
    building: string;
    room: string;
    instructions: string;
  };
  contactInfo: {
    name: string;
    phone: string;
    email: string;
  };
  paymentMethod: string;
}

type FormSection = 'deliveryDetails' | 'contactInfo';

export default function CheckoutPage() {
  const router = useRouter();
  const { user, loading: authLoading, isAuthenticated, logout } = useAuth({ requireAuth: true, redirectToLogin: false });
  
  // Stripe configuration
  const [stripePromise, setStripePromise] = useState<any>(null);
  const [paymentLoading, setPaymentLoading] = useState(false);
  
  const [formData, setFormData] = useState<CheckoutForm>({
    deliveryDetails: {
      building: '',
      room: '',
      instructions: ''
    },
    contactInfo: {
      name: '',
      phone: '',
      email: ''
    },
    paymentMethod: 'card'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cardError, setCardError] = useState<string>('');
  const [paymentMethodHandler, setPaymentMethodHandler] = useState<any>(null);

  // Get cart from localStorage
  const [cart, setCart] = useState<any[]>([]);

  // Pre-fill form data when user is loaded
  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        contactInfo: {
          name: `${user.firstName} ${user.lastName}`,
          phone: user.phone || '',
          email: user.email
        }
      }));
    }
  }, [user]);

  // Initialize Stripe
  useEffect(() => {
    const initStripe = async () => {
      const stripeInstance = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
      setStripePromise(stripeInstance);
    };
    
    if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      initStripe();
    }
  }, []);

  useEffect(() => {
    const savedCart = localStorage.getItem('campus-angel-cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error parsing cart:', error);
        setCart([]);
      }
    }
    setLoading(false);
  }, []);

  // Map customization IDs to friendly names (same as in cart page)
  const CUSTOMIZATION_NAMES: { [key: string]: string } = {
    // Bread options
    'D134': 'White Bread',
    'D129': 'Italian Bread',
    'D133': 'Flatbread',
    'D131': 'Wheat Bread',
    'D854': 'Multigrain Flatbread',
    
    // Cheese options
    'D139': 'American Cheese',
    'D138': 'Swiss Cheese',
    'D136': 'Cheddar Cheese',
    
    // Protein options
    'D518': 'Ham',
    'D317': 'Steak',
    
    // Vegetable options
    'D171': 'Pickles',
    'D169': 'Jalapeños',
    'D170': 'Spinach',
    'D163': 'Tomatoes',
    'D164': 'Onions',
    'D165': 'Cucumbers',
    'D166': 'Green Peppers',
    'D173': 'Banana Peppers',
    'D167': 'Black Olives',
    'D162': 'Lettuce',
    
    // Sauce options
    'D145': 'Ranch',
    'D147': 'BBQ Sauce',
    'D149': 'Hot Sauce',
    'D154': 'Honey Mustard',
    'D156': 'Chipotle Southwest',
    'D157': 'Light Mayonnaise',
    'D146': 'Italian Dressing',
    'D141': 'Mayonnaise',
    'D151': 'Oil & Vinegar',
    'D144': 'Ketchup',
    'D174': 'Vinegar',
    'D153': 'Sweet Onion',
    'D143': 'Mustard',
    'D668': 'Sriracha',
    'D1478': 'Buffalo Sauce',
    
    // Seasonings
    'D160': 'Pepper',
    'D159': 'Salt',
    
    // Extra options
    '2575': 'Double Meat',
    '2594': 'Extra Bread',
    '2590': 'Extra Toppings',
    '3668': 'Premium Sauces',
    '2588': 'Extra Sauce',
    '2407': 'Extra Cheese',
    '2435': 'Premium Toppings',
  };

  const getCustomizationText = (customizations: any) => {
    // Handle case where customizations is an array of IDs (from Subway page)
    if (Array.isArray(customizations)) {
      if (customizations.length === 0) {
        return 'No customizations';
      }
      
      // Group customizations by category
      const grouped: { [key: string]: string[] } = {};
      
      customizations.forEach((id: string) => {
        const name = CUSTOMIZATION_NAMES[id] || `Option ${id}`;
        let category = 'Other';
        
        // Determine category based on ID or name
        if (id.startsWith('D1') && ['D134', 'D129', 'D133', 'D131', 'D854'].includes(id)) {
          category = 'Bread';
        } else if (id.startsWith('D1') && ['D139', 'D138', 'D136'].includes(id)) {
          category = 'Cheese';
        } else if (id.startsWith('D5') || id === 'D317') {
          category = 'Protein';
        } else if (id.startsWith('D1') && ['D171', 'D169', 'D170', 'D163', 'D164', 'D165', 'D166', 'D173', 'D167', 'D162'].includes(id)) {
          category = 'Vegetables';
        } else if (id.startsWith('D1') && ['D145', 'D147', 'D149', 'D154', 'D156', 'D157', 'D146', 'D141', 'D151', 'D144', 'D174', 'D153', 'D143', 'D668', 'D1478'].includes(id)) {
          category = 'Sauces';
        } else if (['D160', 'D159'].includes(id)) {
          category = 'Seasonings';
        } else if (['2575', '2594', '2590', '3668', '2588', '2407', '2435'].includes(id)) {
          category = 'Extras';
        }
        
        if (!grouped[category]) {
          grouped[category] = [];
        }
        grouped[category].push(name);
      });
      
      // Return grouped customizations as text
      return Object.entries(grouped)
        .map(([category, items]) => `${category}: ${items.join(', ')}`)
        .join(' | ');
    }
    
    // Handle case where customizations is already an object (legacy format)
    if (!customizations || Object.keys(customizations).length === 0) {
      return 'No customizations';
    }
    
    return Object.entries(customizations)
      .map(([key, values]) => {
        if (!Array.isArray(values) || values.length === 0) return null;
        const customizationName = key.charAt(0).toUpperCase() + key.slice(1);
        return `${customizationName}: ${values.join(', ')}`;
      })
      .filter(Boolean)
      .join(' | ');
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.totalPrice || item.price * item.quantity), 0);
  const deliveryFee = cart.length > 0 ? 2.99 : 0;
  const total = subtotal + deliveryFee;

  // Redirect to cart if empty
  useEffect(() => {
    if (cart.length === 0 && !loading) {
      router.push('/cart');
    }
  }, [cart, loading, router]);

  const handleInputChange = (section: FormSection, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if there are card errors
    if (cardError) {
      alert('Please fix the card errors before proceeding.');
      return;
    }

    // Check if payment method handler is not ready
    if (!paymentMethodHandler) {
      alert('Please wait for the payment form to load.');
      return;
    }

    setIsSubmitting(true);
    setPaymentLoading(true);

    try {
      // Step 1: Client requests checkout - call backend to create PaymentIntent
      const paymentIntentResponse = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cart,
          total: total,
        }),
      });

      if (!paymentIntentResponse.ok) {
        const errorData = await paymentIntentResponse.json();
        throw new Error(errorData.error || 'Failed to create payment intent');
      }

      const { clientSecret, paymentIntentId } = await paymentIntentResponse.json();

      // Step 3: Client confirms payment with Stripe.js
      if (!stripePromise) {
        throw new Error('Stripe not initialized');
      }

      // Create payment method from the card form
      const paymentMethod = await paymentMethodHandler.createPaymentMethod();
      
      // Confirm the payment with the payment method
      const stripe = await stripePromise;
      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

      if (stripeError) {
        throw new Error(stripeError.message);
      }

      if (paymentIntent.status !== 'succeeded') {
        throw new Error('Payment failed');
      }

      // Step 4: On payment success, send to backend to create order
      const orderResponse = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify({
          paymentIntentId: paymentIntentId,
          items: cart,
          total: total,
          deliveryDetails: formData.deliveryDetails,
          contactInfo: formData.contactInfo,
          paymentMethod: 'card',
        }),
      });

      if (!orderResponse.ok) {
        const errorData = await orderResponse.json();
        throw new Error(errorData.error || 'Failed to create order');
      }

      const { orderId } = await orderResponse.json();

      // Clear cart from localStorage
      localStorage.removeItem('campus-angel-cart');

      // Redirect to order tracking page
      router.push(`/order-tracking?orderId=${orderId}`);

    } catch (error) {
      console.error('Error processing payment:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      alert(`Payment failed: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
      setPaymentLoading(false);
    }
  };

  // Handle different states
  if (authLoading) {
    return <LoadingState message="Checking authentication..." className="checkout-hero-bg" />;
  }

  if (!isAuthenticated) {
    return <AuthRequiredState 
      message="Authentication Required" 
      submessage="You must be logged in to access the checkout page."
      className="checkout-hero-bg" 
    />;
  }

  if (loading) {
    return <LoadingState message="Loading checkout..." className="checkout-hero-bg" />;
  }

  if (cart.length === 0) {
    return <LoadingState message="Redirecting to cart..." className="checkout-hero-bg" />;
  }

  return (
    <div className="App">
      <div className="checkout-hero-bg">
        <StandardHeader user={user} loading={authLoading} onLogout={logout} />

        <section className="checkout-hero">
          <div className="checkout-hero-container">
            <div className="checkout-hero-content">
              <h1>🛒 Secure Checkout</h1>
              <p>Complete your order with our secure payment system</p>
              
              <div className="checkout-hero-stats">
                <div className="modern-stat">
                  <span className="modern-stat-number">{cart.length}</span>
                  <span className="modern-stat-label">Items</span>
                </div>
                <div className="modern-stat">
                  <span className="modern-stat-number">${total.toFixed(0)}</span>
                  <span className="modern-stat-label">Total</span>
                </div>
                <div className="modern-stat">
                  <span className="modern-stat-number">🔒</span>
                  <span className="modern-stat-label">Secure</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <main className="checkout-main">
        <div className="checkout-container-modern">
          <div className="checkout-layout-modern">
            {/* Checkout Form */}
            <div className="checkout-form-modern">
              <form onSubmit={handleSubmit}>
                {/* Delivery Details */}
                <section className="form-section-modern">
                  <div className="section-header-modern">
                    <h2>📍 Delivery Details</h2>
                    <p>Where should we deliver your order?</p>
                  </div>
                  
                  <div className="form-grid">
                    <div className="form-group-modern">
                      <label htmlFor="building">Building *</label>
                      <div className="input-wrapper-modern">
                        <span className="input-icon">🏢</span>
                        <input
                          type="text"
                          id="building"
                          className="form-input-modern"
                          value={formData.deliveryDetails.building}
                          onChange={(e) => handleInputChange('deliveryDetails', 'building', e.target.value)}
                          required
                          placeholder="e.g., Student Center"
                        />
                      </div>
                    </div>
                    
                    <div className="form-group-modern">
                      <label htmlFor="room">Room/Area *</label>
                      <div className="input-wrapper-modern">
                        <span className="input-icon">🚪</span>
                        <input
                          type="text"
                          id="room"
                          className="form-input-modern"
                          value={formData.deliveryDetails.room}
                          onChange={(e) => handleInputChange('deliveryDetails', 'room', e.target.value)}
                          required
                          placeholder="e.g., Room 101, Library"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group-modern">
                    <label htmlFor="instructions">Delivery Instructions</label>
                    <div className="input-wrapper-modern">
                      <span className="input-icon">📝</span>
                      <textarea
                        id="instructions"
                        className="form-input-modern"
                        value={formData.deliveryDetails.instructions}
                        onChange={(e) => handleInputChange('deliveryDetails', 'instructions', e.target.value)}
                        placeholder="Any special instructions for delivery..."
                        rows={3}
                      />
                    </div>
                  </div>
                </section>

                {/* Contact Information */}
                <section className="form-section-modern">
                  <div className="section-header-modern">
                    <h2>📞 Contact Information</h2>
                    <p>How can we reach you for delivery updates?</p>
                  </div>
                  
                  <div className="form-group-modern">
                    <label htmlFor="name">Full Name *</label>
                    <div className="input-wrapper-modern">
                      <span className="input-icon">👤</span>
                      <input
                        type="text"
                        id="name"
                        className="form-input-modern"
                        value={formData.contactInfo.name}
                        onChange={(e) => handleInputChange('contactInfo', 'name', e.target.value)}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  
                  <div className="form-grid">
                    <div className="form-group-modern">
                      <label htmlFor="phone">Phone Number *</label>
                      <div className="input-wrapper-modern">
                        <span className="input-icon">📱</span>
                        <input
                          type="tel"
                          id="phone"
                          className="form-input-modern"
                          value={formData.contactInfo.phone}
                          onChange={(e) => handleInputChange('contactInfo', 'phone', e.target.value)}
                          required
                          placeholder="+1234567890"
                        />
                      </div>
                    </div>
                    
                    <div className="form-group-modern">
                      <label htmlFor="email">Email *</label>
                      <div className="input-wrapper-modern">
                        <span className="input-icon">📧</span>
                        <input
                          type="email"
                          id="email"
                          className="form-input-modern"
                          value={formData.contactInfo.email}
                          onChange={(e) => handleInputChange('contactInfo', 'email', e.target.value)}
                          required
                          placeholder="your.email@university.edu"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                {/* Payment Method */}
                <section className="form-section-modern">
                  <div className="section-header-modern">
                    <h2>💳 Payment Method</h2>
                    <p>Secure payment powered by Stripe</p>
                  </div>
                  
                  <div className="payment-info-modern">
                    <div className="payment-icon-modern">💳</div>
                    <div className="payment-text">
                      <h4>Credit/Debit Card</h4>
                      <p>Your payment information is secure and encrypted</p>
                    </div>
                    <div className="payment-badges">
                      <span className="badge">💳 Visa</span>
                      <span className="badge">💳 MC</span>
                      <span className="badge">🔒 SSL</span>
                    </div>
                  </div>

                  {/* Show Stripe Elements for card payment */}
                  {stripePromise && (
                    <div className="stripe-section-modern">
                      <Elements stripe={stripePromise}>
                        <StripePaymentForm 
                          amount={total}
                          onCardError={setCardError}
                          onPaymentMethodReady={setPaymentMethodHandler}
                        />
                      </Elements>
                    </div>
                  )}
                </section>

                <button 
                  type="submit" 
                  className="btn-place-order"
                  disabled={isSubmitting || paymentLoading || !!cardError || !paymentMethodHandler}
                >
                  {paymentLoading ? '⏳ Processing Payment...' : 
                   isSubmitting ? '📦 Processing Order...' : 
                   `🛒 Place Order - $${total.toFixed(2)}`}
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="order-summary-checkout">
              <div className="summary-header-checkout">
                <h2>Order Summary</h2>
                <div className="summary-icon">📋</div>
              </div>
              
              <div className="order-items-checkout">
                {cart.map((item, index) => {
                  const customizationsText = getCustomizationText(item.customizations);
                  
                  return (
                    <div key={index} className="order-item-checkout">
                      <div className="item-info-checkout">
                        <h4>{item.name}</h4>
                        <p className="customizations-checkout">{customizationsText}</p>
                        <p className="quantity-checkout">Qty: {item.quantity}</p>
                      </div>
                      <div className="item-price-checkout">
                        ${(item.totalPrice || item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="order-totals-checkout">
                <div className="total-line-checkout">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="total-line-checkout">
                  <span>Delivery Fee:</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="summary-divider"></div>
                <div className="total-line-checkout total">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="delivery-info-checkout">
                <h4>🚚 Delivery Details</h4>
                <div className="delivery-details">
                  <p>🕒 20-30 minutes</p>
                  <p>📍 Campus delivery only</p>
                  <p>🔔 SMS updates included</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
