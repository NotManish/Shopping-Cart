import { useLocation } from 'react-router-dom';
import '../CSS/ProductDetails.css';
import { useContext } from 'react';
import { AppContext } from '../App';



function ProductDetails() {
  const { AddToCart, cartItem } = useContext(AppContext);
  const obj = useLocation();
  const productInfo = obj.state;

  return (
    <div className='product_details'>
      <div className="product_container">
        <div className='product_image'>
          <img src={productInfo.img} alt={productInfo.title} className="product_img" />
        </div>
        <div className="product_info">
          <h1 className="product_title">{productInfo.title}</h1>
          <p className="product_price">Rs. {productInfo.price}</p>
          <p className="product_description_text">{productInfo.description}</p>
          {
            !cartItem.some(item => item.id === productInfo.id) ?
              <button className="add_to_cart" onClick={() => { AddToCart(productInfo); }}>Add to Cart</button> :
              <h4>Item is added to the card</h4>
          }
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
