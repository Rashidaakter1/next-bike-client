import logo from './logo.svg';
import './App.css';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Inventory from './Pages/Inventory/Inventory';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import AddNewItem from './Pages/AddNewItem/AddNewItem';
import MyItems from './Pages/MyItems/MyItems';
import RequireAuth from './Shared/RequireAuth/RequireAuth';
import NotFound from './Shared/NotFound/NotFound';

function App() {
  return (
    <div >
      <Header></Header>
     
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/inventory/:id" element={<RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>} />
        <Route path="/manageInventories" element={<ManageInventories></ManageInventories>} />
        <Route path="/addNewItem" element={<AddNewItem></AddNewItem>}/>


          <Route path="/myitems" element={<MyItems></MyItems>} />
          <Route path="*" element={<NotFound></NotFound>} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
