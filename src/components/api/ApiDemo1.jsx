import axios from "axios";
import React, { useState } from "react";

export const ApiDemo1 = () => {
  const [message, setmessage] = useState("");
  const [users, setusers] = useState([]);
  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);

  const getUsers = async () => {
    const response = await axios.get("https://node5.onrender.com/user/user/");
    setmessage(response.data.message);
    setusers(response.data.data);
  };

  const getProducts = async () => {
    const res = await axios.get("https://dummyjson.com/products"); // returns { products: [...] } [web:2][web:4]
    setProducts(res.data.products);
  };

  const getComments = async () => {
    const res = await axios.get("https://dummyjson.com/comments"); // returns { comments: [...] } [web:7][web:9]
    setComments(res.data.comments);
  };

  // Reusable cell style
  const cellStyle = { border: "1px solid black", padding: "4px" };

  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <h2>API Demo 1</h2>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={getUsers} style={{ marginRight: "10px" }}>
          Load Users
        </button>
        <button onClick={getProducts} style={{ marginRight: "10px" }}>
          Load Products
        </button>
        <button onClick={getComments}>Load Comments</button>
      </div>

      <p>{message}</p>

      {/* Users table */}
      <h3>Users</h3>
      <table
        style={{
          width: "80%",
          marginTop: "10px auto",
          marginLeft: "10%",
          borderCollapse: "collapse",
          border: "1px solid black",
        }}
      >
        <thead>
          <tr>
            <th style={cellStyle}>Id</th>
            <th style={cellStyle}>Full name</th>
            <th style={cellStyle}>Email</th>
            <th style={cellStyle}>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td style={cellStyle}>{u._id}</td>
              <td style={cellStyle}>{u.name}</td>
              <td style={cellStyle}>{u.email}</td>
              <td style={cellStyle}>{u.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Products table */}
      <h3 style={{ marginTop: "40px" }}>Products</h3>
      <table
        style={{
          width: "80%",
          marginTop: "10px auto",
          marginLeft: "10%",
          borderCollapse: "collapse",
          border: "1px solid black",
        }}
      >
        <thead>
          <tr>
            <th style={cellStyle}>Id</th>
            <th style={cellStyle}>Title</th>
            <th style={cellStyle}>Brand</th>
            <th style={cellStyle}>Category</th>
            <th style={cellStyle}>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td style={cellStyle}>{p.id}</td>
              <td style={cellStyle}>{p.title}</td>
              <td style={cellStyle}>{p.brand}</td>
              <td style={cellStyle}>{p.category}</td>
              <td style={cellStyle}>{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Comments table */}
      <h3 style={{ marginTop: "40px" }}>Comments</h3>
      <table
        style={{
          width: "80%",
          marginTop: "10px auto",
          marginLeft: "10%",
          borderCollapse: "collapse",
          border: "1px solid black",
        }}
      >
        <thead>
          <tr>
            <th style={cellStyle}>Id</th>
            <th style={cellStyle}>Post Id</th>
            <th style={cellStyle}>User Name</th>
            <th style={cellStyle}>Full Name</th>
            <th style={cellStyle}>Likes</th>
            <th style={cellStyle}>Body</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((c) => (
            <tr key={c.id}>
              <td style={cellStyle}>{c.id}</td>
              <td style={cellStyle}>{c.postId}</td>
              <td style={cellStyle}>{c.user?.username}</td>
              <td style={cellStyle}>{c.user?.fullName}</td>
              <td style={cellStyle}>{c.likes}</td>
              <td style={cellStyle}>{c.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
