# Campus Angel - University Food Delivery App

A modern, vibrant food delivery application designed specifically for university campuses, built with React, TypeScript, and Vite.

## 🚀 Features

- **Modern UI/UX**: Orange and white theme with smooth animations and responsive design
- **Restaurant Management**: Browse restaurants, view menus, and customize orders
- **Smart Cart System**: Add items with customizations, manage quantities, and persistent cart
- **Checkout Flow**: Complete delivery details, contact info, and payment processing
- **Stripe Integration**: Secure payment processing using Stripe Payment Intents API
- **Mobile Responsive**: Optimized for all device sizes

## 🛠️ Technical Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Routing**: React Router DOM v6
- **Styling**: CSS3 with modern features (Grid, Flexbox, CSS Variables)
- **Payment**: Stripe Payment Intents API
- **Deployment**: Vercel (Frontend + Serverless Functions)
- **State Management**: React Hooks + Local Storage

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/campus-angel.git
   cd campus-angel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` and add your Stripe secret key:
   ```env
   STRIPE_SECRET_KEY=sk_test_your_test_secret_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🔑 Stripe Integration Setup

### Test Mode (Development)
1. **Get your test keys** from [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
2. **Update client-side key** in `src/config/stripe.ts`:
   ```typescript
   export const stripePromise = loadStripe('pk_test_your_test_publishable_key')
   ```
3. **Set server-side key** in `.env`:
   ```env
   STRIPE_SECRET_KEY=sk_test_your_test_secret_key
   ```
4. **Test with test card**: `4242 4242 4242 4242` (any future expiry, any CVC)

### Production Mode
1. **Switch to live keys** in Stripe Dashboard
2. **Update client-side key** in `src/config/stripe.ts`:
   ```typescript
   export const stripePromise = loadStripe('pk_live_your_live_publishable_key')
   ```
3. **Set live secret key** in `.env`:
   ```env
   STRIPE_SECRET_KEY=sk_live_your_live_secret_key
   ```

### Important Security Notes
- **Never expose secret keys** in client-side code
- **Secret keys are only used** in Vercel serverless functions
- **Publishable keys are safe** to use in client-side code
- **Always use HTTPS** in production

## 🚀 Deployment

### Vercel Deployment
1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Connect your GitHub repository to Vercel
   - Add environment variables in Vercel dashboard
   - Deploy automatically on push

### Environment Variables in Vercel
- `STRIPE_SECRET_KEY`: Your Stripe secret key (server-side only)

## 📱 App Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx     # Navigation component
│   └── StripePaymentForm.tsx # Stripe payment form
├── pages/              # Page components
│   ├── App.tsx        # Main landing page
│   ├── Restaurants.tsx # Restaurant listing
│   ├── Subway.tsx     # Subway restaurant page
│   └── Checkout.tsx   # Checkout and payment
├── config/             # Configuration files
│   └── stripe.ts      # Stripe configuration
├── api/                # Mock API services
│   └── stripeMock.ts  # Development mock (not used in production)
└── assets/             # Static assets

api/                    # Vercel serverless functions
├── create-payment-intent.ts # Stripe Payment Intent creation
└── health.ts           # Health check endpoint
```

## 🔒 Payment Flow

1. **User selects items** and proceeds to checkout
2. **Server creates PaymentIntent** via `/api/create-payment-intent`
3. **Client confirms payment** using `stripe.confirmCardPayment()`
4. **Payment is processed** and order is confirmed
5. **Transaction appears** in Stripe Dashboard → Payments

## 🧪 Testing

### Stripe Test Mode
- **Toggle "Viewing test data"** in Stripe Dashboard
- **Use test card numbers**:
  - `4242 4242 4242 4242` - Successful payment
  - `4000 0000 0000 0002` - Declined payment
- **Monitor test transactions** in Stripe Dashboard

### Local Development
- **Mock API available** in `src/api/stripeMock.ts` for offline development
- **Switch to real API** by updating checkout logic
- **Test with Vercel dev** for full serverless function testing

## 🚨 Troubleshooting

### Common Issues
1. **404 on direct route access**: Ensure `vercel.json` is configured
2. **Payment Intent creation fails**: Check `STRIPE_SECRET_KEY` in environment
3. **Client-side errors**: Verify publishable key in `src/config/stripe.ts`
4. **Build failures**: Run `npm run build` locally to check for errors

### Vercel Deployment Issues
1. **Environment variables not set**: Check Vercel dashboard
2. **API routes not working**: Verify `api/` folder structure
3. **Build errors**: Check build logs in Vercel dashboard
4. **Server errors (FUNCTION_INVOCATION_FAILED)**:
   - Ensure `STRIPE_SECRET_KEY` is set in Vercel environment variables
   - Check Vercel function logs for specific error details
   - Test health endpoint: `/api/health`
   - Verify Stripe package is properly installed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Check the troubleshooting section
- Review Stripe documentation for payment-related issues

---

**Note**: This app uses Stripe's Payment Intents API for secure payment processing. Always test thoroughly in test mode before going live with real payments.
