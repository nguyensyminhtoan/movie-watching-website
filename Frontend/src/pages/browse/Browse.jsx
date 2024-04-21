import React, { useState, useEffect } from "react";
import NavBar from "../Component/NavBar/NarBar";
import Banner from "../Component/Banner/Banner";
import { movieApi } from "../movie-api/movieApi";
import MovieList from "../Component/MovieList/MovieList";
function Browse() {
  const [movieData, setMovieData] = useState({
    netflixOriginals: [],
    trending: [],
    topRated: [],
    actionMovies: [],
    comedyMovies: [],
    horrorMovies: [],
    romanceMovies: [],
    documentaries: [],
  });

  useEffect(() => {
    const getMoviesData = async () => {
      try {
        const [
          netflixOriginals,
          trending,
          topRated,
          actionMovies,
          comedyMovies,
          horrorMovies,
          romanceMovies,
          documentaries,
        ] = await Promise.all([
          movieApi.fetchNetflixOriginals(),
          movieApi.fetchTrending(),
          movieApi.fetchTopRated(),
          movieApi.fetchActionMovies(),
          movieApi.fetchComedyMovies(),
          movieApi.fetchHorrorMovies(),
          movieApi.fetchRomanceMovies(),
          movieApi.fetchDocumentaries(),
        ]);

        setMovieData({
          netflixOriginals,
          trending,
          topRated,
          actionMovies,
          comedyMovies,
          horrorMovies,
          romanceMovies,
          documentaries,
        });
      } catch (err) {
        console.log(err);
      }
    };

    getMoviesData();
  }, []);

  return (
    <div className="app">
      <NavBar />
      <Banner movie={movieData.netflixOriginals} />
      <MovieList
        className="movie"
        movie={movieData.netflixOriginals}
        type="poster_path"
      />
      <h2 className="category">Xu hướng</h2>
      <MovieList
        className="backdrop"
        movie={movieData.trending}
        type="backdrop_path"
      />
      <h2 className="category">Xếp hạng cao</h2>
      <MovieList
        className="backdrop"
        movie={movieData.topRated}
        type="backdrop_path"
      />
      <h2 className="category">Hành động</h2>
      <MovieList
        className="backdrop"
        movie={movieData.actionMovies}
        type="backdrop_path"
      />
      <h2 className="category">Hài</h2>
      <MovieList
        className="backdrop"
        movie={movieData.comedyMovies}
        type="backdrop_path"
      />
      <h2 className="category">Kinh dị</h2>
      <MovieList
        className="backdrop"
        movie={movieData.horrorMovies}
        type="backdrop_path"
      />
      <h2 className="category">Lãng mạn</h2>
      <MovieList
        className="backdrop"
        movie={movieData.romanceMovies}
        type="backdrop_path"
      />
      <h2 className="category">tài liệu</h2>
      <MovieList
        className="backdrop"
        movie={movieData.documentaries}
        type="backdrop_path"
      />
    </div>
  );
}

export default Browse;
