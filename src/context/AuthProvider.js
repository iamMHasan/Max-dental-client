import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState('')

    // google sign in
    const googleSignIn =provider =>{
        setLoading(false)
        return signInWithPopup(auth, provider)
    }
    // create user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email,password)
    }
    // on auth state change
    useEffect(()=>{
      const unsubscribed =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        })
        return ()=> unsubscribed()
    },[])
    // update profile
    const updateUser = (profile) =>{
      return  updateProfile(auth.currentUser, profile)
    }
    // user login
    const logInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userInfo ={
        googleSignIn,
        user,
        createUser,
        updateUser,
        logInUser
    }

    return (
       <AuthContext.Provider value={userInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;