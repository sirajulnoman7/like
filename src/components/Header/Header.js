import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/Logo.svg"
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='nav-link'>
                <Link to="/home">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/manage inventory">Manage Inventory</Link>
                <Link to="/order">Order</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;