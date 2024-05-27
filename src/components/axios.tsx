// components/Axios.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading with Axios...</p>;
  if (error) return <p>Axios encountered an error: {error.message}</p>;

  return (
    <div>
      <h1>Axios Fetch</h1>
      {data && <img src={data.url} alt="placeholder" />}
    </div>
  );
};

export default AxiosComponent;
