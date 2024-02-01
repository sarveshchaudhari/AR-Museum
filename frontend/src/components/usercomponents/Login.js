import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../Config/Base_Url';
import { AuthenticationContext } from '../globalstates/Authentication';
import { Alertcontext } from '../globalstates/Alertmessage';
import '../CSS/Register_Login.css'; // Ensure the CSS file is updated as shown below
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing icons from react-icons

export default function Login() {
    const [submitted, issubmitted] = useState(false);
    const [data, setData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState({ msg: '', cls: '' });
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const { setAuthenticate } = useContext(AuthenticationContext);
    const { alertmessage, setalertmessage } = useContext(Alertcontext);

    const handleLogin = (e) => {
        e.preventDefault();
        issubmitted(true);
    };

    const handleChange = (evt) => {
        const { id, value } = evt.target;
        setData({ ...data, [id]: value });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        if (submitted) {
            const senddata = async () => {
                try {
                    if (!data.email.endsWith("@gmail.com")) {
                        setMessage({ msg: "Enter a valid Gmail address!", cls: 'alert-danger' });
                    } else if (data.password.length < 8) {
                        setMessage({ msg: "Password must be at least 8 characters long.", cls: 'alert-danger' });
                    } else {
                        const response = await axios.post(`${BASE_URL}login`, {
                            email: data.email.trim(),
                            password: data.password.trim()
                        });

                        if (response.data.message === "Success") {
                            setAuthenticate({ status: true });
                            setalertmessage({ loginsuccess: true });
                            navigate("/home");
                        } else {
                            setMessage({ msg: "Invalid email or password.", cls: 'alert-danger' });
                        }
                    }
                } catch (error) {
                    setMessage({ msg: "An error occurred. Please try again later.", cls: 'alert-danger' });
                }
            };
            senddata();
            issubmitted(false);
        }
    }, [submitted, data, setAuthenticate, navigate]);

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
                            <input
                                type="email"
                                id="email"
                                onChange={handleChange}
                                value={data.email}
                                required
                            />
                        </div>
                        <div className="input-group password-input-group">
                            <label htmlFor="password">Password</label>
                            <div className="password-wrapper">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    onChange={handleChange}
                                    value={data.password}
                                    required
                                />
                                <span
                                    className="password-icon"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>
                        <button type="submit" className="btn">Login</button>
                        <p>Don't have an account? <Link to="/signin">Register here</Link></p>
                    </form>
                    {message.msg && (
                        <div className={`error-message ${message.cls}`}>
                            <p>{message.msg}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
