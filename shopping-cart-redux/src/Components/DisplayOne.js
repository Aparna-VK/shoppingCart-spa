import React from "react";
const displayOne = ({id,productName,prize,children}) =>{
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

export default displayOne;
