# 🚀 Stripe Payment Intents Setup Guide

## Quick Setup

### 1. Create Environment File
Create a `.env.local` file in your project root with:
```bash
STRIPE_SECRET_KEY=sk_test_51RvFxXPhAQtRWVqnxfjCsq8gv0xMMKT08AILZqCLYU6QVdvLnEOZUY14Xc30uN08RtDRcEdYYzwuv2GXWJyWcCrU00UlRqUyKD
```

### 2. Test the Integration
1. **Start your dev server**: `npm run dev`
2. **Add items to cart** and go to checkout
3. **Use test card**: `4242 4242 4242 4242`
4. **Any future expiry** (e.g., `12/25`)
5. **Any 3-digit CVC** (e.g., `123`)

### 3. Verify in Stripe Dashboard
- Go to [Stripe Dashboard](https://dashboard.stripe.com)
- Toggle **"Viewing test data"**
- Check **Payments** section - you should see your test payments!

## 🔧 What Changed

### Before (Tokenization Only)
- ❌ Only created payment methods
- ❌ No actual payments in Stripe
- ❌ No transaction records

### After (Payment Intents API)
- ✅ Creates PaymentIntent on server
- ✅ Confirms payment on client
- ✅ Shows transactions in Stripe Dashboard
- ✅ Proper error handling
- ✅ Secure server-side processing

## 🎯 Payment Flow

1. **User clicks "Place Order"**
2. **Server creates PaymentIntent** (`/api/create-payment-intent`)
3. **Client confirms payment** with `stripe.confirmCardPayment()`
4. **Payment succeeds** → Order confirmation
5. **Payment fails** → Error message

## 🚨 Important Notes

- **Never commit `.env.local`** to version control
- **Use test keys** for development
- **Switch to live keys** for production
- **Test thoroughly** before going live

## 🆘 Troubleshooting

- **"Stripe not initialized"**: Check your publishable key
- **"Failed to create payment intent"**: Check server logs and environment variables
- **Payment confirmation fails**: Verify card details and network connection

---

**Ready to test?** Start your dev server and try the checkout flow! 🎉
