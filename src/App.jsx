import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ServiceList } from "./components/ServiceList.jsx";
import { Form } from "./components/Form.jsx";
import { v4 as uuidv4 } from "uuid";
import { updateService as updateServiceLogic } from "./components/updateService";

function App() {
  const [services, setServices] = useState([
    { key: uuidv4(), name: "First Aid", description: "Any injuries are treated", price: 100 },
  ]);

  const addService = (service) => {
    setServices((prev) => [...prev, service]);
  };

  const updateService = (updatedService) => {
    setServices((prev) => updateServiceLogic(prev, updatedService));
  };

  const deleteService = (key) => {
    setServices((prev) => prev.filter((service) => service.key !== key));
  };

  return (
    <Routes>
      <Route path="/" element={<ServiceList services={services} deleteService={deleteService} />} />
      <Route path="/form" element={<Form addService={addService} />} />
      <Route path="/form/:key" element={<Form services={services} updateService={updateService} />} />
    </Routes>
  );
}

export default App;
