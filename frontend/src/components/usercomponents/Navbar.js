import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthenticationContext } from "../globalstates/Authentication";
import Alert from "./Alert";
import { Alertcontext } from "../globalstates/Alertmessage";
import iconImage from "../../assets/images/image.png"; // Import the main icon
import logoutIcon from "../../assets/images/logout.png"; // Import the logout icon
import searchIcon from "../../assets/images/search.png"; // Import search icon for nearby museums

export default function Navbar() {
  const { setAuthenticate } = useContext(AuthenticationContext);
  const { alertmessage } = useContext(Alertcontext);
  const [message, setMessage] = useState({ msg: "", cls: "" });

  useEffect(() => {
    if (alertmessage.loginsuccess) {
      setMessage({ msg: "LoggedIn Successfully !!", cls: "alert-success" });
    }
    if (alertmessage.signinsuccess) {
      setMessage({ msg: "SignedIn Successfully !!", cls: "alert-success" });
    }
  }, [setMessage, alertmessage]);

  return (
    <div>
      <div style={{ paddingBottom: "190px" }}>
        <nav
          className="navbar navbar-expand-lg fixed-top navbar-light"
          style={{
            backgroundColor: "rgba(33, 150, 243, 0.8)",
            backdropFilter: "blur(10px)",
            transition: "0.3s",
          }}
        >
          <div className="container-fluid">
            {/* Navbar Brand with Icon */}
            <span className="navbar-brand d-flex align-items-center">
              <img
                src={iconImage}
                alt="Icon"
                style={{ width: "30px", marginRight: "10px" }} // Adjust the size and spacing of the icon
              />
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                Web-AR Experience
              </span>
            </span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/home"
                    style={navLinkStyle}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/book" style={navLinkStyle}>
                    Schedule Booking
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/viewbooking"
                    style={navLinkStyle}
                  >
                    View Bookings
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/nearby-museums"
                    style={{
                      ...navLinkStyle,
                      display: "flex",
                      alignItems: "center",
                      background: "rgba(255, 255, 255, 0.2)",
                      borderRadius: "5px",
                      marginLeft: "10px",
                    }}
                  >
                    <img
                      src={
                        searchIcon ||
                        "https://img.icons8.com/material-outlined/24/ffffff/search--v1.png"
                      }
                      alt="Search"
                      style={{ width: "18px", marginRight: "5px" }}
                    />
                    Nearby Museums
                  </Link>
                </li>
                <li className="nav-item ms-3">
                  <Link className="nav-link" to="/about" style={navLinkStyle}>
                    About
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto">
                {" "}
                {/* Right-aligned Logout */}
                <li className="nav-item">
                  <Link
                    className="nav-link d-flex align-items-center"
                    to="/"
                    onClick={() => {
                      setAuthenticate({ status: false });
                    }}
                    style={navLinkStyle}
                  >
                    <img
                      src={logoutIcon}
                      alt="Logout Icon"
                      style={{ width: "24px", marginRight: "8px" }}
                    />
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {(alertmessage.loginsuccess || alertmessage.signinsuccess) && (
        <Alert message={message} />
      )}
    </div>
  );
}

const navLinkStyle = {
  color: "#fff", // White text
  fontSize: "1.1rem",
  padding: "10px 15px",
  transition: "color 0.3s, background-color 0.3s",
  textDecoration: "none",
  fontWeight: "500",
};
