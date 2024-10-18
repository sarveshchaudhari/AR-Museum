import React, { useEffect, useState,useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../baseurl/Base_Url';
import { AuthenticationContext } from '../globalstates/Authentication';
import { Alertcontext } from '../globalstates/Alertmessage';
import Alert from './Alert';
import '../Css/Register_Login.css'

export default function Login() {
    const [submitted, issubmitted] = useState(false);
    const [data, newData] = useState(
        {
            email: '',
            password: ''
        }
    );
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
                    if (data.email.slice(-10,) !== "@gmail.com") {
                        navigate("/");
                        setalertmessage({ loginfailure: true });
                        setMessage({ msg: "Enter Valid Credentials !!", cls: 'alert-danger' });
                        console.log("Enter valid email id !!");
                    } else if (data.password.length < 8 || !/\d/.test(data.password) || !/[a-z]/.test(data.password) || !/[A-Z]/.test(data.password) || !/[\W_]/.test(data.password)) {
                        navigate("/");
                        setalertmessage({ loginfailure: true });
                        setMessage({ msg: "Enter Valid Credentials !!", cls: 'alert-danger' });
                        console.log("Enter a valid password !!");
                    } else {
                        const response = await axios.post(`${BASE_URL}login`, { email: data.email.trim(), password: data.password.trim() });
                        if (response.data.message === "Success") {
                            setAuthenticate({ status: true });
                            setalertmessage({ loginsuccess: true });
                            navigate("/home");
                            console.log("Loggedin Successfully");
                        } else {
                            navigate("/");
                            setalertmessage({ loginfailure: true });
                            setMessage({ msg: "Enter Valid Credentials !!", cls: 'alert-danger' });
                            console.log("Login Failed");
                        }
                    }
                } catch (error) {
                    console.log("error occured");
                }
            }
            senddata();
            issubmitted(false);
        }
    }, [submitted, data, navigate, setalertmessage, setMessage, setAuthenticate]);

    return (
        <div>
            {(alertmessage.loginfailure) && <Alert message={message} />}
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
                </div>
            </div>
        </div>
    )
}
