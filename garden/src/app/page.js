// @anthony, please finish this design

'use client'
import React from 'react';
import Link from 'next/link'; // Import Link for navigation

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to Greenbird</h1>
      <p>Your journey starts here!</p>
      {/* these are the ways to render .jsx/.js file */}
      <Link href="/auth/sign-up"> {/* Link to the Sign-Up page */}
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>
          Sign Up
        </button>
      </Link>
      <Link href="/auth/sign-in"> {/* Link to the Sign-Up page */}
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>
          Sign Up
        </button>
      </Link>
      <Link href="/auth/log-out"> {/* Link to the Sign-Up page */}
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>
          Sign Up
        </button>
      </Link>
      <Link href="/home"> 
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default HomePage;