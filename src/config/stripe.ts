import { loadStripe } from '@stripe/stripe-js'

// Stripe publishable key (test mode)
export const stripePromise = loadStripe('pk_test_51RvFxXPhAQtRWVqnklj6a00qrHrmYQWVEt6fgBwdte0bJHOkWQHs7o3lWIuYGZF3WqFMEkT0ZSIUc7pIlW63OxLz00fneok36u')

// Stripe configuration
export const stripeConfig = {
  publishableKey: 'pk_test_51RvFxXPhAQtRWVqnklj6a00qrHrmYQWVEt6fgBwdte0bJHOkWQHs7o3lWIuYGZF3WqFMEkT0ZSIUc7pIlW63OxLz00fneok36u'
  // Note: Secret key is stored server-side in environment variables
  // Never expose secret keys in client-side code
}

// Currency configuration
export const currency = 'aud'
export const currencySymbol = '$'
