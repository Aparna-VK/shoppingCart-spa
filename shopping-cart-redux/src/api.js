import products from './products.json'


export const getproduct = () => {
  //api call to get products
  return products;
};

export const fetchBucket = () => {

//api call to get products in bucket
const cartNew = [{
    "id": 1,
    "productName": "lenovo",
    "prize": "1000",
    "image": "jpenddreth0@census.gov"
  
  }, {
    "id": 2,
    "productName": "nokia",
    "prize": "67878",
    "image": "jpenddreth0@census.gov"
  
  }]
  
  return cartNew;

};


export const addProductToBucket = () => {

  //api call to post product to bucket
};