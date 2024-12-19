import { useLocation } from 'react-router-dom';
import '../CSS/ProductDetails.css';

function ProductDetails() {
  const { state: productInfo } = useLocation(); // Destructuring directly from location state
  
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
          <button className="add_to_cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
