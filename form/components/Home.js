import React,{useState} from 'react'
import { Link, Navigate } from 'react-router-dom';
const Home = () => {
    const[data,setData] = useState({
        fullname:"",
        address:"",
        phoneno:"",
        email:"",
        show:false,
        logout:false
    });
    const dataHandler =(e)=>{
       setData ({...data,[e.target.name]:(e.target.value)});
       
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        setData({...data,show:true})
    }
    const logoutHandler = () =>{
        setData({logout:true})
    }
  return (
    <div style={{textAlign:"center"}}>
        <h2 style={{backgroundColor:"cornflowerblue",color:"white"}}>Welcome to home page</h2>
        <button onClick={logoutHandler} style={{marginLeft:"1200px"}}>Logout</button>
        <h3>Personal Details</h3>
        <hr />
        {!data.show && <form onSubmit={submitHandler}>
        <label>FullName:-</label>
        <input type="text" name='fullname' value={data.fullname} onChange={dataHandler} required/>
        <br />
        <br />
        <label>Address:-</label>
        <input type="text" name='address' value={data.address} onChange={dataHandler} required/>
        <br />
        <br />
        <label>PhoneNo:- </label>
        <input type="text" name='phoneno' value={data.phoneno} onChange={dataHandler} required/>
        <br />
        <br />
        <label>Email:- </label>
        <input type="text" name='email' value={data.email} onChange={dataHandler} required/>
        <br />
        <br />
        <input type="submit" value="Add Data"/>
        </form>}
        {data.show && <table style={{marginLeft:"450px"}}>
            <thead>
                <tr>
                <td>FullName</td>
                <td>Address</td>
                <td>PhoneNo</td>
                <td>Email</td>
                <td>Edit</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{data.fullname}</td>
                <td>{data.address}</td>
                <td>{data.phoneno}</td>
                <td>{data.email}</td>
                <td><Link to="/home" onClick={()=>setData({...data,show:false})}>Edit</Link></td>
                </tr>
            </tbody>
        </table>}
        {data.logout && <Navigate to="/logout"/>}
    </div>
  )
}

export default Home;