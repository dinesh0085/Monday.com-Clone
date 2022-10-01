import { useStatStyles } from "@chakra-ui/react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContent=createContext();

export default function AuthContentProvider({children}){
    const [isAuth,setIsAuth] = useState(false);
    const [name,setName] = useState("")

    const loginUser=(value)=>{
        setIsAuth(true)
        setName(value)
    }

    const logoutUser=()=>{
        setIsAuth(false)
    }

    return (
        <AuthContent.Provider
        value={{name,loginUser,logoutUser,isAuth}}>
            {children}
        </AuthContent.Provider>
    )
}