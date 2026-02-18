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
    const res = await axios.get("https://dummyjson.com/products"); 
    setProducts(res.data.products); 
  };

  const getComments = async () => {
    const res = await axios.get("https://dummyjson.com/comments");  
    setComments(res.data.comments); 
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>API Demo 1</h2>

      {/* Buttons */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={getUsers} style={{ marginRight: "10px" }}>
          Load Users
        </button>
        <button onClick={getProducts} style={{ marginRight: "10px" }}>
          Load Products
        </button>
        <button onClick={getComments}>
          Load Comments
        </button>
      </div>

      <p>{message}</p>

      <h3>Users</h3>
      <table border="1" style={{ margin: "auto", marginTop: "10px" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Full name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u._id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 style={{ marginTop: "40px" }}>Products</h3>
      <table border="1" style={{ margin: "auto", marginTop: "10px" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>{p.brand}</td>
              <td>{p.category}</td>
              <td>{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      
      <h3 style={{ marginTop: "40px" }}>Comments</h3>
      <table border="1" style={{ margin: "auto", marginTop: "10px" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Post Id</th>
            <th>User Name</th>
            <th>Full Name</th>
            <th>Likes</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.postId}</td>
              <td>{c.user?.username}</td>
              <td>{c.user?.fullName}</td>
              <td>{c.likes}</td>
              <td>{c.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
