import React from "react";
import IMG_DEF from '../assets/img/lu.jpg';


const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? IMG_DEF : movie.Poster;
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <p>({movie.Year})</p>
    </div>
  );
};


export default Movie;