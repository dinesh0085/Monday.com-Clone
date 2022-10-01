import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../component/PrivateRoute";
import Homepage1 from "./Homepage01/Homepage1";
import Homepage2 from "./Homepage2";
import Login from "./Login";
import SignUp from "./Signup";

function AllRoutes(){
    return <Routes>
        <Route path="/" element={ <PrivateRoute> <Homepage1></Homepage1> </PrivateRoute> }></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/home" element={<Homepage2></Homepage2>}></Route>
    </Routes>
}
export default AllRoutes