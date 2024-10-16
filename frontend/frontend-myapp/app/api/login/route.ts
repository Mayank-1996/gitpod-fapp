import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Mock authentication (replace with real logic)
  if (email === 'test@example.com' && password === 'password123') {
    return NextResponse.json({ message: 'Login successful', token: 'fake-jwt-token' });
  }

  return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
}
