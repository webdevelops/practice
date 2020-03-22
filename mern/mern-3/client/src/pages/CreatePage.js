import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';

export const CreatePage = () => {
  const auth = useContext(AuthContext);
  const { request } = useHttp();
  const [link, setLink] = useState('');

  const handleKeyPress = async event => {
    if (event.key === 'Enter') {
      try {
        const data = await request(
          '/api/link/generate',
          'POST',
          { from: link },
          { Authorization: `Bearer ${auth.token}` }
        );

      } catch (err) { }
    }
  };

  return (
    <div className="row">
      <div className="col s8 offset-s2" style={{ paddingTop: "2rem" }}>
        <div className="input-field">
          <input
            type="text"
            id="link"
            // placeholder="Enter link"
            value={link}
            onChange={e => setLink(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <label htmlFor="link">Enter link</label>
        </div>
      </div>
    </div>
  );
};