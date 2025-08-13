import { useState, useEffect } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { currencySymbol } from '../config/stripe'

interface StripePaymentFormProps {
  amount: number
  onCardError?: (error: string) => void
  onPaymentMethodReady?: (paymentMethod: any) => void
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
  onCardError,
  onPaymentMethodReady
}: StripePaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Expose card error to parent
  useEffect(() => {
    if (onCardError) {
      onCardError(cardError);
    }
  }, [cardError, onCardError]);

  // Handle card element changes
  const handleCardChange = (event: any) => {
    if (event.error) {
      setCardError(event.error.message);
    } else {
      setCardError('');
    }
  };

  // Create payment method when form is ready
  const createPaymentMethod = async () => {
    if (!stripe || !elements) {
      throw new Error('Stripe not initialized');
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      throw new Error('Card element not found');
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      throw new Error(error.message);
    }

    return paymentMethod;
  };

  // Expose createPaymentMethod to parent
  useEffect(() => {
    if (onPaymentMethodReady) {
      onPaymentMethodReady({ createPaymentMethod });
    }
  }, [onPaymentMethodReady]);

  return (
    <div className="stripe-payment-form">
      <div className="form-group">
        <label htmlFor="card-element">Credit or Debit Card</label>
        <div className="card-element-container">
          <CardElement
            id="card-element"
            options={cardElementOptions}
            onChange={handleCardChange}
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
