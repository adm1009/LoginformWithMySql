import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Axios from "axios";
import Auth from "./Auth";
const Login = () => {
    const[username,setUsername] = useState("");
    const[password,setPassword] =useState("");
    const[verify,setVerify] = useState(false);
    const[loginStatus,setLoginStatus] =useState("");
    const submitHandler = () =>{
        Axios.post("http://localhost:3003/login", {
            username: username,
            password: password,
          }).then((response) => {
            if(response.data.message){
              setLoginStatus(response.data.message);
            }else
            {
                setVerify(true);
                Auth.authenticate();
            }
          });
    }
  return (
    <div style={{textAlign:"center"}}>
        {!verify && <form onSubmit={submitHandler}>
        <h2 style={{backgroundColor:"cornflowerblue",color:"white"}}>Welcome to Login Page</h2>
        <label>Username:- </label> 
        <input type="text" name='username' value={username} onChange={(e)=>{setUsername(e.target.value)}} required/>
        <br />
        <label>Password:- </label>
        <input type="password" name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
        <br />
        <br />
        <input type="submit" value="Submit"/>
        </form>
        }
        {!verify && <h5>{loginStatus}</h5> }
        {verify && <Navigate to="/home"/>}
    </div>
  )
}

export default Login;