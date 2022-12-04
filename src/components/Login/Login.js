import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './Login.css'
const Login = () => {
    // -------location set-----------
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    // -------------------------

    const { signInUser } = useContext(AuthContext)

    // ----------private route------------
    const navigate = useNavigate()
    // ----------------------------

    const loginHandler = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        // signInWithEmail
        signInUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className='login-container'>
            <h2 className='login'>Login</h2>
            <form onSubmit={loginHandler} className="form-container">
                <div className='form'>
                    <label className='form-label' htmlFor="">Email</label>
                    <input className='form-input' type="email" name="email" id="email" required />
                </div>
                <div className='form-password'>
                    <label className='form-label' htmlFor="">Password</label>
                    <input className='form-input' type="password" name="password" id="password" required />
                </div>
                <button className='form-input-btn'>Login</button>
                <p><span>New to Ema-john? <Link to='/sign-up'>Create New Account</Link></span></p>

                < hr className='line' />
                <button className='continue-google'>Continue with Google</button>
            </form>
        </div>
    );
};

export default Login;