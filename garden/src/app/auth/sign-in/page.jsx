'use client'
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/config/firebase-config';
import styles from './sign-in.module.css'; // Assuming you have a CSS module for styles

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {
      const res = await signInWithEmailAndPassword(email, password);
      // Handle successful sign-in
      console.log("User signed in:", user);
      setEmail('');
      setPassword('');
    } catch (e) {
      console.error("Error signing in:", e);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign In</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="email">Email</label>
          <input
            className={styles.input}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="password">Password</label>
          <input
            className={styles.input}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className={styles.button} type="submit" disabled={loading}>
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
        {error && <p className={styles.error}>{error.message}</p>}
      </form>
    </div>
  );
};

export default SignIn;