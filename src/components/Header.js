import React from "react";
import { NavLink } from "react-router-dom";
import './header.css'
const Header = () => (
    <div>
        <p style={{color:'black' , fontSize:'50px',fontWeight:'900'}}>EXPENSE</p>
        <NavLink to='/' className={({isActive})=>(isActive ? "active-link":"")} >Dashboard</NavLink>
        <NavLink to='/add' className={({isActive})=>(isActive ? "active-link":"")}>Add</NavLink>
        <NavLink to='/edit' className={({isActive})=>(isActive ? "active-link":"")}>Edit</NavLink>
        <NavLink to='/help' className={({isActive})=>(isActive ? "active-link":"")}>Help</NavLink>
    </div>
)



export default Header ; 