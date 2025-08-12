// Mock Stripe API service for development
// This simulates the server-side PaymentIntent creation
// In production, this would be replaced with actual server calls

export interface PaymentIntentResponse {
  clientSecret: string
  id: string
  amount: number
  currency: string
  status: string
}

export interface CreatePaymentIntentRequest {
  amountCents: number
  currency: string
}

// Mock PaymentIntent creation
export const createPaymentIntent = async (request: CreatePaymentIntentRequest): Promise<PaymentIntentResponse> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500))
  
  // Validate amount
  if (!request.amountCents || request.amountCents < 50) {
    throw new Error('Invalid amount. Must be at least 50 cents for AUD.')
  }
  
  // Validate currency
  if (request.currency !== 'AUD') {
    throw new Error('Only AUD currency is supported')
  }
  
  // Generate mock PaymentIntent
  const paymentIntent: PaymentIntentResponse = {
    clientSecret: 'pi_mock_' + Math.random().toString(36).substr(2, 9) + '_secret_' + Math.random().toString(36).substr(2, 9),
    id: 'pi_mock_' + Math.random().toString(36).substr(2, 9),
    amount: request.amountCents,
    currency: request.currency.toLowerCase(),
    status: 'requires_payment_method'
  }
  
  return paymentIntent
}

// Mock payment confirmation
export const confirmPayment = async (clientSecret: string): Promise<{ status: string }> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Simulate successful payment
  return { status: 'succeeded' }
}
