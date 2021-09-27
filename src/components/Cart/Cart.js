import React from 'react';
import './Cart.css';
const Cart = (props) => {
        const{ cart }= props;
        let total =0;
        let names =[];
        for (const product of cart){
            total= total+product.price;
            names.push(product.name)
        }

    return (
        <div className ='booked mt-'>
            <h3> Booked Summary</h3>
            <h4>Select Area: {props.cart.length}</h4>
            <br />
           <h3> <b>Total</b> :{total}$</h3>
           {names.map(name=><h4> Name:{name}</h4>)}
        </div>
    );
};

export default Cart;