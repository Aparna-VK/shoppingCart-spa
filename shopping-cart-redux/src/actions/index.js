
import {getproduct,fetchBucket} from '../api';


// const getProductsr = () => async dispatch => {
//   const products = await getproduct();
//   dispatch({
//     type: exampleActions.GET_PRODUCTS,
//     value : products
//   });
// };


export const getProductsr = () =>{
    const products =  getproduct();
   return {
       type: exampleActions.GET_PRODUCTS,
       value : products
      };
}

export const addToCart = () => {
  return{
    type:exampleActions.ADD_TO_CART,
  };
}

export const goToCart = () => {
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
