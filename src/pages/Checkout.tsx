import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import Navbar from '../components/Navbar'
import StripePaymentForm from '../components/StripePaymentForm'


type CartItem = {
  id: string
  buildId: string
  name: string
  price: number
  quantity: number
  customizations?: string[]
}

type DeliveryDetails = {
  building: string
  roomNumber: string
  instructions: string
  deliveryTime: 'asap' | 'scheduled'
  scheduledTime: string
}

type ContactInfo = {
  name: string
  studentId: string
  phone: string
  email: string
}

type PaymentInfo = {
  method: 'stripe' | 'campus-wallet' | 'cash'
  stripePaymentIntent?: any
  cardholderName: string
}

type Order = {
  id: string
  items: CartItem[]
  deliveryDetails: DeliveryDetails
  contactInfo: ContactInfo
  paymentInfo: PaymentInfo
  subtotal: number
  deliveryFee: number
  total: number
  estimatedDelivery: string
  orderTime: string
}

const UNIVERSITY_BUILDINGS = [
  'Building A - Science Complex',
  'Building B - Engineering',
  'Building C - Arts & Humanities',
  'Building D - Business School',
  'Building E - Student Residences East',
  'Building F - Student Residences West',
  'Building G - Sports Complex',
  'Building H - Library & Study Center',
  'Building J - Medical School',
  'Building K - Graduate Studies'
]

