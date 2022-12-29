import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
//import Login from './component/Login';
import Protected from './component/Protected';
// import ProtectedRoutes from './component/ProtectedRoutes';
import Dashboard from './Dashboard';
import Login from './Login';
// import Privaterout from './Privaterout';

function App() {
  return (
  <>
  <BrowserRouter>
   <Routes>
  <Route path = "/" element = {<Login/>}/>
  <Route path = "/dashboard" element = {<Protected Component ={Dashboard}/>} />
  
    
    {/* <Route element = {<Privaterout isLogged = {false} />}> */}
    {/* <Route path = "/dashboard" element = {<Protected><Dashboard/></Protected>}/> */}
  </Routes>
  </BrowserRouter>

 
  </>

  );
}

export default App;
