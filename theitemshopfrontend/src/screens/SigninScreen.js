import './signin.css'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {signin } from '../actions/userActions';


function SigninScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const {loading, userInfo, error } = userSignin;
    const dispatch = useDispatch();
    const redirect = props.location.search?props.location.search.split("=")[1]:'/';

    useEffect(() => {
        if (userInfo){
            props.history.push(redirect)
        }
        return () => {

        }
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password))

    }
    return <div className="signInTop">
    <div className="signInform">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Sign-In</h2>
                </li>
                <li>
                    {loading && <div>loading..</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </li>
                <li>
                    <button type="submit" className="button primarys">Sign In</button>
                </li>
                <li>
                    <h4>
                    New to the Item Shop?!
                    </h4>
                    </li>
                <li>
                <Link to={redirect === "/" ? "register" : "register?redirect=" + redirect} className="button primarys" >Create Account</Link>
                </li>
            </ul>
        </form>
    </div>
    </div>

}

export default SigninScreen;