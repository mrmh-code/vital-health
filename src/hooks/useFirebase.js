import {GoogleAuthProvider,getAuth,signInWithPopup,onAuthStateChanged,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import { useEffect, useState } from 'react';
import initializeAuthentication from '../firebase/firebase.init'

initializeAuthentication();
const providerGoogle=new GoogleAuthProvider();

const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
  
    const [error,setError]=useState('');

    const handlePassWord=(e)=>{
        setError('');
        setPassword(e.target.value)
         
    }
 
    const handleEmail=(e)=>{
        setError('');
        setEmail(e.target.value)
    }


    const auth=getAuth()
    const singInGoogle=()=>{
      return  signInWithPopup(auth,providerGoogle)
         
    }   

   

    const logOut=()=>{
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    }
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user);
            }
        })
    },[])

    const processLogin=(e)=>{
        setError('');
        CreateNewUser();
        e.preventDefault();
        console.log(email,password)
        if(password.length<5){
          setError('Password Must be at least 6 characters long')
          return;
        }
        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            setUser(result.user);
            setError('');
        }).catch(error=>{
            setError(error.message);
        })
    }
    const CreateNewUser=()=>{
        setError('')
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            setUser(result.user);
            setError('');
        }).catch(error=>{
            setError(error.message);
        })
    }


    return {
        singInGoogle,
        user,
        error,
        logOut,
        handleEmail,
        handlePassWord,
        processLogin
        
    }
}

export default useFirebase;