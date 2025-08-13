# Driver Dashboard - Internal Prototype

This is a simple driver dashboard section for internal developer use only. It provides basic authentication and a minimal interface for testing driver-related functionality.

## Setup

1. **Environment Variable**: Add the following to your `.env.local` file:
   ```
   NEXT_PUBLIC_DRIVER_PASS=your_chosen_password_here
   ```

2. **Build**: Run `npm run build` to ensure all pages compile correctly.

## Pages

### `/driver/login`
- Simple password form
- Authenticates against `NEXT_PUBLIC_DRIVER_PASS` environment variable
- Sets `driverAuth=true` in localStorage on successful login
- Redirects to `/driver` dashboard

### `/driver` (Main Dashboard)
- Shows "You are logged in as driver" message
- Displays quick action buttons
- Shows driver status and last updated time
- Includes logout functionality

### `/driver/orders`
- **Real-time orders** from Supabase database
- **Card-based layout** with comprehensive order information
- **Status updates** - drivers can update order status
- **Customer details** - name, phone, email
- **Delivery details** - building, room, instructions
- **Order items** - complete item list with prices and quantities
- **Customizations display** - shows all item customizations (toppings, sauces, etc.)
- **Full order ID** - displays complete order ID for reference
- **Hide delivered orders** - automatically filters out completed orders
- **Delete option** - confirmed orders can be hidden from driver view
- **Status progression** - placed → confirmed → preparing → ready_for_pickup → picked_up → delivered

### `/driver/index`
- Redirects to main driver dashboard (`/driver`)

## Authentication

- **Storage**: Uses `localStorage` with key `driverAuth`
- **Protection**: All `/driver/*` routes (except login) require authentication
- **Layout**: Authentication is handled at the layout level (`src/app/driver/layout.tsx`)
- **Redirect**: Unauthenticated users are automatically redirected to `/driver/login`

## API Endpoints

### `GET /api/driver/orders`
- Fetches all active orders from Supabase database
- Automatically excludes delivered orders for better performance
- Requires valid authentication token
- Returns orders sorted by creation date (newest first)

### `POST /api/driver/update-order-status`
- Updates order status in database
- Requires orderId and new status
- Updates `updated_at` timestamp
- Returns updated order data
- Automatically removes delivered orders from driver view

## Order Status Flow

1. **placed** - Order has been placed by customer
2. **confirmed** - Order has been confirmed by restaurant
3. **preparing** - Food is being prepared
4. **ready_for_pickup** - Order is ready for driver pickup
5. **picked_up** - Driver has picked up the order
6. **delivered** - Order has been delivered to customer

## Order Management Features

### **Customizations Display**
- Shows all item customizations (toppings, sauces, sizes, etc.)
- Displays customization options in an organized format
- Handles both single values and arrays of options

### **Order Visibility Control**
- **Confirmed orders**: Drivers can hide these from their view using the "Hide Order" button
- **Delivered orders**: Automatically filtered out and not shown to drivers
- **Active orders**: Only shows orders that need driver attention

### **Enhanced Order Information**
- **Full order ID**: Complete UUID for easy reference and tracking
- **Item quantities**: Clear display of item quantities
- **Customization details**: All customer preferences visible
- **Real-time updates**: Status changes immediately reflect in the UI

## Security Notes

⚠️ **WARNING**: This is for internal prototype use only!
- Password is stored in environment variables (client-side accessible)
- No database or server-side validation
- No session management or token expiration
- Not suitable for production use

## Usage

1. Navigate to `/driver/login`
2. Enter the password from your `.env.local` file
3. You'll be redirected to the main dashboard
4. Click "View Orders" to see all active orders from the database
5. View item customizations and order details
6. Update order status using the status buttons
7. Hide confirmed orders that you no longer need to see
8. Click logout to return to login page

## Customization

- All styling is inline CSS for simplicity
- Real data from Supabase database
- Status updates are immediately reflected in the UI
- Customizations are dynamically rendered based on order data
- Additional order management features can be added
- Authentication logic can be enhanced as needed

## Files Created

- `src/app/driver/layout.tsx` - Authentication wrapper
- `src/app/driver/login/page.tsx` - Login form
- `src/app/driver/page.tsx` - Main dashboard
- `src/app/driver/orders/page.tsx` - Orders view with real data, customizations, and management features
- `src/app/driver/index/page.tsx` - Redirect page
- `src/app/api/driver/orders/route.js` - API to fetch active orders (excluding delivered)
- `src/app/api/driver/update-order-status/route.js` - API to update order status
- `env.example` - Updated with driver password variable
