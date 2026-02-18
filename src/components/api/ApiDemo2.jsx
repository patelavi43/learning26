import axios from "axios";
import React from "react";

export const ApiDemo2 = () => {
  const addUser = async () => {
    const userObj = {
      name: "amit",
      age: 23,
      email: "amit1@gmail.com",
      password: "amit123",
      isActive: true,
    };

    try {
      const res = await axios.post(
        "https://node5.onrender.com/user/user/",
        userObj
      ); // POST JSON body [web:41][web:44]
      console.log(res.data);
      alert("User added successfully");
    } catch (err) {
      console.log(err);
      alert("error while adding user");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>API DEMO 2</h1>
      <button onClick={addUser}>ADD</button>
    </div>
  );
};