export default function CheckoutPage() {
  const navigate = useNavigate()
  const stripe = useStripe()
  const elements = useElements()
  const [cart, setCart] = useState<CartItem[]>([])
  const [currentStep, setCurrentStep] = useState<'checkout' | 'confirmation'>('checkout')
  const [orderId, setOrderId] = useState<string>('')
  
  // Form states
  const [deliveryDetails, setDeliveryDetails] = useState<DeliveryDetails>({
    building: '',
    roomNumber: '',
    instructions: '',
    deliveryTime: 'asap',
    scheduledTime: ''
  })
  
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    name: '',
    studentId: '',
    phone: '',
    email: ''
  })
  
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    method: 'stripe',
    cardholderName: ''
  })
  
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [isProcessing, setIsProcessing] = useState(false)

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('campus-angel-cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const deliveryFee = 5.99
  const total = subtotal + deliveryFee

  // Validation functions
  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {}

    // Delivery validation
    if (!deliveryDetails.building) newErrors.building = 'Building selection is required'
    if (!deliveryDetails.roomNumber) newErrors.roomNumber = 'Room number is required'
    if (!/^[a-zA-Z0-9]{1,6}$/.test(deliveryDetails.roomNumber)) {
      newErrors.roomNumber = 'Room number must be alphanumeric, up to 6 characters'
    }
    if (deliveryDetails.deliveryTime === 'scheduled' && !deliveryDetails.scheduledTime) {
      newErrors.scheduledTime = 'Please select a delivery time'
    }

    // Contact validation
    if (!contactInfo.name.trim()) newErrors.name = 'Name is required'
    if (!contactInfo.phone) newErrors.phone = 'Phone number is required'
    if (!/^\d{8,12}$/.test(contactInfo.phone)) {
      newErrors.phone = 'Phone number must be 8-12 digits'
    }
    if (!contactInfo.email) newErrors.email = 'Email is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactInfo.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Payment validation
    if (paymentInfo.method === 'stripe') {
      if (!paymentInfo.cardholderName.trim()) newErrors.cardholderName = 'Cardholder name is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const updateQuantity = (itemId: string, buildId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(itemId, buildId)
      return
    }
    
    const updatedCart = cart.map(item => 
      item.id === itemId && item.buildId === buildId 
        ? { ...item, quantity: newQuantity }
        : item
    )
    setCart(updatedCart)
    localStorage.setItem('campus-angel-cart', JSON.stringify(updatedCart))
  }

  const removeItem = (itemId: string, buildId: string) => {
    const updatedCart = cart.filter(item => !(item.id === itemId && item.buildId === buildId))
    setCart(updatedCart)
    localStorage.setItem('campus-angel-cart', JSON.stringify(updatedCart))
  }

  const generateEstimatedDelivery = (): string => {
    if (deliveryDetails.deliveryTime === 'scheduled') {
      return deliveryDetails.scheduledTime
    }
    const now = new Date()
    now.setMinutes(now.getMinutes() + 25) // 25 minutes from now
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  const placeOrder = async () => {
    if (!validateForm()) return
    if (cart.length === 0) {
      alert('Your cart is empty')
      return
    }

    setIsProcessing(true)
    
    try {
      // Handle Stripe payment if selected
      if (paymentInfo.method === 'stripe') {
        if (!stripe || !elements) {
          throw new Error('Stripe not initialized')
        }

        // Get card element
        const cardElement = elements.getElement(CardElement)
        if (!cardElement) {
          throw new Error('Please enter your card details')
        }

        // Step 1: Create PaymentIntent on the server
        const response = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amountCents: Math.round(total * 100), // Convert to cents
            currency: 'AUD'
          })
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || 'Failed to create payment intent')
        }

        const { clientSecret } = await response.json()

        // Step 2: Confirm the payment with Stripe
        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: paymentInfo.cardholderName,
            },
          },
        })

        if (error) {
          throw new Error(error.message || 'Payment failed')
        }

        if (paymentIntent.status !== 'succeeded') {
          throw new Error('Payment was not successful')
        }

        // Update payment info with successful payment
        setPaymentInfo(prev => ({
          ...prev,
          stripePaymentIntent: paymentIntent
        }))
      }
      
      // Create order
      const newOrderId = 'CA' + Date.now().toString().slice(-6)
      setOrderId(newOrderId)
      
      // Save order to localStorage
      const order: Order = {
        id: newOrderId,
        items: cart,
        deliveryDetails,
        contactInfo,
        paymentInfo,
        subtotal,
        deliveryFee,
        total,
        estimatedDelivery: generateEstimatedDelivery(),
        orderTime: new Date().toLocaleString()
      }
      
      localStorage.setItem(`order-${newOrderId}`, JSON.stringify(order))
      localStorage.removeItem('campus-angel-cart') // Clear cart
      
      setIsProcessing(false)
      setCurrentStep('confirmation')
      
    } catch (error) {
      setIsProcessing(false)
      setErrors(prev => ({ ...prev, stripe: error instanceof Error ? error.message : 'Payment failed' }))
    }
  }



  if (currentStep === 'confirmation') {
    return <ConfirmationScreen orderId={orderId} deliveryDetails={deliveryDetails} estimatedDelivery={generateEstimatedDelivery()} />
  }



  return (
    <>
      <Navbar />
      <main className="checkout-page">
        <div className="checkout-container">
          <div className="checkout-content">
            {/* Left Column - Forms */}
            <div className="checkout-forms">
              <h1>Checkout</h1>
              
              {/* Delivery Details Section */}
              <section className="form-section">
                <h2>🚚 Delivery Details</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="building">Building *</label>
                    <select 
                      id="building"
                      value={deliveryDetails.building}
                      onChange={(e) => setDeliveryDetails({...deliveryDetails, building: e.target.value})}
                      className={errors.building ? 'error' : ''}
                    >
                      <option value="">Select your building</option>
                      {UNIVERSITY_BUILDINGS.map(building => (
                        <option key={building} value={building}>{building}</option>
                      ))}
                    </select>
                    {errors.building && <span className="error-text">{errors.building}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="roomNumber">Room Number *</label>
                    <input
                      type="text"
                      id="roomNumber"
                      value={deliveryDetails.roomNumber}
                      onChange={(e) => setDeliveryDetails({...deliveryDetails, roomNumber: e.target.value})}
                      placeholder="e.g., 201A, B15, 304"
                      maxLength={6}
                      className={errors.roomNumber ? 'error' : ''}
                    />
                    {errors.roomNumber && <span className="error-text">{errors.roomNumber}</span>}
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="instructions">Delivery Instructions (Optional)</label>
                  <textarea
                    id="instructions"
                    value={deliveryDetails.instructions}
                    onChange={(e) => setDeliveryDetails({...deliveryDetails, instructions: e.target.value})}
                    placeholder="e.g., Leave at door, Ring doorbell twice, etc."
                    rows={3}
                  />
                </div>
                
                <div className="delivery-time-section">
                  <label>Delivery Time</label>
                  <div className="radio-group">
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="deliveryTime"
                        value="asap"
                        checked={deliveryDetails.deliveryTime === 'asap'}
                        onChange={(e) => setDeliveryDetails({...deliveryDetails, deliveryTime: e.target.value as 'asap'})}
                      />
                      <span>ASAP (25-30 mins)</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="deliveryTime"
                        value="scheduled"
                        checked={deliveryDetails.deliveryTime === 'scheduled'}
                        onChange={(e) => setDeliveryDetails({...deliveryDetails, deliveryTime: e.target.value as 'scheduled'})}
                      />
                      <span>Schedule for later</span>
                    </label>
                  </div>
                  
                  {deliveryDetails.deliveryTime === 'scheduled' && (
                    <div className="form-group">
                      <input
                        type="time"
                        value={deliveryDetails.scheduledTime}
                        onChange={(e) => setDeliveryDetails({...deliveryDetails, scheduledTime: e.target.value})}
                        min={new Date().toTimeString().slice(0, 5)}
                        className={errors.scheduledTime ? 'error' : ''}
                      />
                      {errors.scheduledTime && <span className="error-text">{errors.scheduledTime}</span>}
                    </div>
                  )}
                </div>
              </section>

              {/* Contact Info Section */}
              <section className="form-section">
                <h2>👤 Contact Information</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      value={contactInfo.name}
                      onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                      placeholder="Enter your full name"
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="studentId">Student ID (Optional)</label>
                    <input
                      type="text"
                      id="studentId"
                      value={contactInfo.studentId}
                      onChange={(e) => setContactInfo({...contactInfo, studentId: e.target.value})}
                      placeholder="e.g., S12345678"
                    />
                  </div>
                </div>
                
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value.replace(/\D/g, '')})}
                      placeholder="0412345678"
                      className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                      placeholder="student@university.edu"
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>
                </div>
              </section>

              {/* Payment Section */}
              <section className="form-section">
                <h2>💳 Payment Method</h2>
                <div className="payment-methods">
                  <label className="payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="stripe"
                      checked={paymentInfo.method === 'stripe'}
                      onChange={(e) => setPaymentInfo({...paymentInfo, method: e.target.value as 'stripe'})}
                    />
                    <div className="payment-option-content">
                      <span className="payment-icon">💳</span>
                      <span>Credit/Debit Card (Stripe)</span>
                    </div>
                  </label>
                  
                  <label className="payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="campus-wallet"
                      checked={paymentInfo.method === 'campus-wallet'}
                      onChange={(e) => setPaymentInfo({...paymentInfo, method: e.target.value as 'campus-wallet'})}
                    />
                    <div className="payment-option-content">
                      <span className="payment-icon">🎓</span>
                      <span>Campus Wallet</span>
                    </div>
                  </label>
                  
                  <label className="payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={paymentInfo.method === 'cash'}
                      onChange={(e) => setPaymentInfo({...paymentInfo, method: e.target.value as 'cash'})}
                    />
                    <div className="payment-option-content">
                      <span className="payment-icon">💵</span>
                      <span>Cash on Delivery</span>
                    </div>
                  </label>
                </div>
                
                {paymentInfo.method === 'stripe' && (
                  <div className="stripe-form">
                    <div className="form-group">
                      <label htmlFor="cardholderName">Cardholder Name *</label>
                      <input
                        type="text"
                        id="cardholderName"
                        value={paymentInfo.cardholderName}
                        onChange={(e) => setPaymentInfo({...paymentInfo, cardholderName: e.target.value})}
                        placeholder="Name on card"
                        className={errors.cardholderName ? 'error' : ''}
                      />
                      {errors.cardholderName && <span className="error-text">{errors.cardholderName}</span>}
                    </div>
                    
                    <StripePaymentForm
                      amount={total}
                    />
                    
                    {errors.stripe && <span className="error-text">{errors.stripe}</span>}
                  </div>
                )}
              </section>
            </div>

            {/* Right Column - Order Summary */}
            <div className="order-summary">
              <h2>Order Summary</h2>
              
              {cart.length === 0 ? (
                <div className="empty-cart">
                  <p>Your cart is empty</p>
                  <button onClick={() => navigate('/restaurants')} className="continue-shopping">
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  <div className="order-items">
                    {cart.map(item => (
                      <div key={`${item.id}-${item.buildId}`} className="order-item">
                        <div className="item-details">
                          <h4>{item.name}</h4>
                          {item.customizations && item.customizations.length > 0 && (
                            <div className="item-customizations">
                              {item.customizations.join(', ')}
                            </div>
                          )}
                          <div className="item-price">${item.price.toFixed(2)} each</div>
                        </div>
                        
                        <div className="item-controls">
                          <div className="quantity-controls">
                            <button onClick={() => updateQuantity(item.id, item.buildId, item.quantity - 1)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.buildId, item.quantity + 1)}>+</button>
                          </div>
                          <button 
                            className="remove-item"
                            onClick={() => removeItem(item.id, item.buildId)}
                          >
                            🗑️
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="order-totals">
                    <div className="total-row">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="total-row">
                      <span>Delivery Fee</span>
                      <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                    <div className="total-row total-final">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="estimated-delivery">
                    <span>🕒 Estimated delivery: {deliveryDetails.deliveryTime === 'asap' ? '25-30 mins' : deliveryDetails.scheduledTime || 'Select time'}</span>
                  </div>
                  
                  <button 
                    className="place-order-btn"
                    onClick={placeOrder}
                    disabled={isProcessing || cart.length === 0}
                  >
                    {isProcessing ? 'Processing...' : `Place Order - $${total.toFixed(2)}`}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

// Confirmation Screen Component
function ConfirmationScreen({ orderId, deliveryDetails, estimatedDelivery }: {
  orderId: string
  deliveryDetails: DeliveryDetails
  estimatedDelivery: string
}) {
  const navigate = useNavigate()
  
  return (
    <>
      <Navbar />
      <main className="confirmation-page">
        <div className="confirmation-container">
          <div className="confirmation-content">
            <div className="success-icon">✅</div>
            <h1>Order Confirmed!</h1>
            <p className="confirmation-message">
              Thank you for your order. We're preparing your food now!
            </p>
            
            <div className="order-details">
              <div className="detail-item">
                <strong>Order Number:</strong>
                <span className="order-number">{orderId}</span>
              </div>
              
              <div className="detail-item">
                <strong>Delivery Location:</strong>
                <span>{deliveryDetails.building}</span>
                <span>Room {deliveryDetails.roomNumber}</span>
              </div>
              
              <div className="detail-item">
                <strong>Estimated Delivery:</strong>
                <span>{estimatedDelivery}</span>
              </div>
            </div>
            
            <div className="confirmation-actions">
              <button 
                className="continue-shopping-btn"
                onClick={() => navigate('/restaurants')}
              >
                Order More Food
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}


