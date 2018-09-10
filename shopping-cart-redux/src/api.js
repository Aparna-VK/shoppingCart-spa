
import products from './products.json'
import cart from './cart.json'



export const getproduct = () => {
return fetch('http://localhost:3002/products')
  .then((response)=>{
    console.log("resolved",response);
    return response.json();
  })
  ;
  //return products;
};

export const fetchBucket = () => {
//api call to fetch products in bucket
return fetch('http://localhost:3002/basket')
.then((response)=>{
  console.log("resolved",response);
  return response.json();
})
;
//return cart;

};

export const submit_details = (userName,firstName,lastName,password) => {
console.log("in api",userName,firstName,lastName,password)
  fetch('http://localhost:3002/signup',{
  method:"post",
  headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body:JSON.stringify({
    userName:userName,
    firstName:firstName,
    lastName:lastName,
    password:password
  })
    
    }  );

};

export const submit_credentials = (userName,password) => {
  console.log("in submit credentials",userName,password);
  return(fetch('http://localhost:3002/login',{
  method:"post",
  headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body:JSON.stringify({
    userName:userName,
    password:password
  })
    
    }).then((response)=>response.json())
    .then(responseJson=>{if(responseJson.status=="LOGIN SUCCESS"){
      console.log(responseJson.status);   
        }
    ;}))
  };

export const addProductToBucket = (result) => {
  console.log("result",result[0].id);

//api call to post product to bucket

fetch("http://10.9.4.83:3002/basket", {
  method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  //make sure to serialize your JSON body
  body: JSON.stringify({
    id: result[0].id,
    productName: result[0].productName,
    prize: result[0].prize,
    image: result[0].image
  })
})
.then( (response) => { 
   //do something awesome that makes the world a better place
});



};

export const deleteFromBucket = (result) => {
  //api call to delete product

  return fetch('http://localhost:3002/basket' , {
    method: 'delete',
    body: JSON.stringify({id:result}),
     headers: 
    {
        "Content-Type": "application/json"
    }
  });
  //console.log("result",result);

};

