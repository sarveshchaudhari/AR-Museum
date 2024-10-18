import React, { useEffect, useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../baseurl/Base_Url';
import axios from 'axios';
import { Alertcontext } from '../globalstates/Alertmessage';
import Alert from './Alert';
import { AuthenticationContext } from '../globalstates/Authentication';

export default function Signin() {
    const navigate = useNavigate();
    const [data, newData] = useState(
        {
            name: '',
            email: '',
            password: ''
        }
    );
    const [submitted, issubmitted] = useState(false);
    const [message, setMessage] = useState({ msg: '', cls: '' });

    const { alertmessage, setalertmessage } = useContext(Alertcontext);
    const { setAuthenticate } = useContext(AuthenticationContext);

    const handleChange = (evt) => {
        const { id, value } = evt.target;
        newData({
            ...data,
            [id]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        issubmitted(true);
    };

    useEffect(() => {
        if (submitted) {
            const senddata = async () => {
                try {
                    if (data.email.slice(-10,) !== "@gmail.com") {
                        navigate("/signin");
                        setalertmessage({ signinfailure: true });
                        setMessage({ msg: 'Enter valid email id !!', cls: 'alert-danger' });
                        console.log("Enter valid email id !!");
                    } else if (data.password.length < 8 || !/\d/.test(data.password) || !/[a-z]/.test(data.password) || !/[A-Z]/.test(data.password) || !/[\W_]/.test(data.password)) {
                        navigate("/signin");
                        setalertmessage({ signinfailure: true });
                        setMessage({ msg: 'Enter a valid password !!', cls: 'alert-danger' });
                        console.log("Enter a valid password !!");
                    } else {
                        const response = await axios.post(`${BASE_URL}signin`, { name: data.name.trim(), email: data.email.trim(), password: data.password.trim() });
                        if (response.data.message === "Success") {
                            setAuthenticate({ status: true });
                            navigate("/home");
                            setalertmessage({ signinsuccess: true });
                            console.log("Signedin Successfully");
                        } else {
                            navigate("/signin");
                            setalertmessage({ signinfailure: true });
                            setMessage({ msg: 'Failed To Signin !!', cls: 'alert-danger' });
                            console.log("Signin Failed");
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
            {alertmessage.signinfailure && <Alert message={message} />}
            <div className="container">
                <div className="form-box">
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" name="name" onChange={handleChange} value={data.name} required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" onChange={handleChange} value={data.email} required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" onChange={handleChange} value={data.password} required />
                        </div>
                        <button type="submit" className="btn">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
