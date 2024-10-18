import { createContext, useState } from "react";

const AuthenticationContext = createContext();

const AuthenticationProvider = ({ children }) => {
    const [authenticate, setAuthenticate] = useState({ status: true });
    return (
        <AuthenticationContext.Provider value={{ authenticate, setAuthenticate }}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export { AuthenticationContext, AuthenticationProvider };