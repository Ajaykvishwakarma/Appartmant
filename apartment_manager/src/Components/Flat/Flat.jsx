import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {useDispatch,  useSelector} from "react-redux"
// import {addTodo} from "../Redux/action";
import { Navigate } from "react-router-dom"
// import "./Todo.css";
const axios = require("axios");
export const Flat = () => {
    const [ fetchD, setFetchD] = useState({})
    const [data, setData] = useState({
        name:"",
        gender:"",
        age: "",

    });
   
    useEffect(() => {
        getData()
    }, [])

    
  

    const getData = () => {
        axios.get("http://localhost:8080/flat").then((res) => {
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
        axios.post("http://localhost:8080/flat", data).then(() => {
            setData({
                name:"",
                gender:"",
                age: "",
            })
        }) 
    }
    
    return (
        <>
        <div>
        { localStorage.getItem('user')?"":<Navigate to='/login'></Navigate>}
            <form onSubmit={handlesubmit}>
                <lable>name</lable>
                <input type = "text" id ="name" value={data.name} onChange={handleChange} /><br></br><br></br><br></br>

                <lable>Gender</lable>
                <input type = "text" id ="gender" value={data.gender} onChange={handleChange} /><br></br><br></br><br></br>

                <lable>Age</lable>
                <input type = "number" id ="age" value={data.age} onChange={handleChange} /><br></br><br></br><br></br>

                <input type = "submit" value = "submit" />
            </form>
        </div>
        </>
    )
}