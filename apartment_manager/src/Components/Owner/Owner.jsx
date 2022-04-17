import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {useDispatch,  useSelector} from "react-redux"
// import {addTodo} from "../Redux/action";
import { Navigate } from "react-router-dom"
// import "./Todo.css";
const axios = require("axios");
export const Owner = () => {
    const [ fetchD, setFetchD] = useState({})
    const [data, setData] = useState({
        type:"",
        block:"",
        no: "",

    });
   
    useEffect(() => {
        getData()
    }, [])

    
  

    const getData = () => {
        axios.get("http://localhost:8080/owner").then((res) => {
            setFetchD(res.data)
        })
    }

    var country = fetchD.country;


  

    const todos = useSelector((store) => store.todo) || [];

    const dispatch = useDispatch();

    const handleChange = (e) => {
        let {id, value} = e.target;
        setData({...data, [id] : value})
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/owner", data).then(() => {
            setData({
                type:"",
                block:"",
                no: "",
            })
        }) 
    }
    
    return (
        <>
        <div>
        {localStorage.getItem('user')?"":<Navigate to='/login'></Navigate>}
            <form onSubmit={handlesubmit}>
                <lable>Type</lable>
                <input type = "text" id ="type" value={data.type} onChange={handleChange} /><br></br><br></br><br></br>

                <lable>Block</lable>
                <input type = "text" id ="block" value={data.block} onChange={handleChange} /><br></br><br></br><br></br>

                <lable>No.</lable>
                <input type = "number" id ="no" value={data.no} onChange={handleChange} /><br></br><br></br><br></br>

                <input type = "submit" value = "submit" />
            </form>
        </div>
        </>
    )
}