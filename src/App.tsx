import React, { useState, useEffect } from 'react';
import './App.css';
import SWR from './components/SWR';
import ReactQuery from './components/ReactQuery';
import AxiosComponent from './components/axios';
import UseFetchComponent from './components/UseFetchComponent';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const useImageURL = () => {
  const [imgURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos', { mode: 'cors' })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('Error!!');
        }
        return response.json();
      })
      .then((response) => setImageURL(response[0].url))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { imgURL, error, loading };
};

function App() {
  const { imgURL, error, loading } = useImageURL();

  if (loading) return <p>Page loading, please wait!!!</p>;
  if (error) return <p>A network error was encountered!!!</p>;

  return (
    <QueryClientProvider client={queryClient}>
      <>
        {imgURL && (
          <>
            <h1>An image FETCH</h1>
            <img src={imgURL} alt={'placeholder Text'} />
          </>
        )}
        <SWR />
        <ReactQuery />
        <AxiosComponent />
        <UseFetchComponent />
      </>
    </QueryClientProvider>
  );
}

export default App;
