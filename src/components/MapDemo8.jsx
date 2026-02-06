import React from "react";

// ✅ import images from src/assets/image
import aviImg from "../assets/image/avi.jpeg";
import krupaliImg from "../assets/image/avi.jpeg";

export const MapDemo8 = () => {
  const students = [
    { id: 1, name: "Avi", marks: 95, city: "Ahmedabad", grade: "A+", img: aviImg },
    { id: 2, name: "Swar", marks: 75, city: "Surat", grade: "B+", img: "" },
    { id: 3, name: "Shubh", marks: 82, city: "Rajkot", grade: "A", img: "" },
    { id: 4, name: "Sahil", marks: 35, city: "Baroda", grade: "F", img: "" },
    { id: 5, name: "Krupali", marks: 66, city: "Bhavnagar", grade: "B", img: krupaliImg },
  ];

  return (
    <div align="center">
      <h1>MAP DEMO 8</h1>

      <table border="2" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>MARKS</th>
            <th>GRADE</th>
            <th>CITY</th>
            <th>PHOTO</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr
              key={s.id}
              style={{ backgroundColor: s.marks < 40 ? "#ffcccc" : "white" }}
            >
              <td>{s.id}</td>

              <td style={{ fontWeight: s.grade === "A+" ? "bold" : "normal" }}>
                {s.name}
              </td>

              <td style={{ color: s.marks >= 75 ? "green" : "black" }}>
                {s.marks}
              </td>

              <td
                style={{
                  backgroundColor: s.grade === "F" ? "red" : "white",
                  color: s.grade === "F" ? "white" : "black",
                }}
              >
                {s.grade}
              </td>

              <td>{s.city}</td>

              <td>
                {s.img ? (
                  <img
                    src={s.img}
                    alt={s.name}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                ) : (
                  "Image is missing"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};