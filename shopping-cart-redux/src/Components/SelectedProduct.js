import React from 'react';
import DisplayOne from './DisplayOne';
import AddToCartButton from './Button';
import GoToCartButton from './Button';



const SelectedProduct = ({products ,addToCart ,goToCart}) => {
 var id = window.location.pathname.split('=')[1]

  const result = products.filter(product => product.id == id);
  return(
    <React.Fragment>
    <ul>
    <DisplayOne key = {result.length && result[0].id} {...result[0]}/><br/>
    <AddToCartButton message="Add to Cart" onClick={addToCart.bind(null,result.length && result[0].id)}/><br/><br/>
    <GoToCartButton message="Go To Cart" onClick={goToCart.bind(null,result.length && result[0].id)} /> 
    
    <br/>
   
    </ul>
    </React.Fragment>
);
}

export default SelectedProduct;

