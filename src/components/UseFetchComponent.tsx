// components/UseFetchComponent.tsx
import React, { useState, useEffect } from 'react';

const UseFetchComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos', { mode: 'cors' })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('Network error');
        }
        return response.json();
      })
      .then((data) => {
        setData(data[0]);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading with custom useFetch...</p>;
  if (error) return <p>Custom useFetch encountered an error: {error.message}</p>;

  return (
    <div>
      <h1>useFetch Hook</h1>
      {data && <img src={data.url} alt="placeholder" />}
    </div>
  );
};

export default UseFetchComponent;
