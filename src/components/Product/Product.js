import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotel } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const {name, photo, country, average_rating, check_in_count, price, duration}= props.product;
    const element =<FontAwesomeIcon icon={faHotel} />
    return (
        <div className='card  justify-content-between row- ' >
            <div className='card h-100 shadow-lg border-dark rounded bgColor'>
                <div className='card-body bg-card text-center'>
                    <img className='img-fluid  image' src={photo} alt="" />
                    <h3>{name}</h3>
                </div>
                <span className='p-3 bg-card'> 
                <h6><span className="fw-bold">Country Name: </span>{country}</h6>
                <h6><span className="fw-bold">Check IN: </span>{check_in_count}</h6>
                <h4><span className="fw-bold">Price: </span>{price} </h4>
                <h6><span className="fw-bold">Rating: </span>{average_rating}</h6> 
                <h6><span className="fw-bold">Duration: </span>{duration}</h6>
                </span>
                <div className="d-flex justify-content-center p-3">
                <button onClick= {()=>props.handleAddToCart(props.product)}
            className='cartItems btn btn-primary btn fw-bold button '>{element}Add to cart</button>


                </div>
            </div>
        </div>
    );
};

export default Product;