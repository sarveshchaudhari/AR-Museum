import React, { useState, useContext } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { Alertcontext } from '../globalstates/Alertmessage';
import Alert from './Alert';
import { BASE_URL } from '../baseurl/Base_Url';

export default function Schedulebooking() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [message, setMessage] = useState({ msg: '', cls: '' });

    const { alertmessage, setalertmessage } = useContext(Alertcontext);

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    const handleSubmit = async () => {
        if (!date || !time) {
            setalertmessage({ bookingfailure: true });
            setMessage({ msg: 'Please select both date and time !!', cls: 'alert-danger' });
            return;
        }

        try {
            const response = await axios.post(`${BASE_URL}book`, {
                date: format(new Date(date), 'yyyy-MM-dd'),
                time,
            });
            if (response.data.message === "Success") {
                setalertmessage({ bookingsuccess: true });
                setMessage({ msg: 'Appointment booked successfully !!', cls: 'alert-success' });
            } else {
                setalertmessage({ bookingfailure: true });
                setMessage({ msg: 'Failed to book !!', cls: 'alert-danger' });
            }
        } catch (error) {
            console.log(error);
            setalertmessage({ bookingfailure: true });
            setMessage({ msg: 'An error occurred. Please try again.', cls: 'alert-danger' });
        }
    };

    const timeSlots = [
        '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
    ];

    return (
        <div>{(alertmessage.bookingsuccess || alertmessage.bookingfailure) && <Alert message={message} />}
                <div style={{ width: '100vw', minHeight: '100vh', paddingTop: '20px', display: 'flex', maxWidth: '600px', padding: '20px',justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: '#fff' }}>
                        <div style={{ padding: '30px' }}>
                            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Book an Appointment</h2>
                            <div style={{ marginBottom: '20px' }}>
                                <label htmlFor="date" style={{ display: 'block', marginBottom: '10px' }}>Date:</label>
                                <input
                                    type="date"
                                    id="date"
                                    value={date}
                                    onChange={handleDateChange}
                                    style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ced4da' }}
                                />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label htmlFor="time" style={{ display: 'block', marginBottom: '10px' }}>Time:</label>
                                <select
                                    id="time"
                                    value={time}
                                    onChange={handleTimeChange}
                                    style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ced4da' }}
                                >
                                    <option value="">Select time</option>
                                    {timeSlots.map((slot) => (
                                        <option key={slot} value={slot}>{slot}</option>
                                    ))}
                                </select>
                            </div>
                            <button
                                onClick={handleSubmit}
                                style={{ width: '100%', padding: '12px', backgroundColor: '#007bff', color: '#fff', borderRadius: '4px', border: 'none', fontWeight: 'bold' }}>
                                Book Appointment
                            </button>
                        </div>
                    </div>
                </div>
            
        </div>
    );
}
