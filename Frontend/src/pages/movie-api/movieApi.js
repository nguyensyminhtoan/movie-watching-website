const apiKey = "RYoOcWM4JW";
const requests = {
  fetchTrending: `trending?token=${apiKey}`,
  fetchNetflixOriginals: `top-rate?token=${apiKey}`,
  fetchTopRated: `top-rate?token=${apiKey}`,
  fetchActionMovies: `discover?token=${apiKey}&genreId=28`,
  fetchComedyMovies: `discover?token=${apiKey}&genreId=35`,
  fetchHorrorMovies: `discover?token=${apiKey}&genreId=27`,
  fetchRomanceMovies: `discover?token=${apiKey}&genreId=10749`,
  fetchDocumentaries: `discover?token=${apiKey}&genreId=99`,

};
const fetchData = async (endpoint) =>
{
  try
  {
    const response = await fetch(`https://movie-watching-website.onrender.com/api/movies/${endpoint}`);
    const data = await response.json();
    return data;
  } catch (err)
  {
    console.error("Error fetching data:", err);
    throw err;
  }
};
export const movieApi = {
  fetchTrending: () => fetchData(requests.fetchTrending),
  fetchNetflixOriginals: () => fetchData(requests.fetchNetflixOriginals),
  fetchTopRated: () => fetchData(requests.fetchTopRated),
  fetchActionMovies: () => fetchData(requests.fetchActionMovies),
  fetchComedyMovies: () => fetchData(requests.fetchComedyMovies),
  fetchHorrorMovies: () => fetchData(requests.fetchHorrorMovies),
  fetchRomanceMovies: () => fetchData(requests.fetchRomanceMovies),
  fetchDocumentaries: () => fetchData(requests.fetchDocumentaries),

};
