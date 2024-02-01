import { createContext, useState, useEffect } from "react";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
    const [authenticate, setAuthenticate] = useState(() => {
        // Retrieve authentication state from localStorage
        const savedStatus = localStorage.getItem("authenticate");
        return savedStatus ? JSON.parse(savedStatus) : { status: false };
    });

    useEffect(() => {
        // Persist authentication state in localStorage
        localStorage.setItem("authenticate", JSON.stringify(authenticate));
    }, [authenticate]);

    return (
        <AuthenticationContext.Provider value={{ authenticate, setAuthenticate }}>
            {children}
        </AuthenticationContext.Provider>
    );
};
