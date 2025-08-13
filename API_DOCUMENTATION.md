# Campus Angel API Documentation

## Overview
The Campus Angel API provides endpoints for a university food delivery application. All endpoints use CommonJS syntax and are designed to work with Vercel serverless functions.

## Base URL
- Development: `http://localhost:3000/api`
- Production: `https://your-domain.vercel.app/api`

## Authentication
Currently, the API uses simple user ID parameters. In production, implement proper JWT authentication.

## Endpoints

### 1. Payment Processing

#### Create Payment Intent
- **Endpoint:** `POST /api/create-payment-intent`
- **Description:** Creates a Stripe PaymentIntent for processing payments
- **Body:**
  ```json
  {
    "amountCents": 1299,
    "currency": "AUD"
  }
  ```
- **Response:**
  ```json
  {
    "clientSecret": "pi_xxx_secret_xxx"
  }
  ```

### 2. Orders Management

#### Create Order
- **Endpoint:** `POST /api/orders/create`
- **Description:** Creates a new food delivery order
- **Body:**
  ```json
  {
    "items": [
      {
        "id": "chicken_teriyaki",
        "name": "Chicken Teriyaki Sub",
        "quantity": 1,
        "price": 12.99,
        "customizations": ["Extra cheese", "No onions"]
      }
    ],
    "deliveryDetails": {
      "address": "123 University Ave",
      "building": "Student Center",
      "room": "Room 101",
      "instructions": "Leave at front desk"
    },
    "contactInfo": {
      "name": "John Doe",
      "phone": "+1234567890",
      "email": "john@university.edu"
    },
    "totalAmount": 12.99,
    "restaurantId": "subway",
    "estimatedDeliveryTime": "2024-01-15T14:30:00Z"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "order": { /* order object */ },
    "message": "Order created successfully"
  }
  ```

#### Get Orders
- **Endpoint:** `GET /api/orders/get`
- **Description:** Retrieves orders with optional filtering
- **Query Parameters:**
  - `orderId` (optional): Get specific order
  - `userId` (optional): Filter by user
  - `status` (optional): Filter by status
- **Response:**
  ```json
  {
    "success": true,
    "orders": [ /* array of orders */ ],
    "total": 2
  }
  ```

#### Update Order Status
- **Endpoint:** `PUT /api/orders/update-status`
- **Description:** Updates the status of an existing order
- **Body:**
  ```json
  {
    "orderId": "order_123",
    "status": "confirmed",
    "estimatedDeliveryTime": "2024-01-15T14:30:00Z",
    "driverNotes": "Order ready for pickup"
  }
  ```
- **Valid Statuses:** `pending`, `confirmed`, `preparing`, `ready`, `out_for_delivery`, `delivered`, `cancelled`

### 3. Restaurant Management

#### Get Restaurants
- **Endpoint:** `GET /api/restaurants/get`
- **Description:** Retrieves restaurant information with search and filtering
- **Query Parameters:**
  - `restaurantId` (optional): Get specific restaurant
  - `search` (optional): Search by name, description, or category
  - `category` (optional): Filter by category
- **Response:**
  ```json
  {
    "success": true,
    "restaurants": [
      {
        "id": "subway",
        "name": "Subway",
        "description": "Fresh sandwiches and salads made to order",
        "rating": 4.2,
        "deliveryTime": "20-30 min",
        "deliveryFee": 2.99,
        "minimumOrder": 8.00,
        "categories": ["Sandwiches", "Salads", "Healthy"],
        "isOpen": true,
        "address": "Student Center Food Court",
        "hours": { /* operating hours */ }
      }
    ]
  }
  ```

### 4. Menu Management

#### Get Menu
- **Endpoint:** `GET /api/menu/get`
- **Description:** Retrieves restaurant menu with categories and items
- **Query Parameters:**
  - `restaurantId` (required): Restaurant identifier
  - `category` (optional): Filter by category
  - `search` (optional): Search menu items
- **Response:**
  ```json
  {
    "success": true,
    "menu": {
      "categories": [
        {
          "id": "sandwiches",
          "name": "Sandwiches",
          "items": [
            {
              "id": "chicken_teriyaki",
              "name": "Chicken Teriyaki Sub",
              "description": "Grilled chicken with teriyaki sauce",
              "price": 12.99,
              "customizations": [ /* customization options */ ]
            }
          ]
        }
      ]
    }
  }
  ```

