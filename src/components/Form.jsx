import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export const Form = ({ addService, updateService, services }) => {
  const { key } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (key) {
      const service = services.find((s) => s.key === key);
      if (service) {
        setName(service.name);
        setDescription(service.description);
        setPrice(service.price);
      }
    }
  }, [key, services]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !price) {
      alert("All fields are required.");
      return;
    }

    const serviceData = {
      key: key ? key : uuidv4(),
      name,
      description,
      price: parseFloat(price),
    };

    if (key) {
      updateService(serviceData);
    } else {
      addService(serviceData);
    }

    navigate("/"); // Redirect to the home page
  };

  return (
    <div className="container mt-4">
      <h2>{key ? "Update Service" : "Add New Service"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Description:</label>
          <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Price:</label>
          <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">{key ? "Update Service" : "Add Service"}</button>
      </form>
    </div>
  );
};
