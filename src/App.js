import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbars from './components/Navbar/Navbars';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import Blog from './pages/Blog/Blog';
import Notfound from './pages/Notfound/NotFound';
import Inventory from './pages/Inventory/Inventory';
import RequireAuth from './RequeryAuth/RequreAuth';
import UpdaeteItem from './pages/UpdateItem/UpdaeteItem';
import AddItem from './pages/AddItem/AddItem';
import { useState } from 'react';

function App() {
  const [updateProduct, setUpdateProduct] = useState()

  const handleUpdate = (product) => {
      setUpdateProduct(product);
  }
  return (
    <div className="App">
      <Navbars></Navbars>
      <Routes>
        <Route path='/' element={<Home handleUpdate={handleUpdate}></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory ></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/update/:id' element={
          <RequireAuth>
            <UpdaeteItem updateProduct={updateProduct}></UpdaeteItem>
          </RequireAuth>
        }></Route>
        <Route path='/additem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