### 5. User Management

#### User Profile
- **Endpoint:** `GET /api/users/profile?userId=123`
- **Description:** Retrieves user profile information
- **Response:**
  ```json
  {
    "success": true,
    "profile": {
      "id": "123",
      "name": "John Doe",
      "email": "john@university.edu",
      "phone": "+1234567890",
      "studentId": "STU123456",
      "campus": "Main Campus",
      "defaultDeliveryAddress": { /* address object */ },
      "preferences": { /* user preferences */ }
    }
  }
  ```

#### Update Profile
- **Endpoint:** `PUT /api/users/profile?userId=123`
- **Description:** Updates user profile information
- **Body:**
  ```json
  {
    "name": "John Smith",
    "phone": "+1234567891",
    "defaultDeliveryAddress": {
      "building": "Library",
      "room": "Study Room 2"
    }
  }
  ```

### 6. Delivery Services

#### Delivery Estimate
- **Endpoint:** `POST /api/delivery/estimate`
- **Description:** Calculates delivery time and cost estimation
- **Body:**
  ```json
  {
    "restaurantId": "subway",
    "deliveryAddress": {
      "building": "Student Center",
      "room": "Room 101"
    },
    "orderSize": "medium"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "estimate": {
      "estimatedTime": 25,
      "estimatedDeliveryTime": "2024-01-15T14:30:00Z",
      "deliveryFee": 2.99,
      "deliveryWindow": {
        "earliest": "2024-01-15T14:25:00Z",
        "latest": "2024-01-15T14:40:00Z"
      }
    }
  }
  ```

### 7. Notifications

#### Send Notification
- **Endpoint:** `POST /api/notifications/send`
- **Description:** Sends notifications via email, SMS, or push
- **Body:**
  ```json
  {
    "userId": "123",
    "type": "order_confirmed",
    "title": "Order Confirmed!",
    "message": "Your Subway order has been confirmed and is being prepared.",
    "orderId": "order_123",
    "channels": ["email", "sms"]
  }
  ```
- **Valid Types:** `order_confirmed`, `order_preparing`, `order_ready`, `order_out_for_delivery`, `order_delivered`, `delivery_update`, `promotional`, `system`

### 8. Health Check

#### Health Status
- **Endpoint:** `GET /api/health`
- **Description:** Returns API health status and environment information
- **Response:**
  ```json
  {
    "status": "healthy",
    "timestamp": "2024-01-15T13:00:00Z",
    "environment": "production",
    "hasStripeKey": true,
    "vercelEnv": "production"
  }
  ```

## Error Handling

All endpoints return consistent error responses:

```json
{
  "error": "Error type",
  "message": "Detailed error message"
}
```

**Common HTTP Status Codes:**
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `404` - Not Found
- `405` - Method Not Allowed
- `500` - Internal Server Error

## CORS

All endpoints include CORS headers for cross-origin requests:
- `Access-Control-Allow-Origin: *`
- `Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS`
- `Access-Control-Allow-Headers: Content-Type`

## Environment Variables

Required environment variables:
- `STRIPE_SECRET_KEY`: Your Stripe secret key for payment processing

## Development Notes

- All API functions use CommonJS syntax (`module.exports`)
- Mock data is used for development; replace with actual database queries in production
- Implement proper authentication and authorization for production use
- Add rate limiting and input validation for production endpoints
- Consider implementing webhook endpoints for Stripe events
- Add logging and monitoring for production deployment

## Example Usage

### Frontend Integration

```javascript
// Create an order
const createOrder = async (orderData) => {
  const response = await fetch('/api/orders/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData),
  });
  return response.json();
};

// Get restaurant menu
const getMenu = async (restaurantId) => {
  const response = await fetch(`/api/menu/get?restaurantId=${restaurantId}`);
  return response.json();
};

// Get delivery estimate
const getDeliveryEstimate = async (estimateData) => {
  const response = await fetch('/api/delivery/estimate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(estimateData),
  });
  return response.json();
};
```

This API provides a complete foundation for your Campus Angel food delivery application with all the essential endpoints needed for order management, restaurant operations, user management, and delivery services.
