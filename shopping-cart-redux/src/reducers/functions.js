
import {getproduct,fetchBucket,addProductToBucket, deleteFromBucket} from '../api';

const initialState = {
      products : [],
      cart : []
};


const functions = (state = initialState,action ) => {
  
  switch(action.type){
    case 'DELETE_FROM_CART' :console.log("action,value",action.value);
                      return{
                        ...state,
                        cart:action.value
                      };
                      break;
    case 'GET_PRODUCTS':  console.log("action,value",action.value);
                      return {
                        ...state,
                        products:action.value
                      };
                      break;
    case 'ADD_TO_CART': 
                return{
                      ...state
                      };
                      break;
     case 'GO_TO_CART':
                     console.log('55555',action.value);
                return{
                      ...state  ,
                     cart:action.value
                     };
                     break;

    default : return state;
   }

 };


export default functions;
