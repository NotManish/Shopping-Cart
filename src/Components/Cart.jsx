
import '../CSS/Cart.css';
import { AppContext } from '../App';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


function Cart() {
    const { cartItem, setCartItem, cartCount, setCartCount } = useContext(AppContext);
    let totalPrice = cartItem.reduce((total, item) => {
        return total + (item.quantity) * (item.price);
    }, 0);
    const deleteItem = (itemId) => {
        let filteredArray = cartItem.filter((item) => item.id !== itemId);
        console.log(filteredArray);
        setCartItem(filteredArray);
        setCartCount(cartCount - 1);
    }

    const increaseQuantity = (itemId) => {
        let updatedCart = cartItem.map((currItem) =>
            itemId === currItem.id ? { ...currItem, quantity: currItem.quantity + 1 } : currItem
        );
        setCartItem(updatedCart);
    }

    const decreaseQuantity = (item) => {
        if (item.quantity > 1) {
            let updatedCart = cartItem.map((currItem) =>
                item.id === currItem.id ? { ...currItem, quantity: currItem.quantity - 1 } : currItem
            );
            setCartItem(updatedCart);
        }
    }

    const clearCart = () => {
        setCartItem([]);
        setCartCount(0);
    }

    return (
        <div>
            {cartItem.length > 0 && <button className='clear-cart-button' onClick={clearCart}>clear cart</button>}
            {
                cartItem.map((item) => {

                    return <div className='cart-box' key={item.id}>

                        <div className='cart-img'>
                            {<Link to="/product-details" state={item} className='cart-img'>
                                <img src={item.img} alt="Item" />
                                <p>{item.title}</p>
                            </Link>}
                        </div>

                        <div className='button'>
                            <button onClick={() => { increaseQuantity(item.id); }}>+</button>
                            <div className='quantity'>{item.quantity}</div>
                            <button onClick={() => { decreaseQuantity(item); }}>-</button>
                        </div>

                        <div>
                            <span>Price: Rs. {item.price}/-</span>
                            <button onClick={() => { deleteItem(item.id); }}>Remove</button>
                        </div>

                    </div>

                })
            }
            {
                cartItem.length > 0 ? <div className='total '>
                    <div className='cart-price'>
                        <span>Total price  </span>
                        <span>Rs. {totalPrice}  </span>
                    </div>
                    <div className='checkout-button'>
                        <button>checkout</button>
                    </div>

                </div> : <h1 style={{ textAlign: 'center' }}>Your cart is empty.</h1>
            }



        </div>
    )
}

export default Cart;