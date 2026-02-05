import React from "react";

import aviImg from "../assets/image/avi.jpeg";
import krupaliImg from "../assets/image/krupali.jpeg";

export const MapDemo7 = () => {
  const employees = [
    { id: 1, name: "Swar", salary: 40000, dept: "IT", exp: 2, img: "" },
    { id: 2, name: "Avi", salary: 70000, dept: "HR", exp: 5, img: aviImg },
    { id: 3, name: "Bhavy", salary: 50000, dept: "IT", exp: 3, img: "" },
    { id: 4, name: "Krupali", salary: 90000, dept: "Finance", exp: 7, img: krupaliImg },
    { id: 5, name: "Shubh", salary: 30000, dept: "Sales", exp: 1, img: "" },
  ];

  return (
    <div align="center">
      <h1>MAP DEMO 7</h1>
      <table border="2">
        <thead>
          <tr>
            <th>ID</th><th>NAME</th><th>SALARY</th><th>DEPT</th><th>EXP</th><th>PHOTO</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(e => (
            <tr key={e.id} style={{ backgroundColor: e.exp > 5 && "#d1ffd1" }}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td style={{ color: e.salary > 60000 ? "red" : "black" }}>{e.salary}</td>
              <td style={{ fontStyle: e.dept === "IT" && "italic" }}>{e.dept}</td>
              <td style={{ backgroundColor: e.exp < 2 && "orange" }}>{e.exp}</td>
              <td>
                {e.img ? (
                  <img
                    src={e.img}
                    alt={e.name}
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