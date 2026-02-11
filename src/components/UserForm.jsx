// src/components/UserForm.jsx
import React, { useState } from "react";

export const UserForm = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Form submitted. Check console for data.");
  };

  return (
    <form className="container mt-4" onSubmit={handleSubmit}>
      <h2 className="mb-3 text-center">User Form (10 Inputs)</h2>

      <input
        className="form-control mb-2"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        className="form-control mb-2"
        name="age"
        value={form.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <input
        className="form-control mb-2"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        className="form-control mb-2"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <input
        className="form-control mb-2"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Phone"
      />
      <input
        className="form-control mb-2"
        name="address"
        value={form.address}
        onChange={handleChange}
        placeholder="Address"
      />
      <input
        className="form-control mb-2"
        name="city"
        value={form.city}
        onChange={handleChange}
        placeholder="City"
      />
      <input
        className="form-control mb-2"
        name="state"
        value={form.state}
        onChange={handleChange}
        placeholder="State"
      />
      <input
        className="form-control mb-2"
        name="country"
        value={form.country}
        onChange={handleChange}
        placeholder="Country"
      />
      <input
        className="form-control mb-2"
        name="pincode"
        value={form.pincode}
        onChange={handleChange}
        placeholder="Pincode"
      />

      <button type="submit" className="btn btn-primary mt-2">
        Submit
      </button>
    </form>
  );
};
