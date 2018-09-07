
import {getproduct,fetchBucket,addProductToBucket, deleteFromBucket} from '../api';


// export const getProductsr = () =>{
//     const products =  getproduct();
//     console.log("in action",products);

//    return {
//        type: exampleActions.GET_PRODUCTS,
//        value : products
//       };
// }



export const getProductsr = () => async dispatch => {
  const products = await getproduct();
  dispatch({
    type: exampleActions.GET_PRODUCTS,
    value:products
  });
};


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

export const removeFromCart = (result) =>{
  deleteFromBucket(result);
  const cartNew = fetchBucket(); 
  return {
     type: exampleActions.DELETE_FROM_CART,
     value : cartNew
    };
}

 const exampleActions = {
  GET_PRODUCTS : "GET_PRODUCTS",
  ADD_TO_CART : "ADD_TO_CART",
  GO_TO_CART :"GO_TO_CART",
  DELETE_FROM_CART:"DELETE_FROM_CART"
};
//
//export default getProductsr();
