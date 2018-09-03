
import {getproduct,fetchBucket,addProductToBucket} from '../api';


export const getProductsr = () =>{
    const products =  getproduct();
    console.log("in action",products);
   return {
       type: exampleActions.GET_PRODUCTS,
       value : products
      };
}

export const addToCart = (result) => {
  console.log(result);
  addProductToBucket(result);
  return{
    type:exampleActions.ADD_TO_CART,
  };
}

export const fetchInCartProducts = () => {
  const cartNew = fetchBucket();
  return{
    type:exampleActions.GO_TO_CART,
    value:cartNew
  };
}

 const exampleActions = {
  GET_PRODUCTS : "GET_PRODUCTS",
  ADD_TO_CART : "ADD_TO_CART",
  GO_TO_CART :"GO_TO_CART"
};
//
//export default getProductsr();
