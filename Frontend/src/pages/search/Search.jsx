import React, { useState } from "react";
import NavBar from "../Component/NavBar/NarBar";
import SearchForm from "../Component/SearchForm/SearchForm";
import ResultList from "../Component/ResultList/ResultList";

const Search = () =>
{
  const [data, setData] = useState({});
  const searchHandler = async (searchKeyWord, genre, mediaType, language, year) =>
  {
    const request = await fetch(
      `https://movie-watching-website.onrender.com/api/movies/search?token=RYOcWM4JW&genre=${genre}&mediaType=${mediaType}&language=${language}&year=${year}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ keyword: searchKeyWord }) }
    );
    const data = await request.json();

    setData(data);
  };

  return (
    <div className="app">
      <NavBar></NavBar>
      <SearchForm onSearch={searchHandler}></SearchForm>
      <h1 style={{ marginLeft: "20px" }}>Search Result</h1>
      <ResultList movie={data}></ResultList>
    </div>
  );
};

export default Search;
