import { useState, useEffect } from 'react'
import { CardElement } from '@stripe/react-stripe-js'
import { currencySymbol } from '../config/stripe'

interface StripePaymentFormProps {
  amount: number
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
  onCardError
}: StripePaymentFormProps) {
  const [cardError] = useState<string>('')

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
