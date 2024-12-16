'use client'
import React, { useState } from 'react';
import { auth } from '../config/firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import GreenBar from "../components/Green-diary-bar"; // import green bar
import Link from 'next/link';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/home'); // Redirect to home page after successful sign in
    } catch (error) {
      setError('Invalid email or password');
      console.error('Error:', error);
    }
  };

  return (
    <>

      {/* Container with sign in element container, green "grass bar," and plants*/}
      <div className="flex flex-col min-h-screen px-0" style={{ backgroundColor: '#E0E4E4' }}>

        <div className="flex min-h-full flex-1 flex-col justify-start px-0 py-3 lg:px-8 relative z-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-5">
            <img
              alt="Greenbird Logo"
              src="/logo.svg"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Work on your garden!
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSignIn} className="space-y-6">
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <Link
                      href="/reset-password"
                      className="font-semibold"
                      style={{ color: '#8FBC8F' }}
                      onMouseEnter={(e) => (e.target.style.color = '#527B52')}
                      onMouseLeave={(e) => (e.target.style.color = '#8FBC8F')}
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6"
                  style={{ backgroundColor: '#8FBC8F', color: "white" }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = '#527B52')}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = '#8FBC8F')}
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <Link
                href="/auth/sign-up"
                className="font-semibold leading-6"
                style={{ color: '#8FBC8F' }}
                onMouseEnter={(e) => (e.target.style.color = '#527B52')}
                onMouseLeave={(e) => (e.target.style.color = '#8FBC8F')}
              >
                Start Gardening
              </Link>
            </p>
          </div>
        </div>

        {/* Your existing plant images and GreenBar component */}
        <div className="absolute bottom-28 left-0 right-0 flex justify-center w-full z-0">
          {/* ... rest of your existing code ... */}
        </div>
        <GreenBar style={{ height: 110, width: '100%', marginTop: 'auto' }} />
      </div>
    </>
  );
}