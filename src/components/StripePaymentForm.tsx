import { useState, useEffect } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { stripeConfig, currencySymbol } from '../config/stripe'

interface StripePaymentFormProps {
  amount: number
  onPaymentSuccess: (paymentIntent: any) => void
  onPaymentError: (error: string) => void
  isProcessing: boolean
  onCardError?: (error: string) => void
}

const cardElementOptions = {
  style: {
    base: {
      fontSize: '16px',
      color: '#424770',
      '::placeholder': {
        color: '#aab7c4',
      },
      backgroundColor: 'transparent',
    },
    invalid: {
      color: '#9e2146',
    },
  },
}

export default function StripePaymentForm({ 
  amount, 
  onPaymentSuccess, 
  onPaymentError, 
  isProcessing,
  onCardError
}: StripePaymentFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const [cardError, setCardError] = useState<string>('')

  // Function to get card element for parent component
  const getCardElement = () => {
    return elements?.getElement(CardElement)
  }

  // Expose getCardElement to parent via callback
  useEffect(() => {
    if (onCardError) {
      onCardError(cardError)
    }
  }, [cardError, onCardError])

  return (
    <div className="stripe-payment-form">
      <div className="form-group">
        <label htmlFor="card-element">Credit or Debit Card</label>
        <div className="card-element-container">
          <CardElement
            id="card-element"
            options={cardElementOptions}
            className="card-element"
          />
        </div>
        {cardError && <span className="error-text">{cardError}</span>}
      </div>

      <div className="payment-summary">
        <div className="amount-display">
          <span>Total Amount:</span>
          <span className="total-amount">{currencySymbol}{amount.toFixed(2)}</span>
        </div>
      </div>

      <div className="payment-security">
        <div className="security-badges">
          <span className="security-badge">🔒</span>
          <span className="security-badge">SSL</span>
          <span className="security-badge">PCI</span>
        </div>
        <p className="security-text">
          Your payment information is secure and encrypted
        </p>
      </div>
    </div>
  )
}
