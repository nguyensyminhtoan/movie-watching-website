import "./ResultList.css";
import MovieDetail from "../MovieDetail/MovieDetail";
import { useState } from "react";
export default function ResultList(props) {
  const data = props.movie;
  const defaultImageUrl =
    "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg";
  const [selectedMovie, setSelectedMovie] = useState(null);
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
    <div>
      {selectedMovie && <MovieDetail movie={selectedMovie}></MovieDetail>}
      <ul className="movies">
        {data.results &&
          data.results.map((movie) => {
            const imageUrl = movie["poster_path"]
              ? `https://image.tmdb.org/t/p/original/${movie["poster_path"]}`
              : defaultImageUrl;
            return (
              <li key={movie.id}>
                <img
                  onClick={() => {
                    openModal(movie);
                  }}
                  src={imageUrl}
                  alt={movie.title}
                  className="image"
                ></img>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
