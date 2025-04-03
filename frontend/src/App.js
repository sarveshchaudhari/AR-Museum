import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthenticationProvider } from "./components/globalstates/Authentication";
import { Alertprovider } from "./components/globalstates/Alertmessage";
import Navbar from "./components/usercomponents/Navbar";
import Footer from "./components/usercomponents/Footer";
import Login from "./components/usercomponents/Login";
import Signin from "./components/usercomponents/Signin";
import Home from "./components/usercomponents/Home";
import About from "./components/usercomponents/About";
import Schedulebooking from "./components/usercomponents/Schedulebooking";
import Viewbooking from "./components/usercomponents/Viewbooking";
import NearbyMuseums from "./components/usercomponents/NearbyMuseums";
import Protectedroutes from "./components/usercomponents/Protectedroutes";

function App() {
  return (
    <AuthenticationProvider>
      <Alertprovider>
        <BrowserRouter>
          <Routes>
            {/* Protected routes */}
            <Route element={<Protectedroutes />}>
              <Route
                path="/home"
                element={
                  <>
                    <Navbar />
                    <Home />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/about"
                element={
                  <>
                    <Navbar />
                    <About />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/book"
                element={
                  <>
                    <Navbar />
                    <Schedulebooking />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/viewbooking"
                element={
                  <>
                    <Navbar />
                    <Viewbooking />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/nearby-museums"
                element={
                  <>
                    <Navbar />
                    <NearbyMuseums />
                    <Footer />
                  </>
                }
              />
            </Route>

            {/* Public routes */}
            <Route path="/" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </BrowserRouter>
      </Alertprovider>
    </AuthenticationProvider>
  );
}

export default App;
