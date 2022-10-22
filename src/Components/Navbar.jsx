import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/Geekslogo.png';
import  '../Styles/Navbar.css'

 
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light " style={{backgroundColor:"#e3f2fd"}}>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <img src={logo} style={{height:60,width:90,padding:10}} alt={"logo"}></img>
                </li>
                <li className="nav-item navitem2">
                    <Link className="nav-link" to="function">Functional</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="class">Class</Link>
                </li>

            </ul>
        </nav>
    )
}