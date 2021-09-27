import React from 'react';
import './Cart.css';
const Cart = (props) => {
        const{ cart }= props;
        let total =0;
        for (const product of cart){
            total= total+product.price;
        }

    return (
        <div className ='booked'>
            <h3> Booked Summary</h3>
            <h4>Select Area: {props.cart.length}</h4>
            <br />
           <h3> <b>Total</b> :{total}$</h3>
        </div>
    );
};

export default Cart;