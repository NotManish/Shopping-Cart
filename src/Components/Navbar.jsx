import { Link } from 'react-router-dom';
import '../CSS/Navbar.css'
import { useContext,useState } from 'react';
import { AppContext } from '../App';
function Navbar() {

  const { cartCount } = useContext(AppContext);
  const [query, setQuery] = useState("");

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };
  const handleSearchSubmit = () => {
    onSearch(query);
  };

  console.log("query value is",query);

  return (
    <div className="navbar-container">
      <div className="home">
        <Link to="/" className="home">Home</Link>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={handleSearchChange}
        />
        <button onChange={handleSearchSubmit}>Search</button>
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
