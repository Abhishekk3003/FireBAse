import React, { useState } from 'react'
import {getAuth,createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from "firebase/auth"
import {app} from "../firebase.js"

const Signup = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
     
    const[email,setEmail]= useState("");
    const[password,setPassword]=useState("") 

    

    const signUpUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((value) => console.log(value) 
 
  )
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
    // ..
  });

    }

    const signupWithGoogle = () => {
      signInWithPopup(auth,googleProvider)
    }

  return (

    <div>
     <label>Email</label>
     <input type='Email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email}/>

     <label>Password</label>
     <input type='Password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password}/>


     <button onClick={signUpUser}>Create User</button>
     <br/>
     <button onClick={signupWithGoogle}>Signup Using Google</button>
    </div>
  )
}

export default Signup;