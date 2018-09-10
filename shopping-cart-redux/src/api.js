
import products from './products.json'
import cart from './cart.json'



export const getproduct = () => {
return fetch('http://localhost:3000/products')
  .then((response)=>{
    console.log("resolved",response);
    return response.json();
  })
  ;
  //return products;
};

export const fetchBucket = () => {
//api call to fetch products in bucket
return fetch('http://localhost:3000/basket')
.then((response)=>{
  console.log("resolved",response);
  return response.json();
})
;
//return cart;

};

export const submit_details = (userName,firtName,lastName,password) => {
console.log("in api",userName,firtName,lastName,password)
  fetch('http://localhost:3000/deatails',{
  method:"post",
  headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body:JSON.stringify({
    userName:userName,
    firtName:firtName,
    lastName:lastName,
    password:password
  })
    
    }  );

};

export const submit_credentials = (userName,password) => {
  console.log("in submit credentials",userName,password);
  fetch('http://localhost:3000/details',{
  method:"post",
  headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body:JSON.stringify({
    userName:userName,
    password:password
  })
    
    }  );
  };

export const addProductToBucket = (result) => {
  console.log("result",result[0].id);

//api call to post product to bucket

fetch("http://10.9.4.83:3000/basket", {
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

  return fetch('http://localhost:3000/basket' , {
    method: 'delete',
    body: JSON.stringify({id:result}),
     headers: 
    {
        "Content-Type": "application/json"
    }
  });
  //console.log("result",result);

};

