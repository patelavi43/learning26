import React from "react";
import { Link } from "react-router-dom";

export const Teams = () => {
  const teams = [
    "csk",
    "mi",
    "gt",
    "rcb",
    "kkr",
    "rr",
    "srh",
    "dc",
    "lsg",
    "pbks",
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h2>IPL Teams</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {teams.map((team, index) => (
          <li key={index} style={{ margin: "10px" }}>
            <Link to={`/teamdetail/${team}`} style={{ textDecoration: "none" }}>
              {team.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

