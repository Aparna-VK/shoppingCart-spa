import React from "react";
export default ({id,productName,prize,image,children}) => (
  <li>
      <div>
      <a href={"http://localhost:3000/product/id="+id}>{productName}</a><br/>
      <img src={image} alt={"img"+id} height="42" width="42"/><br/>
      ${prize}<br/>
      {children}
      <hr/>
      </div>
  </li>
);
