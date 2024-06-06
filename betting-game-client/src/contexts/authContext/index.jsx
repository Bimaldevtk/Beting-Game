import { useEffect, useState, useContext, useEffect } from "react";
import { auth } from "../../firebase/firebase"; 
import { onAuthStateChanged } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext =React.createContext();
export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({}){
    const [currentUser, setCurrentUser] =useState(null);
    const [userLoggedIn, setuserLoggedIn] = useState(false);
    const [loading, setloading] = useState(true);
    
    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,intialzeUser);
        return unsubscribe;
    },[])
    async function intialzeUser(user){
        if(user){
            setCurrentUser({...user});
            setuserLoggedIn(true);
        }
        else{
            setCurrentUser(null);
        }
    }
    const value={
        currentUser,
        userLoggedIn,
        loading,
    }
    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}