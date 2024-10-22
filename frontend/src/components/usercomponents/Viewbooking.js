import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../baseurl/Base_Url';
import {Link} from 'react-router-dom'

export default function Viewbooking() {
  const [info, setInfo] = useState([]);
  const [available, setAvailable] = useState(false);
  const [isArAvailable, setIsArAvailable] = useState(false);
  const [arLink, setArLink] = useState('');
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

      if (timeDifference === 0 ||  timeDifference<oneHour) {
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
              <Link to={arLink} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primary">Access AR Experience</button>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className='my-3' style={{ margin: "0 auto", textAlign: "center" }}>
          <h3>No Data Found</h3>
        </div>
      )}
    </div>
  );
}
