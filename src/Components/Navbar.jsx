import { Link } from 'react-router-dom';
// import './Navbar.css';
import '../CSS/Navbar.css'
import { useContext } from 'react';
import { AppContext } from '../App';
function Navbar() {
  // Destructure cartCount from context
  const { cartCount } = useContext(AppContext);

  return (
    <div className="navbar-container">
      <div className="home">
        <Link to="/" className="home">Home</Link>
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
