import "./MovieList.css";
import MovieDetail from "../MovieDetail/MovieDetail";
import { useState } from "react";
const MovieList = (props) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const data = props.movie.results || [];
  const type = props.type;
  const defaultImageUrl =
    "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg";
  const closeModal = () => {
    setSelectedMovie(null);
  };
  const openModal = (movie) => {
    if (selectedMovie && selectedMovie.id === movie.id) {
      // Nhấp vào cùng một bộ phim, đóng modal
      closeModal();
    } else {
      // Nhấp vào một bộ phim khác, mở modal cho bộ phim mới
      setSelectedMovie(movie);
    }
  };

  return (
    <div className="card">
      <ul className={props.className}>
        {data.map((movie) => {
          const imageUrl = movie[type]
            ? `https://image.tmdb.org/t/p/original/${movie[type]}`
            : defaultImageUrl;
          return (
            <li key={movie.id}>
              <img
                className="image"
                src={imageUrl}
                alt={movie["original_title"]}
                onClick={() => {
                  openModal(movie);
                }}
              ></img>
            </li>
          );
        })}
      </ul>
      {selectedMovie && <MovieDetail movie={selectedMovie}></MovieDetail>}
    </div>
  );
};
export default MovieList;
