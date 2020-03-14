import { useState } from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const request = async (
    url,
    method = 'GET',
    body = null,
    headers = { 'Content-Type': 'application/json' }
  ) => {
    setLoading(true);

    try {
      const response = await fetch(url, { method, body, headers });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong.');
      }

      setLoading(false);
      return data;

    } catch (err) {
      setLoading(false);
      setError(err.message);
      throw err;
    }
  };

  const clearError = () => setError(null);

  return { loading, error, request, clearError };
};