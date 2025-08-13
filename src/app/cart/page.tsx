'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../../hooks/useAuth';
import { StandardHeader } from '../../components/AuthStates';

interface CartItem {
  id: string;
  buildId: string;
  name: string;
  price: number;
  quantity: number;
  customizations: string[] | Record<string, string[]>;
  totalPrice: number;
}

export default function CartPage() {
  const router = useRouter();
  const { user, loading: authLoading, logout } = useAuth();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('campus-angel-cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        // Validate cart structure and filter out invalid items
        const validCart = parsedCart.filter((item: any) => 
          item && 
          item.id && 
          item.buildId && 
          item.name && 
          typeof item.price === 'number' &&
          typeof item.quantity === 'number' &&
          item.customizations &&
          typeof item.customizations === 'object'
        ).map((item: any) => ({
          ...item,
          totalPrice: item.totalPrice || item.price * item.quantity
        }));
        setCart(validCart);
        
        // Update localStorage with cleaned cart if there were invalid items
        if (validCart.length !== parsedCart.length) {
          localStorage.setItem('campus-angel-cart', JSON.stringify(validCart));
        }
      } catch (error) {
        console.error('Error parsing cart:', error);
        setCart([]);
        localStorage.removeItem('campus-angel-cart');
      }
    }
    setLoading(false);
  }, []);

  const updateQuantity = (itemKey: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      // Remove item
      const updatedCart = cart.filter(item => {
        const itemKeyToCheck = getItemKey(item);
        return itemKeyToCheck !== itemKey;
      });
      setCart(updatedCart);
      localStorage.setItem('campus-angel-cart', JSON.stringify(updatedCart));
    } else {
      // Update quantity
      const updatedCart = cart.map(item => {
        const itemKeyToCheck = getItemKey(item);
        
        if (itemKeyToCheck === itemKey) {
          return { ...item, quantity: newQuantity, totalPrice: item.price * newQuantity };
        }
        return item;
      });
      setCart(updatedCart);
      localStorage.setItem('campus-angel-cart', JSON.stringify(updatedCart));
    }
  };

  // Helper function to generate consistent item keys
  const getItemKey = (item: CartItem): string => {
    if (Array.isArray(item.customizations)) {
      // Handle array of customization IDs
      return `${item.id}-${item.buildId}-${item.customizations.sort().join(',')}`;
    } else {
      // Handle object format customizations
      return `${item.id}-${item.buildId}-${Object.entries(item.customizations)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([k, v]) => `${k}:${Array.isArray(v) ? v.sort().join(',') : ''}`)
        .join('|')}`;
    }
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('campus-angel-cart');
  };

  const getCustomizationText = (customizations: Record<string, string[]>) => {
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

  // Map customization IDs to friendly names (same as in Subway page)
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

  const getCustomizationDisplay = (customizations: string[] | Record<string, string[]>) => {
    // Handle case where customizations is an array of IDs (from Subway page)
    if (Array.isArray(customizations)) {
      if (customizations.length === 0) {
        return <div className="customization-item">
          <span className="customization-label">No customizations</span>
        </div>;
      }
      
      // Group customizations by category
      const grouped: { [key: string]: string[] } = {};
      
      customizations.forEach(id => {
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
      
      // Display grouped customizations
      return Object.entries(grouped).map(([category, items]) => (
        <div key={category} className="customization-item">
          <span className="customization-label">{category}:</span>
          <span className="customization-values">{items.join(', ')}</span>
        </div>
      ));
    }
    
    // Handle case where customizations is already an object (legacy format)
    if (!customizations || Object.keys(customizations).length === 0) {
      return <div className="customization-item">
        <span className="customization-label">No customizations</span>
      </div>;
    }
    
    const customizationEntries = Object.entries(customizations)
      .filter(([key, values]) => Array.isArray(values) && values.length > 0);
    
    if (customizationEntries.length === 0) {
      return <div className="customization-item">
        <span className="customization-label">No customizations</span>
      </div>;
    }
    
    return customizationEntries.map(([key, values]) => {
      const customizationName = key.charAt(0).toUpperCase() + key.slice(1);
      return (
        <div key={key} className="customization-item">
          <span className="customization-label">{customizationName}:</span>
          <span className="customization-values">{values.join(', ')}</span>
        </div>
      );
    });
  };

  const getItemTotalPrice = (item: CartItem) => {
    return item.totalPrice || item.price * item.quantity;
  };

  const subtotal = cart.reduce((sum, item) => sum + getItemTotalPrice(item), 0);
  const deliveryFee = cart.length > 0 ? 2.99 : 0;
  const total = subtotal + deliveryFee;

  if (loading) {
    return (
      <div className="App">
        <div className="cart-hero-bg">
          <StandardHeader user={user} loading={authLoading} onLogout={logout} />

          <main className="cart-main">
            <div className="cart-container-modern">
              <div className="cart-loading">
                <div className="loading-spinner">⏳</div>
                <h2>Loading your cart...</h2>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="App">
        <div className="cart-hero-bg">
          <StandardHeader user={user} loading={authLoading} onLogout={logout} />

          <main className="cart-main">
            <div className="cart-container-modern">
              <div className="empty-cart-modern">
                <div className="empty-cart-icon">🛒</div>
                <h1>Your cart is empty</h1>
                <p>Looks like you haven&apos;t added any items to your cart yet. Discover delicious food from campus restaurants!</p>
                <Link href="/restaurants" className="btn-cart-primary">
                  🍽️ Browse Restaurants
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="cart-hero-bg">
        <StandardHeader user={user} loading={authLoading} onLogout={logout} />

        <section className="cart-hero">
          <div className="cart-hero-container">
            <div className="cart-hero-content">
              <h1>🛒 Your Cart</h1>
              <p>Review your delicious selections and checkout when ready!</p>
              
              <div className="cart-hero-stats">
                <div className="modern-stat">
                  <span className="modern-stat-number">{cart.length}</span>
                  <span className="modern-stat-label">Items</span>
                </div>
                <div className="modern-stat">
                  <span className="modern-stat-number">${subtotal.toFixed(0)}</span>
                  <span className="modern-stat-label">Subtotal</span>
                </div>
                <div className="modern-stat">
                  <span className="modern-stat-number">20min</span>
                  <span className="modern-stat-label">Est. Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <main className="cart-main">
        <div className="cart-container-modern">
          <div className="cart-header-modern">
            <h2>Cart Items</h2>
            <button onClick={clearCart} className="btn-clear-cart">
              🗑️ Clear Cart
            </button>
          </div>

          <div className="cart-layout-modern">
            {/* Cart Items */}
            <div className="cart-items-modern">
              {cart.map((item, index) => {
                const itemKey = getItemKey(item);

                return (
                  <div key={itemKey} className="cart-item-modern">
                    <div className="cart-item-header">
                      <h3 className="item-name-modern">{item.name}</h3>
                      <div className="item-price-modern">${item.price.toFixed(2)} each</div>
                    </div>
                    
                    <div className="item-customizations-modern">
                      {getCustomizationDisplay(item.customizations)}
                    </div>
                    
                    <div className="cart-item-footer">
                      <div className="quantity-controls-modern">
                        <button
                          onClick={() => updateQuantity(itemKey, item.quantity - 1)}
                          className="quantity-btn-modern minus"
                          disabled={item.quantity <= 1}
                        >
                          −
                        </button>
                        <span className="quantity-modern">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(itemKey, item.quantity + 1)}
                          className="quantity-btn-modern plus"
                        >
                          +
                        </button>
                      </div>
                      
                      <div className="item-total-modern">
                        ${getItemTotalPrice(item).toFixed(2)}
                      </div>
                      
                      <button
                        onClick={() => {
                          if (window.confirm(`Remove "${item.name}" from cart?`)) {
                            updateQuantity(itemKey, 0);
                          }
                        }}
                        className="remove-btn-modern"
                        title={`Remove ${item.name} from cart`}
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Order Summary */}
            <div className="order-summary-modern">
              <div className="summary-header">
                <h2>Order Summary</h2>
                <div className="summary-icon">📋</div>
              </div>
              
              <div className="summary-details-modern">
                <div className="summary-line-modern">
                  <span>Items ({cart.length})</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-line-modern">
                  <span>Delivery Fee</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="summary-divider"></div>
                <div className="summary-line-modern total">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="delivery-info-modern">
                <h4>🚚 Delivery Details</h4>
                <div className="delivery-details">
                  <p>🕒 20-30 minutes</p>
                  <p>📍 Campus delivery only</p>
                </div>
              </div>

              <div className="cart-actions">
                <button
                  onClick={() => router.push('/checkout')}
                  className="btn-checkout-modern"
                  disabled={cart.length === 0}
                >
                  🛒 Proceed to Checkout
                </button>

                <Link href="/restaurants" className="btn-continue-shopping">
                  ← Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
