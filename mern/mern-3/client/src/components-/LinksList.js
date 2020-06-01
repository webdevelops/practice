import React from 'react';
import { Link } from 'react-router-dom';

export const LinksList = ({ links }) => {
  if (!links.length) {
    return <h5 className="center">No links yet.</h5>
  }

  return (
    <table className="links-list striped">
      <thead>
        <tr>
          <th>№</th>
          <th>Origin</th>
          <th>Shorten</th>
          <th>Open</th>
        </tr>
      </thead>

      <tbody>
        {links.map((link, index) => (
          <tr key={link._id}>
            <td>{index + 1}</td>
            <td>{link.from}</td>
            <td>{link.to}</td>
            <td>
              <Link to={`/detail/${link._id}`}>Open</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};