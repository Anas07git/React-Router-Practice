import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import FeaturedProduct from "./components/FeaturedProduct";
import NewProduct from "./components/NewProduct";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";
import React from "react";
import Profile from "./components/Profile";
import { AuthProvider } from "./components/Auth";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";
const LazyAbout= React.lazy(()=> import("./components/About"))

function App() {
  return (
    <AuthProvider>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="about" element={<React.Suspense fallback="loading...">
           <LazyAbout/>
        </React.Suspense>} />
        <Route path="order" element={<OrderSummary />} />
        <Route path="products" element={<Products />} >
          <Route index element={<FeaturedProduct/>}/>
          <Route path="featured" element={<FeaturedProduct/>}/>
          <Route path="new" element={<NewProduct/>}/>
        </Route>

        <Route path="users" element={<Users/>} />
        <Route path="users/:userId" element={<UserDetails/>} />
        <Route path="users/admin" element={<Admin/>} />
        <Route path="profile" element={<RequireAuth><Profile/></RequireAuth>} />
        <Route path="login" element={<Login/>} />

      </Routes> 
    
    </AuthProvider>
  );
}

export default App;
