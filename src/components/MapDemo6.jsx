import React from "react";

export const MapDemo6 = () => {
  const products = [
    { id: 1, name: "Laptop", price: 60000, stock: 5, rating: 4.5, img: "https://m.media-amazon.com/images/I/71YeigfZCuL._AC_UF1000,1000_QL80_.jpg" },
    { id: 2, name: "Mobile", price: 25000, stock: 0, rating: 4.1, img: "" },
    { id: 3, name: "Tablet", price: 30000, stock: 3, rating: 3.8, img: "https://m.media-amazon.com/images/I/81HiAVuZXyL._AC_UF1000,1000_QL80_.jpg" },
    { id: 4, name: "Watch", price: 12000, stock: 10, rating: 4.9, img: "" },
    { id: 5, name: "Headphone", price: 8000, stock: 2, rating: 3.5, img: "https://rukminim2.flixcart.com/image/480/640/krp94sw0/headphone/x/i/9/rog-delta-s-asus-original-imag5fjuxjarskgz.jpeg?q=90" },
  ];

  return (
    <div align="center">
      <h1>MAP DEMO 6</h1>
      <table border="2">
        <thead>
          <tr>
            <th>ID</th><th>NAME</th><th>PRICE</th><th>STOCK</th><th>RATING</th><th>IMAGE</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr style={{ backgroundColor: p.stock === 0 && "#ffcccc" }}>
              <td>{p.id}</td>
              <td style={{ fontWeight: p.rating > 4.5 && "bold" }}>{p.name}</td>
              <td style={{ color: p.price > 30000 ? "red" : "green" }}>{p.price}</td>
              <td style={{ color: p.stock === 0 ? "red" : "black" }}>{p.stock}</td>
              <td style={{ backgroundColor: p.rating > 4 ? "yellow" : "white" }}>{p.rating}</td>
              <td>
  {p.img ? (
    <img
      src={p.img}
      alt={p.name}
      style={{ width: "60px", height: "60px", objectFit: "cover" }}
    />
  ) : (
    <span>Image is missing</span>
  )}
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};