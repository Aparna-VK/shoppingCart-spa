
import {getproduct,fetchBucket,addProductToBucket, deleteFromBucket, submit_details,submit_credentials} from '../api';




export const getProductsr = () => async dispatch => {
  const products = await getproduct();
  dispatch({
    type: exampleActions.GET_PRODUCTS,
    value:products
  });
};


export const addToCart = (result) => {
  // console.log(result);
  console.log("addtocrt");
  addProductToBucket(result);
  return{
    type:exampleActions.ADD_TO_CART,
  };
}

export const fetchInCartProducts = () => async dispatch => {
  window.open("http://localhost:3000/basket");

  const cartNew = await fetchBucket();
  dispatch({
    type: exampleActions.GO_TO_CART,
    value:cartNew
  });
};


export const removeFromCart = (result) =>async dispatch =>{
   await deleteFromBucket(result);
   const cartNew = await fetchBucket();
  dispatch({
    type: exampleActions.DELETE_FROM_CART,
    value:cartNew
  });
}

export const submitDetails = (userName,firstName,lastName,password) => {
  console.log("in submit details",userName,firstName,lastName,password);
  submit_details(userName,firstName,lastName,password);
  return{
    type:exampleActions.SUBMIT_DETAILS
  };
}


export const submitCredentials = (userName,password) =>{
  submit_credentials(userName,password);
  return{
    type:exampleActions.SUBMIT_CREDENTIALS
  };
}

 const exampleActions = {
  GET_PRODUCTS : "GET_PRODUCTS",
  ADD_TO_CART : "ADD_TO_CART",
  GO_TO_CART :"GO_TO_CART",
  DELETE_FROM_CART:"DELETE_FROM_CART",
  SUBMIT_DETAILS:"SUBMIT_DETAILS",
  SUBMIT_CREDENTIALS:"SUBMIT_CREDENTIALS"
};
