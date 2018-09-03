import React from 'react';
import SelectedProductDetails from './SelectedProductDetails';
import AddToCartButton from './Button';
import GoToCartButton from './Button';



const SelectedProduct = ({products ,addToCart ,fetchInCartProducts}) => {
 var id = window.location.pathname.split('=')[1]
  const result = products.filter(product => product.id == id);
  const handleClick = () => {
    addToCart(result);
  };
  return(
    <React.Fragment>
    <ul>
    <SelectedProductDetails key = {result.length && result[0].id} {...result[0]}/><br/>
    <AddToCartButton message="Add to Cart" onClick={handleClick}/><br/><br/>
    <GoToCartButton message="Go To Cart" onClick={fetchInCartProducts.bind(null,result.length && result[0].id)} /> 
    
    <br/>
   
    </ul>
    </React.Fragment>
);
}

export default SelectedProduct;

