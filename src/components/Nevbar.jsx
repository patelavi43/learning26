import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/netflixhome">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/netflixshow">
                Show
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/netflixmovies">
                Movies
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/netflixanime">
                Anime
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/netflixaction">
                Action
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/netflixhorror">
                Horror
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/teams">
                Teams
              </Link>
            </li>
             <li class="nav-item">
              <Link class="nav-link" to="/usestatedemo1">
                usestatedemo1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/usestatedemo2">
                usestatedemo2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/usestatedemo3">
                usestatedemo3
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/employees">
                employees
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};