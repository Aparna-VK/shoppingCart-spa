import products from './products.json'
import cart from './cart.json'


export const getproduct = () => {

 //api call to get products

  fetch('http:/localhost:3000/products')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });



//  return products;
};

export const fetchBucket = () => {
//api call to get products in bucket

fetch('http:/localhost:3000/basket')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  console.log(JSON.stringify(myJson));
});

//  return cart;

};


export const addProductToBucket = (result) => {
//api call to post product to bucket

  fetch("http:/localhost:3000/basket",
{
    method: "POST",
    // whatever data you want to post with a key-value pair
    body: result,
    headers: 
    {
        "Content-Type": "application/json"
    }

}).then((response) => 
{ 
    console.log(response);
});



//  console.log("in api",result);

};

export const deleteFromBucket = (result) => {
  //api call to delete product

  return fetch('http:/localhost:3000/basket' , {
    method: 'delete',
    body: 'id:'+result,
     headers: 
    {
        "Content-Type": "application/json"
    }
  })
  .then(response => response.json());

  

  //console.log("result",result);

};

