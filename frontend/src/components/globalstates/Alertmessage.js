import { useState, createContext } from "react";

const Alertcontext = createContext();

const Alertprovider = ({ children }) => {
    const [alertmessage, setalertmessage] = useState({ loginsuccess: false, loginfailure: false, signinsuccess: false, signinfailure: false, bookingsuccess: false, bookingfailure: false });
    return (
        <Alertcontext.Provider value={{ alertmessage, setalertmessage }}>
            {children}
        </Alertcontext.Provider>
    );
};

export { Alertcontext, Alertprovider };