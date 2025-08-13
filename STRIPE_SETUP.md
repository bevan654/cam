# 🚀 Stripe Payment Integration Setup

## **Environment Variables Required**

Add these to your `.env.local` file:

```bash
# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
```

## **Stripe Account Setup**

1. **Create Stripe Account**: Go to [stripe.com](https://stripe.com) and create an account
2. **Get API Keys**: 
   - Go to Developers → API Keys
   - Copy your Publishable Key (starts with `pk_test_`)
   - Copy your Secret Key (starts with `sk_test_`)
3. **Update Environment Variables**: Replace the placeholder values in `.env.local`

## **Supabase Database Setup**

Create an `orders` table in your Supabase database:

```sql
CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_id UUID REFERENCES auth.users(id),
  items JSONB NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  payment_id TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'placed',
  delivery_details JSONB,
  contact_info JSONB,
  payment_method TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Create policy for users to see their own orders
CREATE POLICY "Users can view their own orders" ON orders
  FOR SELECT USING (auth.uid() = customer_id);

CREATE POLICY "Users can insert their own orders" ON orders
  FOR INSERT WITH CHECK (auth.uid() = customer_id);
```

## **Testing the Integration**

1. **Test Card Numbers**:
   - Success: `4242424242424242`
   - Decline: `4000000000000002`
   - 3D Secure: `4000002500003155`

2. **Test Flow**:
   - Add items to cart
   - Go to checkout
   - Fill in delivery details
   - Click "Place Order"
   - Use test card: `4242424242424242`
   - Expiry: Any future date
   - CVC: Any 3 digits

## **Security Features**

✅ **Price Validation**: Backend validates all prices to prevent tampering
✅ **Payment Verification**: Server-to-server verification with Stripe
✅ **Authentication Required**: Users must be logged in to checkout
✅ **Order Creation**: Orders are only created after successful payment verification

## **API Endpoints**

- `POST /api/create-payment-intent` - Creates Stripe PaymentIntent
- `POST /api/create-order` - Creates order after successful payment

## **Error Handling**

The system handles:
- Invalid payment amounts
- Failed payments
- Network errors
- Authentication failures
- Database errors

## **Next Steps**

1. **Real Card Collection**: Replace hardcoded test card with Stripe Elements
2. **Webhook Handling**: Add webhook endpoints for payment status updates
3. **Order Management**: Create admin interface for order management
4. **Email Notifications**: Send confirmation emails after successful orders
