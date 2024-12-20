
import '../CSS/ProductCard.css';
import { AppContext } from '../App';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


function ProductCard({ productInfo }) {
    const { AddToCart, cartItem } = useContext(AppContext);
    const navigate = useNavigate();
    // const AddToCart = () => {
    //     if (!cartItem.includes(productInfo)) {
    //         let newCartItem = productInfo;
    //         setCartItem((prevItems) => [...prevItems, newCartItem]);
    //         setCartCount(cartCount + 1);

    //     } else {
    //         alert("This item is already added");
    //     }
    // }
    const handleClick = (event, productInfo) => {
        if (event.target.tagName == 'BUTTON') {
            AddToCart(productInfo);
        } else {
            navigate('/product-details', { state: productInfo });
        }
    }

    return (
        <div className="product-card" onClick={(event) => { handleClick(event, productInfo); }}>
            <img src={productInfo.img} alt={productInfo.name} className="product-img" />
            <h3 className="product-name">{productInfo.title}</h3>
            <p className="product-price">Rs. {productInfo.price}</p>
            {
                !cartItem.some(item => item.id === productInfo.id) && <button className="buy-button" >Add to Cart</button>
            }
        </div>
    );
}

export default ProductCard;
