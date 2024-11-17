import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../Config/Base_Url';

export default function Viewbooking() {
  const [info, setInfo] = useState([]);
  const [available, setAvailable] = useState(false);
  const [isArAvailable, setIsArAvailable] = useState(false);
  const [arLink, setArLink] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState('');
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  let i = 0;

  useEffect(() => {
    if (i === 0) {
      const handleApiCall = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/viewbooking`);
          if (response.data.message !== 'Failed') {
            setAvailable(true);
            setInfo(response.data);
            checkArAvailability(response.data);
          } else {
            setAvailable(false);
          }
        } catch (error) {
          console.log(error);
        }
      };
      handleApiCall();
      i++;
    }
  }, [i, setInfo, setAvailable]);

  const checkArAvailability = (bookings) => {
    const currentTime = new Date();
    bookings.forEach((booking) => {
      const bookingTime = new Date(`${booking.date}T${booking.time}`);
      const timeDifference = Math.abs(currentTime - bookingTime);
      const oneHour = 60 * 60 * 1000;

      if (timeDifference === 0 || timeDifference < oneHour) {
        setIsArAvailable(true);
        setArLink('https://p5l78.webar.run/334640235424248655/1.1.17/'); // Update this to the actual AR experience link
      }
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  const handleViewClick = (name) => {
    setModalText(`Details for ${name}`);
    setShowModal(true);
    setTimeLeft(600); // Reset the timer to 10 minutes
  };

  // Timer logic
  useEffect(() => {
    if (showModal) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setShowModal(false); // Automatically close modal
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer); // Cleanup on unmount
    }
  }, [showModal]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div>
      {available ? (
        <div>
          <table className="table" style={{ color: 'white' }}>
            <thead>
              <tr>
                <th scope="col">Sr.No.</th>
                <th scope="col">Name</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">View</th>
              </tr>
            </thead>
            <tbody>
              {info.map((element, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{element.name}</td>
                  <td>{formatDate(element.date)}</td>
                  <td>{element.time || 'N/A'}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => handleViewClick(element.name)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isArAvailable && (
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button
                className="btn btn-primary"
                style={{ backgroundColor: 'blue', color: 'white' }}
                onClick={() => setShowModal(true)}
              >
                View AR
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="my-3" style={{ margin: '0 auto', textAlign: 'center' }}>
          <h3>No Data Found</h3>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="modal" style={modalStyles}>
          <div className="modal-content" style={squareModalStyles}>
            <span
              className="close"
              style={closeButtonStyle}
              onClick={() => setShowModal(false)}
            >
              &times;
            </span>
            {/* Display QR Code */}
            <div style={{ textAlign: 'center' }}>
              <img
                src={require('../../assets/images/QR.jpg')} // Adjust path to your assets folder
                alt="QR Code"
                style={{ width: '200px', height: '200px' }}
              />
              {/* Countdown Timer */}
              <p style={{ marginTop: '10px', color: 'gray' }}>
                Closing in {formatTime(timeLeft)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Modal styles
const modalStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const squareModalStyles = {
  width: '300px',
  height: '300px',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  textAlign: 'center',
  padding: '20px',
  position: 'relative',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '20px',
  fontSize: '30px',
  cursor: 'pointer',
};
