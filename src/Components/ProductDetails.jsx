import { useLocation } from 'react-router-dom';

function ProductDetails() {
 const obj=useLocation();
 const productInfo=obj.state;
  return (
    <div>
      <h1>{productInfo ? productInfo.id : 'No product info available'}</h1>
    </div>
  );
}

export default ProductDetails;
