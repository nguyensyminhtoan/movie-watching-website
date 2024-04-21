import { useState } from "react";
import "./SearchForm.css";
export default function SearchForm({ onSearch }) {
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [genre, setGenre] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [language, setLanguage] = useState("");
  const [year, setYear] = useState("");
  const handlerInputChange = (e) => {
    setSearchKeyWord(e.target.value);
  };
  
  const handlerGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const handlerMediaTypeChange = (e) => {
    setMediaType(e.target.value);
  };

  const handlerLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handlerYearChange = (e) => {
    setYear(e.target.value);
  };


  const handlerSubmit = (e) => {
    e.preventDefault();
    // Gọi hàm onSearch và truyền từ khóa tìm kiếm lên
    onSearch(searchKeyWord, genre, mediaType, language, year);
  };
  return (
    <form className="form" onSubmit={handlerSubmit}>
      <div className="search-container">
        <input
          type="text"
          onChange={handlerInputChange}
          placeholder="Search movies..."
          value={searchKeyWord}
        ></input>
        <div className="search-icon">
          <svg
            className="svg-inline--fa fa-search fa-w-16"
            fill="#ccc"
            aria-hidden="true"
            data-prefix="fas"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="30"
            height="30"
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>
        </div>
        
        <div className="filter-container">
        <p>Filter:</p>
        <select
          value={genre}
          onChange={handlerGenreChange}
        >
          <option value=''>-- Select Genre --</option>
          <option value='Action'>Action</option>
          <option value='Adventure'>Adventure</option>
          <option value='Animation'>Animation</option>
          <option value='Comedy'>Comedy</option>
          <option value='Crime'>Crime</option>
          <option value='Documentary'>Documentary</option>
          <option value='Drama'>Drama</option>
          <option value='Family'>Family</option>
          <option value='Fantasy'>Fantasy</option>
          <option value='History'>History</option>
          <option value='Horror'>Horror</option>
          <option value='Music'>Music</option>
          <option value='Mystery'>Mystery</option>
          <option value='Romance'>Romance</option>
          <option value='Science Fiction'>Science Fiction</option>
          <option value='TV Movie'>TV Movie</option>
          <option value='Thriller'>Thriller</option>
          <option value='War'>War</option>
          <option value='Western'>Western</option>
        </select>
        <select
          value={mediaType}
          onChange={handlerMediaTypeChange}
        >
          <option value=''>All</option>
          <option value='movie'>Movie</option>
          <option value='tv'>TV</option>
          <option value='person'>Person</option>
        </select>
        <select
          value={language}
          onChange={handlerLanguageChange}
        >
          <option value=''>All</option>
          <option value='en'>English</option>
          <option value='ja'>Japanese</option>
          <option value='ko'>Korean</option>
        </select>
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={handlerYearChange}
        />
        </div>
      </div>
      <div className="button-form">
        <button type="reset">RESET</button>
        <button
          type="submit"
          style={{ backgroundColor: "rgb(0, 183, 255)", color: "#fff" }}
        >
          SEARCH
        </button>
      </div>
    </form>
  );
}
