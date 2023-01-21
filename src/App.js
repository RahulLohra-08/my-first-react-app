// import logo from './logo.svg';
import "./App.css";
import { Route, BrowserRouter as  Router, Routes, BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Products from "./components/products";
import Home from "./components/Home";
import Product from "./components/Product";

import Employes from "./components/Employes";
import EditEmployee from "./components/EditEmployee";

import Login from './components/Login';
import Signup from './components/Signup';
import AdminSignup from "./components/AdminSignup";
import EcommerceProducts from "./components/EcommerceProducts";
import Cart from "./components/Cart";
import CartDetails from "./components/CartDetails";
import Admin from "./components/Admin";
import GalleryContent from "./components/GalleryContent";
import StudentForm from "./components/StudentForm";

// import LoadingOverlay from 'react-loading-overlay'
// import WarningStatus from "./components/Warning";

function App() {

  return (
    <>
      <div>
        <Navbar gallery="Watch Store" />
        {/* <WarningStatus type="danger" text="Loading..." /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route exact path="/product-list" element={<EcommerceProducts />} />
            <Route exact path="/cart/:id" element={<Cart/>} />

            <Route exact path="/cart-details" element={<CartDetails/>} />
            {/* <Route exact path="/cart-details/:id" element={<CartDetails/>} /> */}

            <Route path="/about" element={<About />} />

            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />

            <Route exact path="/employees" element={<Employes />}/>
            <Route exact path="/edit-employee/:id" element={<EditEmployee/>}/>

            <Route exact path="/signup" element={<Signup />}/>
            <Route exact path="/login" element={<Login />}/>
            
            <Route exact path="/admin" element={<Admin />}/>
            <Route exact path="/admin-signup" element={<AdminSignup />}/>


            <Route path="/gallery" element={<GalleryContent />} />
            {/* <Route path="/gallery/:id" element={<PlaceDetails />} /> */}

            <Route path="/student-form" element={<StudentForm />} />

            {/* <Route path="/employee/details" element={<EmployeeDetaila/>} /> */}

              {/* <Route exact path="/user" element={<UserData/>} /> */}
          </Routes>
        </BrowserRouter>
     
      </div>
    </>
  );
}

export default App;
