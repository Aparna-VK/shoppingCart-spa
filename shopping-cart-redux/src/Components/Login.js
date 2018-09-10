import React from "react";
import Button from "./Button";
import Input from "./Input"

export const Login = ({submitCredentials}) => {
    console.log("in login");
    submitCredentials();
return(
<React.Fragment>
    <Input id={"userName"} name={"userName"} placeholder={"userName"} /><br/><br/><br/>
    <Input id={"password"} name={"password"} placeholder={"password"} /><br/><br/><br/>
    <Button message={"login"} onClick={()=>{
        var userName=document.getElementById("userName").value;
        var password=document.getElementById("password").value;
        console.log(userName,password);
        submitCredentials(userName,password)}}/>
</React.Fragment>
);
}