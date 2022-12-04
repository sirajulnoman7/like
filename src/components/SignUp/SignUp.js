import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const [confirmPassword, setConfirmPassword] = useState()
    const formSubmitHandler = (even) => {
        setConfirmPassword('')
        even.preventDefault();
        const form = even.target
        const email = form.email.value;
        const password = form.password.value
        const confirm = form.confirm.value
        if (password.length < 6) {
            setConfirmPassword('password should be 6 character ')
            return;
        }
        if (password !== confirm) {
            setConfirmPassword('your password is did not match')
            return;
        }
        // console.log(email, password, confirm)

        //    createUserWithEmailAndPassword
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className='sign-up-container'>
            <h2 className='login'>Sign Up</h2>
            <form onSubmit={formSubmitHandler} className="form-container">

                <div className='form-control'>
                    <label className='form-label' htmlFor="email">Email</label>
                    <input className='form-input' type="email" name="email" id="" required />
                </div>

                <div className='form-control'>
                    <div className='form-password'>
                        <label className='form-label' htmlFor="password">Password</label>
                        <input className='form-input' type="password" name="password" id="password" required />
                    </div>
                </div>

                <div className='form-control form-password'>
                    <label className='form-label' htmlFor="confirm">Confirm Password</label>
                    <input className='form-input' type="password" name="confirm" id="confirm" required />
                </div>
                <button className='form-input-btn'>Sign Up</button>
                <h5>{confirmPassword}</h5>
                <p><span>Already have an account? <Link to='/login'>Login?</Link></span></p>

                < hr className='line' />
                <button className='continue-google'>Continue with Google</button>
            </form>

        </div>
    );
};

export default SignUp;