import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';

function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Login/>}/>






    </Routes>
    
    
    
    
    </BrowserRouter>
    
    
    
    
    </>
    
  );
}

export default App;
