import React, { useState } from 'react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import ProductReviews from '../ProductReviews/ProductReviews';

const Order = () => {
    const { products, initialCart } = useLoaderData();

    const [cart, setCart] = useState(initialCart)
    // console.log(initialCart.length)
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart()

    }

    const removeCartHandle = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining);
        removeFromDb(id)

    }
    return (
        <div className='shop-containers'>
            <div className='container' >

                <div >
                    {
                        cart.map(product => <ProductReviews product={product} removeCartHandle={removeCartHandle}></ProductReviews>)
                    }
                    {
                        cart.length === 0 && <h4>Please Select your Favorite Items <Link to="/shop">Select Shop</Link></h4>
                    }
                </div>
            </div>
            <div className="cart-container">

                <Cart cart={cart} clearCart={clearCart} >
                    <NavLink to='/shipping'>
                        <button>Proceed Shipping</button>
                    </NavLink>
                </Cart>
            </div>
        </div>
    );
};

export default Order;