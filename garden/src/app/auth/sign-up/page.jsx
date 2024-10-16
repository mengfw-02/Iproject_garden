// because we're using email, password
'use client'
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import {auth} from '@/config/firebase-config';
import style from './sign-up.module.css'

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

  return (
    <div style={styles.container}>
      {/*<Navbar/>*/}

      <h1 style={styles.title}>Welcome to Greenbird</h1>
      
      <div style={styles.signUpBox}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: 'white',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpBox: {
    maxWidth: '400px',
    width: '100%',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#d4edda', // Light green background
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#28a745',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default SignUp;