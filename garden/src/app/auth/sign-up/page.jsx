// because we're using email, password
'use client'
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import {auth} from '@/config/firebase-config';
import styles from './sign-up.module.css'

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const res = await createUserWithEmailAndPassword(email, password);
      // debugging response
      console.log("I'm about to debug response")
      console.log({res})
      setEmail('');
      setPassword('')
    } catch(e) {
      console.error("error during sign up:", e);
      console.error("error message:", e.message);
    }
  };

  /* if you're using css for your style design, please use className... */
  return (
    <div className={styles.container}>
      <Navbar/>

      <h1 className={styles.title}>Welcome to Greenbird</h1>
      
      <div className={styles.signUpBox}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.button}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;