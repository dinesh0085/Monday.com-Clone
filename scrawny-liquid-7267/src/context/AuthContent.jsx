import { useStatStyles } from "@chakra-ui/react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContent=createContext();

export default function AuthContentProvider({children}){
    const [isAuth,setIsAuth] = useState(false);

    const loginUser=()=>{
        setIsAuth(true)
    }

    const logoutUser=()=>{
        setIsAuth(false)
    }

    return (
        <AuthContent.Provider
        value={{loginUser,logoutUser,isAuth}}>
            {children}
        </AuthContent.Provider>
    )
}