
import './Products.css';
// import { products } from './Data.jsx';
import ProductCard from './ProductCard.jsx';
import { useContext } from 'react';
import { AppContext } from '../App.jsx';

function Products() {
    const {productArray}=useContext(AppContext);
    return (
        <div className="products-container">
            {productArray.map((currentProduct) => {
                return <ProductCard key={currentProduct.id} productInfo={currentProduct} />
            })}
        </div>
    );
}

export default Products;
