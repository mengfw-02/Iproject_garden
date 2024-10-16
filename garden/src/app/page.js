import React from 'react';
import Link from 'next/link'; // Import Link for navigation

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to Greenbird</h1>
      <p>Your journey starts here!</p>
      <Link href="/auth/sign-up"> {/* Link to the Sign-Up page */}
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>
          Sign Up
        </button>
      </Link>
    </div>
  );
};

export default HomePage;