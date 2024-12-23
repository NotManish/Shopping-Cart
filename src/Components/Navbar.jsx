import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
import { useContext } from "react";
import { AppContext } from "../App";

function Navbar() {
  const { cartCount, searchQuery, setSearchQuery, setProduct, originalProductArray } = useContext(AppContext);

  const handleSearchChange = (event) => {
    const query = event.target.value.trimStart().replace(/\s+/g, " ");
    setSearchQuery(query);
    const filteredProducts = originalProductArray.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setProduct(filteredProducts);
  };

  const handleClick = () => {
    setSearchQuery("");
    setProduct(originalProductArray);
  };

  return (
    <div className="navbar-container">
      <div className="home" onClick={handleClick}>
        <Link to="/" className="home">Home</Link>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="cart">
        <div className="cart-icon">
          <Link to="/cart" className="cart-icon">MyCart</Link>
        </div>
        <div className="cart-quantity">{cartCount}</div>
      </div>
    </div>
  );
}

export default Navbar;
