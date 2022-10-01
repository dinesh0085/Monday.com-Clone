import { useContext } from "react"
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { AuthContent } from "../context/AuthContent"

export default function PrivateRoute({children}){
    const navigate=useNavigate()
    const {isAuth} = useContext(AuthContent);

  if(isAuth){
    return <Navigate to="/home"></Navigate>
  }

    return children
}