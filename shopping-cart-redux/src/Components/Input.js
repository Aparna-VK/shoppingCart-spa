import React from "react";

export default ({type,name,placeholder,id}) => {
    return(
        <input type={type} name={name} placeholder={placeholder}  id={id} />
    );
}

