import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import { products } from './Components/Data';
import ProductDetails from './Components/ProductDetails';
export const AppContext = createContext();

function App() {
  const [productArray, setProduct] = useState(products);
  const [cartCount, setCartCount] = useState(0);
  const [cartItem, setCartItem] = useState([]);

  const AddToCart = (productInfo) => {
    if (!cartItem.some(item => item.id === productInfo.id)) {
      setCartItem((prevItems) => [...prevItems, productInfo]);
      setCartCount(cartCount + 1);
    } else {
      alert("This item is already added");
    }
  };



  return (
    <AppContext.Provider value={{ productArray, cartCount, setCartCount, cartItem, setCartItem, AddToCart }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product-details" element={<ProductDetails />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}


export default App;
