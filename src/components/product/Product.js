import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const Product = (props) => {
    // console.log(props);
    const { product, HandleAddToCart } = props

    const { name, img, price, seller, ratings } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='info-container'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <p className='product-seller'>{seller}</p>
                <p className='product-rating'>Rating: {ratings} Star</p>
            </div>
            <button onClick={() => HandleAddToCart(product)} className='btn-cart'>
                <p className='add-to-cart'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div >
    );
};

export default Product;