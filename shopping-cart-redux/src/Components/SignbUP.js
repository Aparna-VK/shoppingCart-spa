import React from "react";
import Button from "./Button";
import Input from "./Input";
export const SignUP=({submitDetails})=>{
    // submitDetails();

    return(
        <React.Fragment>
                    <br/>
                    <Button message={"login"} onClick={()=>{window.open("http://localhost:3000/login")}}/>
                    Enter Your User Name<br/>
                    <Input type={"input"} name={"userName"} placeholder={"userName"} id={"userName"}/><br/>
                    Enter Your First Name<br/>
                    <Input type={"Input"} name={"firstName"} placeholder={"firstName"} id={"firstName"}/><br/>
                    Enter Your Last Name<br/>
                    <Input type={"Input"} name={"firstName"} placeholder={"firstName"} id={"lastName"}/><br/>
                    Enter Your password <br/>
                    <Input type={"password"} name={"password"} placeholder={"password"} id={"password"}/>
                    <br/><br/><br/><br/><br/><br/>                   
                    <Button type= "submit" onClick={()=>{
                        var userName=document.getElementById("userName").value;
                        var firstName=document.getElementById("firstName").value;
                        var lastName=document.getElementById("lastName").value;
                        var password=document.getElementById("password").value;
                        submitDetails(userName,firstName,lastName,password)}} message={"REGISTER"}/>
        </React.Fragment>

    );
}