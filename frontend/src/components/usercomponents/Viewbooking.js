import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../baseurl/Base_Url';

export default function Viewbooking() {
  const [info, setInfo] = useState([]);
  const [available, setAvailable] = useState(false);
  let i = 0;

  useEffect(() => {
    if (i === 0) {
      const handleApiCall = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/viewbooking`);
          if (response.data.message !== "Failed") {
            setAvailable(true);
            setInfo(response.data);
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; 
  };

  return (
    <div>
      {available ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sr.No.</th>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            {info.map((element, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{element.name}</td>
                  <td>{formatDate(element.date)}</td> 
                  <td>{element.time || 'N/A'}</td> 
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className='my-3' style={{ margin: "0 auto", textAlign: "center" }}>
          <h3>No Data Found</h3>
        </div>
      )}
    </div>
  );
}
