import { Route, Routes } from "react-router-dom";
import {Flat } from '../Flat/Flat';
import { Navbar } from '../Navbar/Navbar';
import { Show } from '../Show/Show';
import { Owner } from "../Owner/Owner";
import { Login } from "../Login/Login"
export const Routes1 = () => {

    return (

        <>
        
        <Navbar />
        <Routes>
         <Route path="/" element={<Show/>}/>
         <Route path="/flat" element={<Flat/>}/>
         <Route path="/owner" element={<Owner/>}/>
         <Route path="/login" element={<Login/>}/>
        </Routes>
        </>

    )
}