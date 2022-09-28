import { Heading } from '@chakra-ui/react';
import './App.css';
import Navbar from './component/Navbar';
import AllRoutes from './pages/AllRoutes';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <AllRoutes></AllRoutes>
    </div>
  );
}

export default App;
