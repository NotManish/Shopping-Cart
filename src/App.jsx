import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import { products } from './Components/Data';

export const AppContext = createContext();

function App() {
  const [productArray, setProduct] = useState(products);
  const [cartCount, setCartCount] = useState(0); 
  const[cartItem,setCartItem]=useState([]);
 


  return (
    <AppContext.Provider value={{ productArray, cartCount,setCartCount,cartItem,setCartItem}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
