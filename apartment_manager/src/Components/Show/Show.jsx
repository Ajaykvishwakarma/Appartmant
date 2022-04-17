import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {useDispatch,  useSelector} from "react-redux"
// import {addTodo} from "../Redux/action";
import { Navigate } from "react-router-dom"
// import "./Todo.css";
const axios = require("axios");
export const Show = () => {

    return (
        <>
        { localStorage.getItem('user')?"":<Navigate to='/login'></Navigate>}
        <h1>Hiii</h1>
        </>
    )

    // const [text, setText] = useState("");



    // const todos = useSelector((store) => store.todo) || [];

    // // const store = useSelector((store) => store);  

    // // const todos = useSelector((store) => ({count: store.count, todo: store.todos}));
  
    //          const dispatch = useDispatch();

    //          useEffect(() => {
    //             getTodos()
    //         },[])
     
    //         const getTodos = () => {
    //             axios.get("http://localhost:8080/todos").then(({ data }) => {
    //                 // dispatch(addTodo(data));
    //             })
    //         }

    //         const addTodos = () => {
    //             axios.post("http://localhost:8080/todos", {
    //                 title:text,
    //                 status:false,
    //             }).then(() => getTodos())
        
    //         }
    //         const handleDelete = (id) => {
    //             axios.delete(`http://localhost:8080/todos/${id}`).then(getTodos())
    //         }
        
    
    //     return (
    //         <div>
    //             { localStorage.getItem('user')?"":<Navigate to='/login'></Navigate>}
    //             <div className="inputDiv">
    //             <input type="text" onChange={(e) => setText(e.target.value)} />
                
    //             <button onClick={() => {
    //                 // dispatch(addTodo(text))
    //                addTodos()
    //             }}> Add Todos </button>
    //             </div>
    // {/* 
    // {todos.map((e, i) => (
    //                <div key={i}> {e.title}{" "} 
    //                <button onClick={() => handleDelete(e.id)}> Delete </button>
    //                <span> <Link to={`/todos/${e.id}`}>more</Link></span>
    //                </div>
    //            ))} */}
    //               <table  >
    //                     <thead>
    //                         <tr>
                              
    //                             <th>Todo Name </th>
    //                             <th> Remove </th>
    //                             <th>More</th>
    //                         </tr>
    //                     </thead>
    
    //                     <tbody>
    //                     {todos.map((e, i) => {
                               
    //                             return (
    //                                 <tr>
                                        
    //                                     <td key={i}>{e.title}</td>
    //                                     <td key={i}><button onClick={() => handleDelete(e.id)}> Delete </button></td>
    //                                     <td><span> <Link to={`/todos/${e.id}`}>more</Link></span></td>
    //                                 </tr>
    
    //                             )
    //                         })}
    //                      </tbody>
    //                 </table>
    
    //             </div>
                
        
    // );
}

// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import {useDispatch,  useSelector} from "react-redux"
// import {addTodo} from "../Redux/action";
// import { Navigate } from "react-router-dom"
// import "./Todo.css";
// const axios = require("axios");

// // import { store } from "../Redux/store";
// export const Todo = () => {

//     const [text, setText] = useState("");



//     const todos = useSelector((store) => store.todo) || [];

//     // const store = useSelector((store) => store);  

//     // const todos = useSelector((store) => ({count: store.count, todo: store.todos}));
  
//              const dispatch = useDispatch();

//              useEffect(() => {
//                 getTodos()
//             },[])
     
//             const getTodos = () => {
//                 axios.get("http://localhost:8080/todos").then(({ data }) => {
//                     dispatch(addTodo(data));
//                 })
//             }

//             const addTodos = () => {
//                 axios.post("http://localhost:8080/todos", {
//                     title:text,
//                     status:false,
//                 }).then(() => getTodos())
        
//             }
//             const handleDelete = (id) => {
//                 axios.delete(`http://localhost:8080/todos/${id}`).then(getTodos())
//             }
        

//     return (
//         <div>
//             { localStorage.getItem('user')?"":<Navigate to='/login'></Navigate>}
//             <div className="inputDiv">
//             <input type="text" onChange={(e) => setText(e.target.value)} />
            
//             <button onClick={() => {
//                 // dispatch(addTodo(text))
//                addTodos()
//             }}> Add Todos </button>
//             </div>
// {/* 
// {todos.map((e, i) => (
//                <div key={i}> {e.title}{" "} 
//                <button onClick={() => handleDelete(e.id)}> Delete </button>
//                <span> <Link to={`/todos/${e.id}`}>more</Link></span>
//                </div>
//            ))} */}
//               <table  >
//                     <thead>
//                         <tr>
                          
//                             <th>Todo Name </th>
//                             <th> Remove </th>
//                             <th>More</th>
//                         </tr>
//                     </thead>

//                     <tbody>
//                     {todos.map((e, i) => {
                           
//                             return (
//                                 <tr>
                                    
//                                     <td key={i}>{e.title}</td>
//                                     <td key={i}><button onClick={() => handleDelete(e.id)}> Delete </button></td>
//                                     <td><span> <Link to={`/todos/${e.id}`}>more</Link></span></td>
//                                 </tr>

//                             )
//                         })}
//                      </tbody>
//                 </table>

//             </div>
            
//     )
// }

