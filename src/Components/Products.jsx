
import '../CSS/Products.css';
import ProductCard from './ProductCard.jsx';
import { useContext } from 'react';
import { AppContext } from '../App.jsx';

function Products() {
    const { productArray } = useContext(AppContext);
    return (
        productArray.length > 0 ? <div className="products-container">
            {productArray.map((currentProduct) => {
                return <ProductCard key={currentProduct.id} productInfo={currentProduct} />
            })}
        </div> : <h1>Searched items not found</h1>
    );
}

export default Products;
