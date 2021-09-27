import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotel } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const {name, photo, country, average_rating, check_in_count, price, duration}= props.product;
    const element =<FontAwesomeIcon icon={faHotel} />
    return (
        <div className='card  justify-content-between mt-5' >
        <div className='card h-100 shadow-lg border-dark rounded bgColor'>
            <div className='card-body bg-card text-center'>
                <img className='img-fluid  image' src={photo} alt="" />
                <h3>{name}</h3>
            </div>
            <div className=' d-flex justify-content-center'> 
                <div>
                <h3><span className="fw-bold">Country Name: </span>{country}</h3>
            <h3><span className="fw-bold">Check IN: </span>{check_in_count}</h3>
            <h3><span className="fw-bold">Price: </span>{price} </h3>
            <h3><span className="fw-bold">Rating: </span>{average_rating}</h3> 
            <h3><span className="fw-bold">Duration: </span>{duration}</h3>
                </div>
            </div>
            <div className="d-flex justify-content-center p-3">
            <button onClick= {()=>props.handleAddToCart(props.product)}
        className='cartItems btn btn-primary btn fw-bold button '>{element}Add to cart</button>
            </div>
        </div>
    </div>
    );
};

export default Product;