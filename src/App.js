import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';

function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Login/>}/>
      <Route path="/regiser" exact element={<Register/>}/>






    </Routes>
    
    
    
    
    </BrowserRouter>
    
    
    
    
    </>
    
  );
}

export default App;
