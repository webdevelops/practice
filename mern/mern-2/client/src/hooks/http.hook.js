import { useState, useCallback } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const request = useCallback(async (
    url,
    method = 'GET',
    body = null,
    headers = {}
  ) => {  // try without useCall..
    setLoading(true);

    try {
      if (body) {
        body = JSON.stringify(body);
      }

      const response = await fetch(url, { method, body, headers });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setLoading(false);
      return data;

    } catch (err) {
      setLoading(false);
      setErrors(err.message);
      // setErrors(err.errors[0].msg);
      throw err;
    }
  }, []);

  const clearError = useCallback(() => setErrors(null), []);

  return { loading, request, errors, clearError };
};