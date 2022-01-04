import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home.js";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Productlist from "./pages/Productlist";
import Register from "./pages/Register";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const user = true;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<Productlist />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </div>
  );
}

export default App;
