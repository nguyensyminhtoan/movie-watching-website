import { useState, useEffect } from "react";
import "./MovieDetail.css";
import Youtube from "react-youtube";
const MovieDetail = (props) => {
  const defaultImageUrl =
    "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg";
  const [videoKey, setVideoKey] = useState(null);
  const opts = {
    width: "80%",
    height: "400",
    playerVars: {
      autoplay: 0,
    },
  };
  useEffect(() => {
    const request = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${props.movie.id}/videos?api_key=0c9af247a9f4f42ff7537acb5bfad070`
        );
        const responseData = await response.json();

        const data = await responseData.results;
        // Lọc video theo các yếu tố cần kiểm tra
        const youtubeVideo = data.find(
          (video) =>
            video.site === "YouTube" &&
            (video.type === "Trailer" || video.type === "Teaser")
        );
        if (youtubeVideo) {
          setVideoKey(youtubeVideo.key);
        } else {
          setVideoKey(null);
        }
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };
    request();
  }, [props.movie]);

  return (
    <div className="movie_detail">
      <div className="detail">
        <div className="movie-name">
          <h2>{props.movie["original_title"] || props.movie.name}</h2>
        </div>
        <p style={{ fontWeight: " bold" }}>{props.movie["release_date"]}</p>
        <p style={{ fontWeight: "bold" }}>{props.movie["vote_average"]}</p>
        <p style={{ marginTop: "30px", textAlign: "justify" }}>
          {props.movie.overview}
        </p>
      </div>
      <div className="trailer">
        {videoKey ? (
          <Youtube videoId={videoKey} opts={opts}></Youtube>
        ) : (
          <img
            alt="backdrop"
            src={
              props.movie.backdrop_path
                ? `https://image.tmdb.org/t/p/original/${props.movie.backdrop_path}`
                : defaultImageUrl
            }
          />
        )}
      </div>
    </div>
  );
};
export default MovieDetail;
