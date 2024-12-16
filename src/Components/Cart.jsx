import './Cart.css';
import CartItems from './CartItems';
function Cart() {
    return (
        <div className='cart'>

            <div className="cart-container">
                    <CartItems/>
            </div>
        </div>
    )
}

export default Cart;