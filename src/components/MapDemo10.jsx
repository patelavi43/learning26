import React from "react";

export const MapDemo10 = () => {
  const countries = [
    {
      id: 1,
      name: "India",
      population: 140,
      capital: "Delhi",
      continent: "Asia",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyoyuI-heqTzZT0F-zbalVtHJ9vKhegwy8QA&s",
    },
    {
      id: 2,
      name: "USA",
      population: 33,
      capital: "Washington",
      continent: "America",
      img: "",
    },
    {
      id: 3,
      name: "Japan",
      population: 12,
      capital: "Tokyo",
      continent: "Asia",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNaqSE7ttjkOJzDDk1Vn-XsnlPI3RK5j1v2A&s",
    },
    {
      id: 4,
      name: "UK",
      population: 6,
      capital: "London",
      continent: "Europe",
      img: "",
    },
    {
      id: 5,
      name: "France",
      population: 6.5,
      capital: "Paris",
      continent: "Europe",
      img: "",
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">MAP DEMO 10</h2>

      <table className="table table-bordered table-striped table-hover text-center">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>POPULATION (Cr)</th>
            <th>CAPITAL</th>
            <th>CONTINENT</th>
            <th>FLAG</th>
          </tr>
        </thead>

        <tbody>
          {countries.map((c) => (
            <tr
              key={c.id}
              className={c.continent === "Asia" ? "table-warning" : ""}
            >
              <td>{c.id}</td>

              <td className={c.population > 50 ? "font-weight-bold" : ""}>
                {c.name}
              </td>

              <td className={c.population > 100 ? "text-danger" : ""}>
                {c.population}
              </td>

              <td>{c.capital}</td>

              <td className={c.continent === "Europe" ? "font-italic" : ""}>
                {c.continent}
              </td>

              <td>
                {c.img ? (
                  <img
                    src={c.img}
                    alt={c.name}
                    className="img-fluid rounded"
                    style={{ width: "60px", height: "40px" }}
                  />
                ) : (
                  <span className="text-muted">Image is missing</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};