import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../Config/Base_Url';
import { AuthenticationContext } from '../globalstates/Authentication';
import { Alertcontext } from '../globalstates/Alertmessage';
import '../CSS/Register_Login.css';

export default function Login() {
    const [submitted, issubmitted] = useState(false);
    const [data, newData] = useState({
        email: '',
        password: ''
    });
    const [message, setMessage] = useState({ msg: '', cls: '' });

    const navigate = useNavigate();
    const { alertmessage, setalertmessage } = useContext(Alertcontext);
    const { setAuthenticate } = useContext(AuthenticationContext);

    const handleLogin = (e) => {
        e.preventDefault();
        issubmitted(true);
    };

    const handleChange = (evt) => {
        const { id, value } = evt.target;
        newData({
            ...data,
            [id]: value
        });
    };

    useEffect(() => {
        if (submitted) {
            const senddata = async () => {
                try {
                    if (data.email.slice(-10) !== "@gmail.com") {
                        setalertmessage({ loginfailure: true });
                        setMessage({ msg: "Enter Valid Credentials !!", cls: 'alert-danger' });
                    } else if (data.password.length < 8 || !/\d/.test(data.password) || !/[a-z]/.test(data.password) || !/[A-Z]/.test(data.password) || !/[\W_]/.test(data.password)) {
                        setalertmessage({ loginfailure: true });
                        setMessage({ msg: "Enter Valid Credentials !!", cls: 'alert-danger' });
                    } else {
                        const response = await axios.post(`${BASE_URL}login`, { email: data.email.trim(), password: data.password.trim() });
                        if (response.data.message === "Success") {
                            setAuthenticate({ status: true });
                            setalertmessage({ loginsuccess: true });
                            navigate("/home");
                        } else {
                            setalertmessage({ loginfailure: true });
                            setMessage({ msg: "Invalid email or password. Please try again.", cls: 'alert-danger' });
                        }
                    }
                } catch (error) {
                    setalertmessage({ loginfailure: true });
                    setMessage({ msg: "An error occurred. Please try again later.", cls: 'alert-danger' });
                }
            };
            senddata();
            issubmitted(false);
        }
    }, [submitted, data, navigate, setalertmessage, setMessage, setAuthenticate]);

    return (
        <div className="login-wrapper">
            <div className="banner">
                <h1>AR Museum Tour</h1>
            </div>
            <div className="container">
                <div className="form-box">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" onChange={handleChange} value={data.email} required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" onChange={handleChange} value={data.password} required />
                        </div>
                        <button type="submit" className="btn">Login</button>
                        <p>Don't have an account? <Link to="/signin">Register here</Link></p>
                    </form>
                    {alertmessage.loginfailure && (
                        <div className="error-message">
                            <p>{message.msg}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
