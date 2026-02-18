import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export const MovieDetail = () => {
  const { imdbid } = useParams(); // /movie/:imdbid [web:46]
  const [movie, setMovie] = useState(null);

  const getMovieDetail = async () => {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=9d57be0b&i=${imdbid}`
    ); // i=imdbID [web:33]
    setMovie(res.data);
  };

  useEffect(() => {
    getMovieDetail();
  }, [imdbid]);

  if (!movie) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Movie Detail</h1>
      <h2>{movie.Title}</h2>
      <p>Year: {movie.Year}</p>
      <p>Genre: {movie.Genre}</p>
      <p>Director: {movie.Director}</p>
      <p>Actors: {movie.Actors}</p>
      <p>IMDB Rating: {movie.imdbRating}</p>
      <p>Plot: {movie.Plot}</p>
      <img
        src={movie.Poster}
        alt={movie.Title}
        style={{ height: "250px", width: "180px" }}
      />
      <div style={{ marginTop: "20px" }}>
        <Link to="/omdb">Back to search</Link>
      </div>
    </div>
  );
};
