# Authentication API Documentation

This document describes the authentication endpoints for the Campus Angel food delivery app, built with Supabase Auth.

## Base URL
All endpoints are prefixed with `/api/auth/`

## Environment Variables Required

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Endpoints

### 1. Register (Sign Up)

**POST** `/api/auth/register`

Creates a new customer account in Supabase Auth.

#### Request Body
```json
{
  "email": "user@example.com",
  "password": "securepassword123",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+1234567890"
}
```

#### Required Fields
- `email` - Valid email address
- `password` - Minimum 8 characters
- `firstName` - User's first name
- `lastName` - User's last name
- `phone` - Phone number (optional)

#### Response
**Success (201)**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "phone": "+1234567890"
  }
}
```

**Error (400)**
```json
{
  "error": "Missing required fields: email, password, firstName, lastName"
}
```

---

### 2. Login

**POST** `/api/auth/login`

Authenticates user with email & password, returns session token.

#### Request Body
```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

#### Required Fields
- `email` - Valid email address
- `password` - User's password

#### Response
**Success (200)**
```json
{
  "message": "Login successful",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "phone": "+1234567890",
    "role": "customer"
  },
  "session": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expiresAt": 1234567890
  }
}
```

**Error (401)**
```json
{
  "error": "Invalid email or password"
}
```

---

### 3. Logout

**POST** `/api/auth/logout`

Ends the current session (invalidates token).

#### Request Body
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Required Fields
- `accessToken` - Current user's access token

#### Response
**Success (200)**
```json
{
  "message": "Logout successful",
  "success": true
}
```

**Error (400)**
```json
{
  "error": "Access token is required"
}
```

---

### 4. Get Current User

**GET** `/api/auth/me`

Returns the authenticated customer's info.

#### Headers
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### Response
**Success (200)**
```json
{
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "phone": "+1234567890",
    "role": "customer",
    "emailConfirmed": true,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "lastSignIn": "2024-01-01T12:00:00.000Z"
  }
}
```

**Error (401)**
```json
{
  "error": "Authorization header with Bearer token is required"
}
```

---

### 5. Forgot Password

**POST** `/api/auth/forgot-password`

Sends a reset email/OTP.

#### Request Body
```json
{
  "email": "user@example.com"
}
```

#### Required Fields
- `email` - Valid email address

#### Response
**Success (200)**
```json
{
  "message": "Password reset email sent successfully",
  "success": true
}
```

**Error (400)**
```json
{
  "error": "Email is required"
}
```

---

### 6. Reset Password

**POST** `/api/auth/reset-password`

Completes the password reset using the email link/OTP.

#### Request Body
```json
{
  "password": "newsecurepassword123",
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Required Fields
- `password` - New password (minimum 8 characters)
- `accessToken` - Access token from reset email

#### Response
**Success (200)**
```json
{
  "message": "Password updated successfully",
  "success": true
}
```

**Error (400)**
```json
{
  "error": "Password and access token are required"
}
```

---

## Error Handling

All endpoints return consistent error responses:

### Error Response Format
```json
{
  "error": "Human-readable error message"
}
```

### HTTP Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (authentication required)
- `405` - Method Not Allowed
- `500` - Internal Server Error

---

## Security Features

1. **Password Validation**: Minimum 8 characters required
2. **Email Validation**: Proper email format validation
3. **Token-based Authentication**: JWT tokens for session management
4. **Input Sanitization**: All inputs are validated and sanitized
5. **Error Logging**: Comprehensive error logging for debugging

---

## Database Schema

The API expects a `profiles` table in your Supabase database:

```sql
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);
```

---

## Usage Examples

### Frontend Integration

```typescript
// Register
const registerUser = async (userData: RegisterData) => {
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  return response.json();
};

// Login
const loginUser = async (credentials: LoginData) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });
  return response.json();
};

// Get current user
const getCurrentUser = async (token: string) => {
  const response = await fetch('/api/auth/me', {
    headers: { 
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  return response.json();
};
```

---

## Notes

- All endpoints use Supabase Auth for authentication
- Email confirmation is auto-enabled for demo purposes
- Session tokens are JWT-based and secure
- The API includes comprehensive error handling and validation
- Profile data is stored in a separate `profiles` table
- Row Level Security (RLS) is enabled for data protection
