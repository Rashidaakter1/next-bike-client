import logo from './logo.svg';
import './App.css';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Inventory from './Pages/Inventory/Inventory';

function App() {
  return (
    <div className="App">
      <Header></Header>
     
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/inventory/:id" element={<Inventory></Inventory>} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
