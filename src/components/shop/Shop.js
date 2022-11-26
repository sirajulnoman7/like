import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoreCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css';
const Shop = () => {
    // const [products, setProducts] = useState([]);
    const products = useLoaderData();

    // useEffect(() => {
    //     fetch('products.json')
    //         .then(res => res.json())
    //         // .then(data => console.log(data))
    //         .then(data => setProducts(data))
    // }, []);
    //last step
    //local storage a id diye products ar information ber kortechi
    //seta akta object silo tai seta re for in mere ber kore
    //find diye khuje id tar sathe compire koretechi.
    useEffect(() => {
        const storeCart = getStoreCart();
        const saveCart = [];
        for (const id in storeCart) {
            const addedProduct = products.find(product => product.id === id);


            if (addedProduct) {
                const quantity = storeCart[id]
                addedProduct.quantity = quantity
                console.log(addedProduct)
                saveCart.push(addedProduct)
            }
        }
        setCart(saveCart)
    }, [products]);
    //click handler useState
    const [cart, setCart] = useState([]);
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    const handleAddToCart = (product) => {
        // quantity check and set 
        let newCart = [];
        const exist = cart.find(productItems => productItems.id === product.id);
        if (!exist) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            const rest = cart.filter(productFilter => productFilter.id !== product.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        // console.log(product, 'click')

        setCart(newCart);
        addToDb(product.id)

    }
    return (
        <div className='shop-containers'>
            <div className='container' >

                <div className="product-container">
                    {
                        products.map(product => <Product product={product}
                            key={product.id}
                            HandleAddToCart={handleAddToCart}>
                        </Product>)
                    }
                </div>
            </div>
            <div className="cart-container">

                <Cart cart={cart} clearCart={clearCart}>
                    <Link to='/order'>Cart Reviews</Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;