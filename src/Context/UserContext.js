import React, { createContext } from 'react';
import app from '../Firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';
export const AuthContext = createContext()
const auth = getAuth(app)
const UserContext = ({ children }) => {
    const [user, setUser] = useState(null)
    // ------------loading--------
    const [loading, setLoading] = useState(true);

    // sign up 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };
    // sign in 
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logOut 
    const userLogOut = () => {
        setLoading(true)
        signOut(auth)
    }
    // user manage 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user ', currentUser)
            setUser(currentUser);
            setLoading(false)
        })
        return () => unSubscribe();

    }, [])

    const authInfo = { user, createUser, signInUser, userLogOut, loading }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;