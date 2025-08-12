import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Elements } from '@stripe/react-stripe-js'
import './index.css'
import App from './App.tsx'
import RestaurantsPage from './pages/Restaurants'
import SubwayPage from './pages/Subway'
import CheckoutPage from './pages/Checkout'
import { stripePromise } from './config/stripe'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Elements stripe={stripePromise}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/restaurants" element={<RestaurantsPage />} />
          <Route path="/restaurants/subway" element={<SubwayPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Elements>
  </StrictMode>,
)

function NotFound() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Page not found</h1>
      <p>
        Go to <Link to="/">Home</Link>
      </p>
    </div>
  )
}
