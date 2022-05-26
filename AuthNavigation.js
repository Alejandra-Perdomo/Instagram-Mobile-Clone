
import { SignedInStack, SignedOutStack } from './navigationRoutes'
import { auth, onAuthStateChanged } from "./firebase";
import React,{useState,useEffect} from 'react'

export default function AuthNavigation() {
    const [currentUser,setCurrentUser] = useState(null);

    const userHandler = (user) =>{
      user? setCurrentUser(user) : setCurrentUser(null);
    }
  
    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          //const uid = user.uid;
          userHandler(user);
          // ...
        } else {
          // User is signed out
          // ...
          setCurrentUser(null);
          console.log('User is signed out')
        }
      });
  
    },[])

  return (
    <>
      {currentUser?<SignedInStack/>:<SignedOutStack/>}
    </>
  )
}
