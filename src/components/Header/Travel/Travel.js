import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Product from '../../Product/Product';
import './Travel.css'

const Travel = () => {
    const[products,setProducts] = useState([]);  
    const [cart,setCart] = useState([]);
    useEffect( ()=>{
        fetch('./cityData.JSON')
        .then(res => res.json())
        .then(data =>setProducts(data));
    }, [])

    const handleAddToCart =(product) =>{
    const newCart =[...cart, product]
    setCart(newCart);
    }

    return (
        <div className='travel-container'>
           <div className="product-container">
               <h2>Products:{products.length}</h2>
               {
               products.map(product=><Product 
                key={product.key}
                product={product}
                handleAddToCart={handleAddToCart}
               
               > 

               </Product>)
               }
           </div>
           <div className="cart-container">
              <Cart cart={cart}></Cart>

           </div>
        </div>
    );
};

export default Travel;