import React from "react";

export const MapDemo9 = () => {
  const movies = [
    { id: 1, name: "KGF", rating: 4.8, year: 2022, type: "Action", img: "" },
    { id: 2, name: "3 Idiots", rating: 4.9, year: 2009, type: "Drama", img: "" },
    { id: 3, name: "RRR", rating: 4.6, year: 2021, type: "Action", img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/RRR_Poster.jpg/250px-RRR_Poster.jpg" },
    { id: 4, name: "PK", rating: 4.2, year: 2014, type: "Comedy", img: "" },
    { id: 5, name: "Dangal", rating: 4.7, year: 2016, type: "Sports", img: "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_.jpg" },
  ];

  return (
    <div align="center">
      <h1>MAP DEMO 9</h1>

      <table border="2">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>RATING</th>
            <th>YEAR</th>
            <th>TYPE</th>
            <th>POSTER</th>
          </tr>
        </thead>

        <tbody>
          {movies.map((m) => (
            <tr
              key={m.id}
              style={{ backgroundColor: m.rating > 4.7 ? "#e6ffe6" : "white" }}
            >
              <td>{m.id}</td>
              <td style={{ fontWeight: m.year < 2015 ? "bold" : "normal" }}>
                {m.name}
              </td>
              <td style={{ color: m.rating > 4.5 ? "green" : "black" }}>
                {m.rating}
              </td>
              <td>{m.year}</td>
              <td style={{ fontStyle: m.type === "Action" ? "italic" : "normal" }}>
                {m.type}
              </td>
              <td>
                {m.img ? (
                  <img src={m.img} width="60" height="60" />
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