import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const OmdbSearch = () => {
  const [movies, setmovies] = useState([]);
  const [searchParam, setsearchParam] = useState("Iron Man");
  const navigate = useNavigate();

  const searchMovie = async () => {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=9d57be0b&s=${searchParam}`
    ); // s=search by title [web:33]
    setmovies(res.data.Search || []);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>OMDB SEARCH</h1>

      <input
        type="text"
        value={searchParam}
        onChange={(e) => setsearchParam(e.target.value)}
        placeholder="Enter movie name"
        style={{ marginRight: "10px" }}
      />
      <button onClick={searchMovie}>SEARCH</button>

      <table
        className="table"
        style={{
          marginTop: "20px",
          margin: "0 auto",
          borderCollapse: "collapse",
        }}
        border="1"
      >
        <thead>
          <tr>
            <th>IMDB ID</th>
            <th>TITLE</th>
            <th>YEAR</th>
            <th>POSTER</th>
            <th>DETAIL</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.imdbID}>
              <td>{movie.imdbID}</td>
              <td>{movie.Title}</td>
              <td>{movie.Year}</td>
              <td>
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  style={{ height: "100px", width: "80px" }}
                />
              </td>
              <td>
                <button onClick={() => navigate(`/movie/${movie.imdbID}`)}>
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
