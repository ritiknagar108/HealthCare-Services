import React from 'react';
import { Navbar } from "./Navbar.jsx";
import { Link } from 'react-router-dom';

export const ServiceList = ({ services, deleteService }) => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        
        <Link to="/form" className="btn btn-primary mb-3">Add New Service</Link>
        <ul className="list-group">
          {services.map((e) => (
            <li key={e.key} className='list-group-item'>
              <h5>{e.name}</h5>
              <p>{e.description}</p>
              <h6>Price: ${e.price}</h6>
              <button className="btn btn-danger me-2" onClick={() => deleteService(e.key)}>Delete</button>
              <Link to={`/form/${e.key}`}>
                <button className="btn btn-warning">Edit</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
