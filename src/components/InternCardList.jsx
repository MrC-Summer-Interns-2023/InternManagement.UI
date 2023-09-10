import React, { useState, useEffect } from 'react';
import './InternCard.css';
import axios from 'axios';

function InternCardList() {
  const [internData, setInternData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/v1/user')
      .then((response) => {
        if (response.status === 200) {
          setInternData(response.data);
        } else {
          console.error('HTTP error in the GET request:', response.status);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error in the GET request:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="intern-card-list-container">
      {loading ? (
        <p>Loading...</p>
      ) : internData.length > 0 ? (
        internData.map((intern) => (
          <div className="intern-card" key={intern.userId}>
            <img src={intern.profileImage} alt={intern.name[0]+intern.name[1]} className="profile-image" />
            <h2>{intern.name}</h2>
            <p>Email: {intern.email}</p>
            <p>Department: {intern.department}</p>
            <p>Gender: {intern.gender}</p>
            <p>Phone: {intern.phone}</p>
            <p>Role: {intern.role}</p>
            <p>ID: {intern.internId}</p>
            <p>Address: {intern.address}</p>
          </div>
        ))
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
}

export default InternCardList;
