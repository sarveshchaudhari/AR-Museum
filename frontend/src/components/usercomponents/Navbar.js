import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthenticationContext } from '../globalstates/Authentication';
import Alert from './Alert';
import { Alertcontext } from '../globalstates/Alertmessage';

export default function Navbar() {
    const { setAuthenticate } = useContext(AuthenticationContext);
    const { alertmessage } = useContext(Alertcontext);
    const [message, setMessage] = useState({ msg: '', cls: '' });
    useEffect(() => {
        if (alertmessage.loginsuccess) {
            setMessage({ msg: 'LoggedIn Successfully !!', cls: 'alert-success' });
        };
        if (alertmessage.signinsuccess) {
            setMessage({ msg: 'SignedIn Successfully !!', cls: 'alert-success' });
        };
    }, [setMessage, alertmessage]);

    return (
        <div>
            <div style={{ paddingBottom: "190px" }}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
                    <div className="container-fluid">
                        <span className="navbar-brand">Web-AR Experience</span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/book">Schedule Booking</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/viewbooking">View Bookings</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/" onClick={() => { setAuthenticate({ status: false }) }}>Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            {(alertmessage.loginsuccess || alertmessage.signinsuccess) && <Alert message={message} />}
        </div>
    )
}
