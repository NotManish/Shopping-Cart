import './ProductCard.css';
import { AppContext } from '../App';
import { useContext, useState } from 'react';


function ProductCard({ productInfo }) {
    const { setCartCount, cartCount, cartItem, setCartItem } = useContext(AppContext);

    const AddToCart = () => {
        if (!cartItem.includes(productInfo)) {
            let newCartItem = productInfo;
            setCartItem((prevItems) => [...prevItems, newCartItem]);
            setCartCount(cartCount+1);
        }else{
            alert("This item is already added");
        }




    }

    return (
        <div className="product-card">
            <img src={productInfo.img} alt={productInfo.name} className="product-img" />
            <h3 className="product-name">{productInfo.title}</h3>
            <p className="product-price">Rs. {productInfo.price}</p>
            <button className="buy-button" onClick={AddToCart}>Add to Cart</button>
        </div>
    );
}

export default ProductCard;
