import { useState } from "react";
import { Navigate } from 'react-router-dom';
import Style from './Login.module.css';
const axios= require("axios");


export const Login = () => {

    const [data, setData] = useState({
        name:"",
        email: "",
        password : "",
        mobile :""
    })

    const tempUser = {
        email : "",
        password : ""
    }
    const [ user, setUser ] = useState(tempUser);

    function userHandler(e) {

        const { name, value } = e.target;
        setUser({ ...user,[name] : value})

    }

    async function loginUser() {

        if(localStorage.getItem('user'))
             return 
        const Url = 'https://reqres.in'
        const arg  = {
            method : "POST",
            body : JSON.stringify(user),
            headers : { "content-type" : "application/json"}
        }

        const a = await fetch(Url+`/api/register`, arg)
        const b = await a.json()

        if(b.error)
        return alert("Credential are wrong.")
        localStorage.setItem('user', JSON.stringify({...user, token : b.token}))
        alert("You are successfully logged in!")

         window.location.href = "http://localhost:3000/"
        
    }

    function logOut() {

        if(!localStorage.getItem('user'))
                return 
            localStorage.clear('user')

            alert('Logout success !')

            window.location.reload()

    }

    const handlechange = (e) => {
        let {id, value} = e.target;
        setData({...data, [id] : value})
    }
    
    const handlesubmit = (e) => {
        axios.post('http://localhost:8080/register', data).then(res => {
            setData({
                name:"",
                email: "",
                password : "",
                mobile :""
            })
        })
    }

    return (
        <>
            <div className={Style.container}>
                <div>
                    <form onSubmit={handlesubmit}>
                        <label>Name</label>
                        <input type = "text" id = "name" value={data.name} style={{padding : "4px 12px"}} onChange={handlechange} placeholder="Enter Your Email..." /><br></br> <br></br> 

                        <label>Email</label>
                        <input type = "text" id = "email" value={data.email} style={{padding : "4px 12px"}} onChange={handlechange} placeholder="Enter Your Email..." /><br></br> <br></br> 

                        <label>Password</label>
                        <input type = "text" id = "password" value={data.password} style={{padding : "4px 12px"}} onChange={handlechange} placeholder="Enter Your Password..." /><br></br><br></br>  

                        <label>Mobile</label>
                        <input type = "number" id = "mobile" value={data.mobile} style={{padding : "4px 12px"}} onChange={handlechange} placeholder="Enter Your mobile..."/><br></br> <br></br> 

                        <input type = "submit" value="submit" />
                    </form>
                </div>
                <div>
                <label>Email</label>
                <input name = "email" onChange={userHandler} style={{padding : "4px 12px"}} type="text" placeholder="Enter Your Email..." />
                <br /><br></br> 

                <label>Password</label>
                <input name="password" onChange={userHandler} style={{padding : "4px 12px"}} type="text" placeholder="Enter Your Password..."/>
                <br /><br /><br></br> 

                <button onClick={loginUser} >Login</button>
                <button onClick={logOut} style={{ marginLeft : " 10px"}}>LogOut</button>
                </div>
            </div>
        </>
    )

    


}