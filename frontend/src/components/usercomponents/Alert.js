import React, { useContext } from 'react';
import { Alertcontext } from '../globalstates/Alertmessage';

export default function Alert(props) {
    const { alertmessage, setalertmessage } = useContext(Alertcontext);

    if (!alertmessage.loginsuccess || !alertmessage.loginfailure || !alertmessage.signinsuccess || !alertmessage.signinfailure || !alertmessage.bookingsuccess || !alertmessage.bookingfailure) {
        setTimeout(() => {
            setalertmessage({ loginsuccess: false, loginfailure: false, signinsuccess: false, signinfailure: false, bookingsuccess: false, bookingfailure: false })
        }, 1500);
    };

    return (
        <div className={`alert ${props.message.cls}`} role="alert">
            {props.message.msg}
        </div>
    );
}
