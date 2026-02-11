// src/components/UserForm.jsx
import React from "react";

export const UserForm = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">User Form </h2>

      <input className="form-control mb-2" placeholder="Name" />
      <input className="form-control mb-2" placeholder="Age" />
      <input className="form-control mb-2" placeholder="Email" />
      <input className="form-control mb-2" placeholder="Password" />
      <input className="form-control mb-2" placeholder="Phone" />
      <input className="form-control mb-2" placeholder="Address" />
      <input className="form-control mb-2" placeholder="City" />
      <input className="form-control mb-2" placeholder="State" />
      <input className="form-control mb-2" placeholder="Country" />
      <input className="form-control mb-2" placeholder="Pincode" />
    </div>
  );
};
