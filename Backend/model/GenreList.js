const fs = require('fs')
const path = require('path')
const Movies=require('../model/MovieList')
const paging=require('../utils/paging')
const DATA_PATH = path.join(path.dirname(process.mainModule.filename),'data','genreList.json')

const Genre = {
  all:function(){
    return JSON.parse(fs.readFileSync(DATA_PATH,'utf8'))
  }
}
exports.findMoviesByGenre=(page,genreId)=>{
  const allMovies=Movies.all()
  const genreList=Genre.all()
  // Kiểm tra xem genreId có tồn tại trong danh sách genre hay không
  const foundGenre = genreList.find(genre => genre.id === genreId);
  if (!foundGenre) {
     return { error: 400, message: 'Not found that genre id' };
   }
  const genreName=genreList.find(genre=>genre.id===genreId).name
  const moviesByGenre = allMovies.filter(movie=>movie.genre_ids.includes(genreId))
  const response=paging(page,moviesByGenre)
  response.genre_name=genreName;
  return response
}