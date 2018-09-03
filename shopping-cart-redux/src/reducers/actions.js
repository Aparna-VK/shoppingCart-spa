import {getproduct,addProductToBucket} from '../api';


const initialState = {
      products : [],
      cart : []
};

const goToCart = () => {
  window.open("http://localhost:3000/cart");
}

const actions = (state = initialState,action ) => {
  switch(action.type){
    case 'GET_PRODUCTS':getproduct();

                return {
                        ...state,
                        products:action.value
                      };
                      break;
    case 'ADD_TO_CART': 
                      console.log('in add to cart')
                      addProductToBucket();
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


export default actions;
