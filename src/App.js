import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const Dashboard = () => {
  const [data, setData] = useState({});
  
  useEffect(() => {
    
    axios.get('../Data.json')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {data && data.intensity && data.intensity.length > 0 ? (
        <Bar
          data={{
            labels: data.year,
            datasets: [
              {
                label: 'Intensity',
                data: data.intensity,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
              },
            
            ],
          }}
          options={{
            maintainAspectRatio: false,
            scales: {
              x: { stacked: true },
              y: { stacked: true },
            },
          }}
        />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Dashboard;
