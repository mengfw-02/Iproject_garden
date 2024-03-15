import { auth, googleProvider } from './firebaseConfig'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { useState } from "react"

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        try {
            const added = await createUserWithEmailAndPassword(auth, email, password);
            if (added) {
                alert("Successfull!")
            }
        } catch (err) {
            alert("Invalid email or password")
            console.error(err)
        }
    };
    const signInWithGoogle = async () => {
        try {
            const added = await signInWithPopup(auth, googleProvider);
            if (added) {
                alert("Successfull!")
            }
        } catch (err) {
            console.error(err)
        }
    };
    const logout = async () => {
        try {
            const added = await signOut(auth);
            if (added) {
                alert("logged out!")
            }
        } catch (err) {
            console.error(err)
        }
    };

    return (
        <div>
            <input
                placeholder="Email..."
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                placeholder="Password..."
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signIn}> Sign In</button>
            <p></p>
            <button onClick={signInWithGoogle}> Sign In With Google</button>
            <p></p>
            <button onClick={logout}>            Logout</button>
        </div>)
}