import React from 'react';
import './ProductReviews.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ProductReviews = ({ product, removeCartHandle }) => {



    const { img, shipping, name, price, quantity, id } = product
    return (
        <div className="main-container">
            <div className='reviews-container'>
                <div>
                    <img className='image' src={img} alt="" />
                </div>
                <div className="review-details-container">
                    <div className="review-details">
                        <p className='text-header'>{name}</p>
                        <p><small>Price: <span className='colors'>${price}</span></small></p>
                        <p><small>Shipping: <span className='colors'>${shipping}</span></small></p>
                        <p><small>Quantity: {quantity}</small></p>
                    </div>
                    <div className="delete-container">
                        <button className='delete-btn' onClick={() => removeCartHandle(id)}>
                            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};



export default ProductReviews;