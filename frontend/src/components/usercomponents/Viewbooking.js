import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../Config/Base_Url';
import QRCode from 'react-qr-code'; // Import a QR code component for generating QR codes

export default function Viewbooking() {
  const [info, setInfo] = useState([]);
  const [available, setAvailable] = useState(false);
  const [isArAvailable, setIsArAvailable] = useState(false);
  const [arLink, setArLink] = useState('');
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  let i = 0;

  useEffect(() => {
    if (i === 0) {
      const handleApiCall = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/viewbooking`);
          if (response.data.message !== "Failed") {
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

  const imgstyle = { color: "white" };

  return (
    <div>
      {available ? (
        <div>
          <table className="table" style={imgstyle}>
            <thead>
              <tr>
                <th scope="col">Sr.No.</th>
                <th scope="col">Name</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
            <tbody>
              {info.map((element, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{element.name}</td>
                  <td>{formatDate(element.date)}</td>
                  <td>{element.time || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {isArAvailable && (
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button
                className="btn btn-primary" 
                style={{ backgroundColor: 'blue', color: 'white' }} // Button color
                onClick={() => setShowModal(true)} // Show modal on click
              >
                View
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className='my-3' style={{ margin: "0 auto", textAlign: "center" }}>
          <h3>No Data Found</h3>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="modal" style={modalStyles}>
          <div className="modal-content">
            <span
              className="close"
              style={closeButtonStyle}
              onClick={() => setShowModal(false)} // Close modal
            >
              &times;
            </span>
            <h2>QR Code and AR Link</h2>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <QRCode value={arLink} size={256} /> {/* Display the QR code */}
            </div>
            <p>Link: <a href={arLink} target="_blank" rel="noopener noreferrer">{arLink}</a></p>
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
  zIndex: 1000
};

const closeButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '20px',
  fontSize: '30px',
  cursor: 'pointer'
};
