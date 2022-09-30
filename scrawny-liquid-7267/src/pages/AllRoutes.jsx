import { Route, Routes } from "react-router-dom";
import Homepage1 from "./Homepage01/Homepage1";
import Login from "./Login";
import SignUp from "./Signup";

function AllRoutes(){
    return <Routes>
        <Route path="/" element={<Homepage1></Homepage1>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
    </Routes>
}
export default AllRoutes