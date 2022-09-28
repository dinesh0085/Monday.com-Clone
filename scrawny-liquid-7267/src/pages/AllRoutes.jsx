import { Route, Routes } from "react-router-dom";
import Homepage1 from "./Homepage01/Homepage1";

function AllRoutes(){
    return <Routes>
        <Route path="/" element={<Homepage1></Homepage1>}></Route>
        <Route path="/login" element={<h1>Login</h1>}></Route>
        <Route path="/signup" element={<h1>Signup</h1>}></Route>
        <Route path="/signup" element={<h1>Signup</h1>}></Route>
    </Routes>
}
export default AllRoutes