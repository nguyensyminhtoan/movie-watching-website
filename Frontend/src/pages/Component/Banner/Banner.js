import "./Banner.css";
import React from "react";
const Banner = (props) => {
  const randomMovie = props.movie.results
    ? props.movie.results[
        Math.floor(Math.random() * props.movie.results.length)
      ]
    : null;

  const backgroundImage = randomMovie
    ? `https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path}`
    : "https://cdn.appuals.com/wp-content/uploads/2022/04/Oops-Something-Went-Wrong-on-HBO-Max.jpg.webp";
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="title">
        <h1>{randomMovie ? randomMovie.name : "Loading..."}</h1>
        <div className="play_and_mylist">
          <button className="blurred-button">Play</button>
          <button className="blurred-button">My List</button>
          <p>{randomMovie ? randomMovie.overview : "Loading..."}</p>
        </div>
      </div>
    </div>
  );
};
export default Banner;
