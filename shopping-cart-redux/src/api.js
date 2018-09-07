
export const getproduct = () => {
return fetch('http://localhost:3000/products')
  .then((response)=>{
    console.log("resolved",response);
    return response.json();
  })
  ;
};

export const fetchBucket = () => {
//api call to fetch products in bucket
return fetch('http://localhost:3000/basket')
.then((response)=>{
  console.log("resolved",response);
  return response.json();
})
;

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

  body: JSON.stringify({
    id: result[0].id,
    productName: result[0].productName,
    prize: result[0].prize,
    image: result[0].image
  })
})
.then( (response) => { 
   //do something awesome that makes the world a better place
   console.log("successfully added")
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

};

