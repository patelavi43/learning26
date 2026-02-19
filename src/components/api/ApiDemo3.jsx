import axios from "axios";
import React, { useState } from "react";

export const ApiDemo3 = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    isActive: "true",   
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: form.name,
      email: form.email,
      age: Number(form.age),
      // convert string to real boolean
      isActive: form.isActive === "true", 
      password: form.password,
    };

    try {
      const res = await axios.post(
        "https://node5.onrender.com/user/user/",
        payload
      ); 
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

        {/* isActive with radio buttons */}
        <div style={{ marginBottom: "8px" }}>
          <span>Is Active: </span>

          <label style={{ marginRight: "10px" }}>
            <input
              type="radio"
              name="isActive"
              value="true"
              checked={form.isActive === "true"}
              onChange={handleChange}
            />
            {" "}True
          </label>

          <label>
            <input
              type="radio"
              name="isActive"
              value="false"
              checked={form.isActive === "false"}
              onChange={handleChange}
            />
            {" "}False
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
