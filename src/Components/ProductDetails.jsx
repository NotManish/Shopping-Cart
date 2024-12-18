import { useLocation } from 'react-router-dom';

function ProductDetails() {
  const { state } = useLocation();
  const { productInfo } = state ?? {};  // Safe access to state
  return (
    <div>
      <h1>{productInfo ? productInfo.id : 'No product info available'}</h1>
    </div>
  );
}

export default ProductDetails;
