import { useEffect, useState } from 'react';
import initializeFirebase from '../Login/Firebase/firebase.init'
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword,updateProfile} from "firebase/auth";

initializeFirebase();

const useFirebase = () =>{
    const [user,setUser]=useState({});
    const [isLoading,setIsLoading] =useState(true);
    const [error,setError] =useState('');
    const [admin, setAdmin]=useState(false);

    const auth=getAuth();

    const registerUser = (email,password,history,name) =>{
        setIsLoading(true);

        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            setError(''); 
            const newUser={email,displayName:name}
            setUser(newUser);
            saveUserTODB(email,name);
            updateProfile(auth.currentUser,{
              displayName:name
            }).then(() =>{
              
            }).catch((error) =>{

            });
            history.replace('/');
          })
          .catch((error) => {
            
            setError (error.message);
            // ..
          })
          .finally(()=> setIsLoading(false));
    }

    const loginUser = (email,password,location,history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      const destination =location.state?.from || '/';
      history.replace(destination);
    setError(''); 
  })
  .catch((error) => {
    setError (error.message);
  })
  .finally(()=> setIsLoading(false));
    }

    useEffect(() =>{
      const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
              
            } else {
              setUser({})
            }
            setIsLoading(false);
          });
          return () =>unsubscribed;
    },[]);

    useEffect(()=>{
      fetch(`http://localhost:5000/users/${user.email}`)
      .then(res=>res.json())
      .then(data=>setAdmin(data.admin))
    }, [user.email]);


    const logOut= () =>{
         setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=> setIsLoading(false));;
    }

    const saveUserTODB = (email, displayName) => {
      const user = { email, displayName };
      fetch('http://localhost:5000/users', {
          method: "POST",
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(user)
      })
          .then()
  }

    return {
        user,
        admin,
        registerUser,
        isLoading,
        loginUser,
        error,
        logOut,
    }
}
export default useFirebase;