# Campus Angel - University Food Delivery App

A modern, Uber Eats-style food delivery application specifically designed for university campuses. Built with Next.js, TypeScript, and Stripe integration.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with Campus Angel branding
- **Restaurant Management**: Browse restaurants, view menus, and place orders
- **Menu Customization**: Customize your food items with detailed options
- **Shopping Cart**: Add items, manage quantities, and review orders
- **Checkout System**: Complete checkout with delivery details and payment
- **Stripe Integration**: Secure payment processing
- **API Backend**: Comprehensive REST API for all app functionality
- **Mobile Responsive**: Works perfectly on all devices

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: CSS3 with custom design system
- **Backend**: Vercel Serverless Functions
- **Payment**: Stripe Payment Intents API
- **Deployment**: Vercel (optimized)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── restaurants/       # Restaurant pages
│   ├── checkout/          # Checkout page
│   └── order-confirmation/ # Order confirmation
├── components/            # React components
│   └── Navbar.tsx        # Navigation component
└── index.css             # Global styles

api/                      # Vercel API functions
├── create-payment-intent.ts
├── orders/               # Order management
├── restaurants/          # Restaurant data
├── menu/                 # Menu management
├── users/                # User profiles
├── delivery/             # Delivery services
└── notifications/        # Notification system
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Vercel account (for deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd uni-food-delivery
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file:
   ```env
   STRIPE_SECRET_KEY=sk_test_your_test_secret_key_here
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🚀 Deployment to Vercel

### Automatic Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

### Manual Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Set environment variables in Vercel dashboard**
   - `STRIPE_SECRET_KEY`: Your Stripe secret key

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 API Endpoints

The app includes a comprehensive API with the following endpoints:

- **Payment**: `/api/create-payment-intent`
- **Orders**: `/api/orders/*`
- **Restaurants**: `/api/restaurants/*`
- **Menu**: `/api/menu/*`
- **Users**: `/api/users/*`
- **Delivery**: `/api/delivery/*`
- **Notifications**: `/api/notifications/*`
- **Health**: `/api/health`

See `API_DOCUMENTATION.md` for complete API documentation.

## 🎨 Customization

### Branding
- Update colors in `src/index.css` CSS variables
- Modify logo and branding in `src/components/Navbar.tsx`

### Content
- Update restaurant data in API functions
- Modify menu items and customizations
- Customize delivery options and fees

### Styling
- All styles are in `src/index.css`
- Responsive design with mobile-first approach
- Custom CSS variables for easy theming

## 📱 Pages

1. **Homepage** (`/`) - Landing page with hero section and features
2. **Restaurants** (`/restaurants`) - Browse all available restaurants
3. **Restaurant Menu** (`/restaurants/[id]`) - View menu and add items to cart
4. **Checkout** (`/checkout`) - Complete order with delivery and payment
5. **Order Confirmation** (`/order-confirmation`) - Order success page

## 🔒 Security Features

- CORS enabled for API endpoints
- Input validation and sanitization
- Secure payment processing with Stripe
- Environment variable protection

## 🚀 Performance Features

- Next.js App Router for optimal routing
- Server-side rendering capabilities
- Optimized images and assets
- Responsive design for all devices

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
- Check the API documentation
- Review the code comments
- Open an issue on GitHub

## 🔮 Future Enhancements

- User authentication and profiles
- Order tracking and history
- Push notifications
- Real-time delivery updates
- Restaurant admin panel
- Analytics dashboard

---

**Built with ❤️ for university students everywhere**
