# Campus Angel - University Food Delivery App

A modern React-based food delivery application for university campuses with Stripe payment integration.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with Campus Angel branding
- **Restaurant Management**: Browse restaurants and view detailed menus
- **Smart Cart System**: Add items with customizations and quantity control
- **Stripe Payments**: Secure credit card processing with Payment Intents API
- **Order Management**: Complete checkout flow with order confirmation
- **Mobile Responsive**: Optimized for all device sizes

## 💳 Stripe Integration

This app uses Stripe's Payment Intents API for secure payment processing.

### Test Mode Setup

1. **Environment Variables**: Create a `.env.local` file in the root directory:


2. **Test Card Numbers**:
   - **Success**: `4242 4242 4242 4242`
   - **Decline**: `4000 0000 0000 0002`
   - **Any future expiry date** (e.g., `12/25`)
   - **Any 3-digit CVC** (e.g., `123`)

3. **Stripe Dashboard**: 
   - Toggle "Viewing test data" in your Stripe Dashboard
   - Payments will appear under **Payments** section
   - Use the test keys provided in the project

### Production Setup

When ready for production:

1. **Update Keys**: Replace test keys with live keys in `.env.local`
2. **Update Currency**: Change from AUD to your preferred currency
3. **Webhook Setup**: Configure webhooks for production events
4. **PCI Compliance**: Ensure your setup meets PCI requirements

## 🛠️ Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd uni-food-delivery
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your Stripe keys
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   npm run preview
   ```

## 🔧 Technical Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Routing**: React Router DOM v6
- **Styling**: CSS3 with custom design system
- **Payments**: Stripe.js + Payment Intents API
- **State Management**: React Hooks + Local Storage
- **Build Tool**: Vite

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx     # Navigation component
│   └── StripePaymentForm.tsx # Stripe payment form
├── pages/              # Page components
│   ├── Checkout.tsx   # Checkout flow
│   ├── Restaurants.tsx # Restaurant listing
│   └── Subway.tsx     # Subway restaurant page
├── config/             # Configuration files
│   └── stripe.ts      # Stripe configuration
└── App.css            # Global styles

api/
└── create-payment-intent.ts # Stripe Payment Intent API
```

## 🔐 Security Notes

- **Never expose secret keys** in client-side code
- **Use environment variables** for sensitive configuration
- **Validate all inputs** on both client and server
- **Implement proper error handling** for payment failures
- **Use HTTPS** in production

## 🧪 Testing

1. **Payment Flow**: Test the complete checkout process
2. **Error Handling**: Test with invalid cards and network failures
3. **Responsive Design**: Test on various screen sizes
4. **Browser Compatibility**: Test in major browsers

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**: Link your GitHub repo to Vercel
2. **Environment Variables**: Add `STRIPE_SECRET_KEY` in Vercel dashboard
3. **Deploy**: Vercel will automatically build and deploy

### Other Platforms

1. **Build the project**: `npm run build`
2. **Set environment variables** in your hosting platform
3. **Deploy the `dist` folder**

## 📱 Mobile App Considerations

This web app is designed to be mobile-responsive and can be wrapped in:
- **PWA**: Add service worker and manifest
- **React Native**: Convert components to React Native
- **Capacitor**: Wrap as native mobile app

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For issues related to:
- **Stripe Integration**: Check Stripe documentation and logs
- **App Functionality**: Review browser console for errors
- **Payment Issues**: Verify test card numbers and environment setup

## 🔄 Updates

- **Stripe SDK**: Keep Stripe packages updated
- **React**: Regular React and dependency updates
- **Security**: Monitor for security updates
- **Features**: Add new features based on user feedback

---

**Note**: This is a demonstration project. For production use, ensure proper security measures, error handling, and compliance with relevant regulations.
