const fs = require('fs');
const path = require('path');
const paging=require('../utils/paging');

const DATA_PATH = path.join(path.dirname(process.mainModule.filename),'data','movieList.json')

const Movies = {
  all: function() {
    return JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
  },
  findTrendingMovies:function(page){
    const allMovies=Movies.all();
     // Sắp xếp theo trường popularity giảm dần
    const trendingMovies= allMovies.sort((a,b)=>b.popularity - a.popularity);
    const response=paging(page,trendingMovies)
    return response},
  
  findTopRateMovies:function(page){
    const allMovies=Movies.all()
     // Sắp xếp theo trường vote_average giảm dần
    const topRateMovies=allMovies.sort((a,b)=>b.vote_average-a.vote_average)
    const response=paging(page,topRateMovies)
    return response
  },
  findMovieByKeyword:function(page,keyword,genre,mediaType,language,year){
    const allMovies=Movies.all()
    const lowerKeyword = keyword.toLowerCase()
    
    // lọc danh sách theo tiêu chí keyword
    const filteredMoviesByKeyword=allMovies.filter(movie=>{
      
      if (movie && (movie.title || movie.overview)) {
        const lowerTitle = movie.title ? movie.title.toLowerCase() : '';
        const lowerOverview = movie.overview ? movie.overview.toLowerCase() : '';
    
        return lowerTitle.includes(lowerKeyword) || lowerOverview.includes(lowerKeyword);
      }
    })

    // lọc tiếp theo genre
    const GENRE_PATH=path.join(path.dirname(process.mainModule.filename),'data','genreList.json')
    const allGenre=JSON.parse(fs.readFileSync(GENRE_PATH, 'utf8'));
    const genreId = genre ? (allGenre.find(g => g.name === genre) || {}).id || null : null;

    const filteredMoviesByGenre=genre ? filteredMoviesByKeyword.filter(movie=>movie.genre_ids.includes(genreId)):filteredMoviesByKeyword

    // lọc tiếp theo mediaType
    const filteredMoviesByMediaType=mediaType?filteredMoviesByGenre.filter(movie=>movie.media_type===mediaType):filteredMoviesByGenre

    // lọc tiếp theo year
    const filteredMoviesByYear = year ? filteredMoviesByMediaType.filter(movie=>new Date(movie.release_date).getFullYear()===parseInt(year)):filteredMoviesByMediaType
    
    // lọc tiếp theo language
    const filteredMoviesByLanguage=language? filteredMoviesByYear.filter(movie=>movie.original_language === language):filteredMoviesByYear
    const response = paging(page,filteredMoviesByLanguage)
    return response
  }
};

module.exports=Movies