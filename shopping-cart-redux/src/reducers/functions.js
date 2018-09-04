

const initialState = {
      products : [],
      cart : []
};


const functions = (state = initialState,action ) => {
  switch(action.type){
    case 'DELETE_FROM_CART' :
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
                     window.open("http://localhost:3000/basket");
                return{
                      ...state  ,
                     cart:action.value
                     };
                     break;

    default : return state;
   }

 };


export default functions;
