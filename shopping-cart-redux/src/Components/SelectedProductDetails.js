import React from "react";
const SelectedProductDetails = ({productName,prize,children}) =>{
  return(
        <li>
        {productName}<br/>
        ${prize}<br/>
        material<br/>
        some details
        {children}
        </li>
      );
}

export default SelectedProductDetails;
