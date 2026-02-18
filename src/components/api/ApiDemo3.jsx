// src/components/api/ApiDemo3.jsx
import axios from "axios";
import React, { useState } from "react";

export const ApiDemo3 = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    isActive: false,   // boolean in state
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,  // checkbox → true/false [web:71]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // payload sent to API – isActive is boolean
    const payload = {
      name: form.name,
      email: form.email,
      age: Number(form.age),
      isActive: form.isActive,   // true / false
      password: form.password,
    };

    try {
      const res = await axios.post(
        "https://node5.onrender.com/user/user/",
        payload
      ); // axios sends JS object as JSON (booleans stay booleans) [web:64][web:66]
      console.log(res.data);
      alert("User created successfully");
    } catch (err) {
      console.error(err);
      alert("Error creating user");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>API DEMO 3 FORM</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "inline-block",
          textAlign: "left",
          marginTop: "10px",
        }}
      >
        <div style={{ marginBottom: "8px" }}>
          <label>
            Name:{" "}
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div style={{ marginBottom: "8px" }}>
          <label>
            Email:{" "}
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div style={{ marginBottom: "8px" }}>
          <label>
            Age:{" "}
            <input
              type="number"
              name="age"
              value={form.age}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div style={{ marginBottom: "8px" }}>
          <label>
            Is Active:{" "}
            <input
              type="checkbox"
              name="isActive"
              checked={form.isActive}      // binds to boolean
              onChange={handleChange}
            />
          </label>
        </div>

        <div style={{ marginBottom: "8px" }}>
          <label>
            Password:{" "}
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
