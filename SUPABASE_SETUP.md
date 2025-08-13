# Supabase Authentication Setup Guide

This guide will help you set up Supabase authentication for the Campus Angel food delivery app.

## Prerequisites

1. A Supabase account (sign up at [supabase.com](https://supabase.com))
2. Node.js and npm installed
3. The Campus Angel project cloned locally

## Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - **Name**: `campus-angel` (or your preferred name)
   - **Database Password**: Generate a strong password
   - **Region**: Choose closest to your users
5. Click "Create new project"
6. Wait for the project to be created (this may take a few minutes)

## Step 2: Get Your Project Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (e.g., `https://your-project-id.supabase.co`)
   - **Anon public key** (starts with `eyJ...`)
   - **Service role key** (starts with `eyJ...`)

## Step 3: Configure Environment Variables

1. In your project root, create a `.env.local` file
2. Add the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**⚠️ Important**: Never commit your `.env.local` file to version control!

## Step 4: Set Up Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Run the following SQL to create the profiles table:

```sql
-- Create profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Create indexes for better performance
CREATE INDEX idx_profiles_email ON profiles(email);
CREATE INDEX idx_profiles_created_at ON profiles(created_at);
```

## Step 5: Configure Authentication Settings

1. In your Supabase dashboard, go to **Authentication** → **Settings**
2. Configure the following:

### Email Templates
- **Confirm signup**: Customize the email template for account confirmation
- **Reset password**: Customize the password reset email template

### URL Configuration
- **Site URL**: `http://localhost:3000` (for development)
- **Redirect URLs**: Add `http://localhost:3000/reset-password`

### Email Settings
- **Enable email confirmations**: Turn ON for production, OFF for development
- **Enable email change confirmations**: Turn ON
- **Enable secure email change**: Turn ON

## Step 6: Test the API Endpoints

1. Start your development server: `npm run dev`
2. Test the endpoints using a tool like Postman or curl:

### Test Registration
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123",
    "firstName": "Test",
    "lastName": "User",
    "phone": "+1234567890"
  }'
```

### Test Login
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

## Step 7: Frontend Integration

The API endpoints are now ready to use in your frontend components. Here's a basic example:

```typescript
// src/hooks/useAuth.ts
import { useState, useEffect } from 'react'

interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setUser(data.user)
        // Store tokens in localStorage or secure storage
        localStorage.setItem('accessToken', data.session.accessToken)
        return { success: true, data }
      } else {
        return { success: false, error: data.error }
      }
    } catch (error) {
      return { success: false, error: 'Network error' }
    }
  }

  const logout = async () => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accessToken: token })
      })
    }
    
    setUser(null)
    localStorage.removeItem('accessToken')
  }

  const getCurrentUser = async () => {
    const token = localStorage.getItem('accessToken')
    if (!token) {
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/auth/me', {
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      
      if (response.ok) {
        const data = await response.json()
        setUser(data.user)
      } else {
        localStorage.removeItem('accessToken')
      }
    } catch (error) {
      localStorage.removeItem('accessToken')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCurrentUser()
  }, [])

  return { user, loading, login, logout, getCurrentUser }
}
```

## Troubleshooting

### Common Issues

1. **"Missing Supabase environment variables"**
   - Check that your `.env.local` file exists and has all required variables
   - Restart your development server after adding environment variables

2. **"Invalid login credentials"**
   - Ensure the user exists in your Supabase Auth
   - Check that the password is correct
   - Verify email confirmation if enabled

3. **"Authorization header required"**
   - Include the `Authorization: Bearer <token>` header in your requests
   - Ensure the token is valid and not expired

4. **Database connection errors**
   - Verify your Supabase project is active
   - Check that the database password is correct
   - Ensure the profiles table exists and has proper RLS policies

### Getting Help

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Discord Community](https://discord.supabase.com)
- [GitHub Issues](https://github.com/supabase/supabase/issues)

## Security Best Practices

1. **Never expose service role keys** in client-side code
2. **Use environment variables** for all sensitive configuration
3. **Enable Row Level Security** on all tables
4. **Validate all inputs** on both client and server
5. **Use HTTPS** in production
6. **Regularly rotate** your service role keys
7. **Monitor authentication logs** for suspicious activity

## Next Steps

Once authentication is working, you can:

1. Add user profile management
2. Implement role-based access control
3. Add social authentication (Google, Facebook, etc.)
4. Set up email verification workflows
5. Add two-factor authentication
6. Implement session management
7. Add user activity logging
