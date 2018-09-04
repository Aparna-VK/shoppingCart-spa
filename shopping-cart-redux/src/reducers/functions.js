import {getproduct,addProductToBucket} from '../api';


const initialState = {
      products : [],
      cart : []
};

const goToCart = () => {
  window.open("http://localhost:3000/basket");
}

const functions = (state = initialState,action ) => {
  switch(action.type){
    case 'DELETE_FROM_CART' :
                      console.log("action.value",action.value)
                      return{
                        ...state,
                        cart:action.value
                      };
                      break;

    case 'GET_PRODUCTS':
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
                      goToCart();
                return{
                      ...state  ,
                     cart:action.value
                     };
                     break;

    default : return state;
   }

 };


export default functions;
