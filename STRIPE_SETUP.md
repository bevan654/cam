# Stripe Payment Intents API Setup Guide

This guide covers setting up Stripe's Payment Intents API for the Campus Angel food delivery app.

## 🚀 What Changed

**Previous Implementation**: Only tokenized card details, never created or confirmed payments
**New Implementation**: Full Payment Intents API flow with server-side intent creation and client-side confirmation

## 🔧 Setup Steps

### 1. Environment Variables

Create a `.env` file in your project root:

```env
STRIPE_SECRET_KEY=sk_test_your_test_secret_key_here
```

**Important**: Never commit this file to version control!

### 2. Server-Side Configuration

The API function `/api/create-payment-intent.ts` is already configured to:
- Read `amountCents` and `currency` from JSON body
- Validate `amountCents` is an integer ≥ 50 for AUD
- Use `stripe.paymentIntents.create()` with `automatic_payment_methods.enabled = true`
- Return `client_secret` in JSON
- Read `STRIPE_SECRET_KEY` from environment variables
- Use TypeScript and proper error handling

### 3. Client-Side Configuration

Update `src/config/stripe.ts` with your publishable key:

```typescript
export const stripePromise = loadStripe('pk_test_your_test_publishable_key')
```

## 🧪 Testing

### Test Mode Setup

1. **Get test keys** from [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
2. **Toggle "Viewing test data"** in your Stripe Dashboard
3. **Use test card**: `4242 4242 4242 4242` (any future expiry, any CVC)

### Payment Flow Verification

After successful payment:
1. **Check Stripe Dashboard** → Payments section
2. **Transaction should appear** with status "Succeeded"
3. **Payment Intent details** should show the full payment flow

## 🔒 Security Notes

- **Secret keys** are only used server-side in Vercel functions
- **Publishable keys** are safe for client-side use
- **Environment variables** are automatically handled by Vercel
- **HTTPS is enforced** in production

## 🚀 Production Deployment

### Vercel Environment Variables

1. **Go to Vercel Dashboard** → Your Project → Settings → Environment Variables
2. **Add**: `STRIPE_SECRET_KEY` with your live secret key
3. **Redeploy** the project

### Key Updates

1. **Switch to live keys** in Stripe Dashboard
2. **Update publishable key** in `src/config/stripe.ts`
3. **Test thoroughly** before going live

## 🔍 Troubleshooting

### Common Issues

1. **Payment Intent creation fails**:
   - Check `STRIPE_SECRET_KEY` in Vercel environment variables
   - Verify the key is correct and has proper permissions

2. **Client-side errors**:
   - Ensure publishable key is correct in `src/config/stripe.ts`
   - Check browser console for detailed error messages

3. **404 on API routes**:
   - Verify `vercel.json` is configured correctly
   - Ensure API functions are in the `api/` folder

### Testing Checklist

- [ ] Test card details are accepted
- [ ] Payment Intent is created successfully
- [ ] Payment confirmation works
- [ ] Transaction appears in Stripe Dashboard
- [ ] Order confirmation is displayed
- [ ] Error handling works for declined cards

## 📚 Additional Resources

- [Stripe Payment Intents Documentation](https://stripe.com/docs/payments/payment-intents)
- [Vercel Serverless Functions](https://vercel.com/docs/functions)
- [Stripe Test Cards](https://stripe.com/docs/testing#cards)

---

**Note**: This implementation creates real Payment Intents and processes actual test payments. Always test thoroughly in test mode before going live.
