import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import auth from '../../firebase.config';
import useFetch from '../CustomHooks/useFetch';




export const AuthContext = createContext(null);

function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleprovider = new GoogleAuthProvider();

    


    const axiosFetch = useFetch();



    const LoginWithGooglePopup = () => {
        setLoading(true);

        return signInWithPopup(auth, googleprovider);

    }

    const LoginWithEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const RegisterWithEmail = (email, password) => {
        setLoading(true)

        return createUserWithEmailAndPassword(auth, email, password);

    }

    const LogOut = () => {
        setLoading(true)
        signOut(auth)
            .then(() => {
                axiosFetch.post('/jwtTokClear')
                    .then(res => {
                        console.log(res.data)
                    }
                    )
                    .catch(error => console.log(error))
            })
            .catch((error) => {
                console.log(error)
            })
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            setLoading(false)
            const loggedUser = { "email": currentuser?.email || user?.email }
            if (currentuser) {
                setUser(currentuser)

                axiosFetch.post('/jwt', loggedUser)
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(error => {
                        console.log(error);
                    })


            }
            else {
                setUser(null)
            }

        })


        return () => {
            unsubscribe();
        }
    }, [])




















    const Shareobj = {
        user,
        loading,
        LoginWithEmail,
        RegisterWithEmail,
        LoginWithGooglePopup,
        LogOut

    }






    return (
        <AuthContext.Provider value={Shareobj}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider