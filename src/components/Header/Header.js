import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import logo from "../../images/Logo.svg"
import './Header.css'
const Header = () => {
    const { user, userLogOut } = useContext(AuthContext)
    console.log(userLogOut)
    // const logOutHandler = () => {
    //     logOut()
    //         .then(result => {
    //             alert('Successfully Log Out')
    //         })
    // }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='nav-link'>
                <Link to="/home">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/order">Order</Link>
                {user?.uid ?

                    <button className='btn-logout' onClick={userLogOut} >Sign Out</button>
                    :
                    <>
                        <Link to='/sign-up'>Sign Up</Link>
                        <Link to="/login">Login</Link>
                    </>
                }



            </div>
        </nav>
    );
};

export default Header;