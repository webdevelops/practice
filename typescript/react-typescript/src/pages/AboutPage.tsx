import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <h1>Information page</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius velit aliquid nobis nostrum dolores iure voluptatum aperiam magnam qui pariatur.</p>

      <button className="btn" onClick={() => history.push('/')}>Back to the task list.</button>
    </>
  );
}