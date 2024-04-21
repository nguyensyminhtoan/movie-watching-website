const Movies =require('../model/MovieList')
const Genre=require('../model/GenreList')
const Video=require('../model/VideoList')
exports.getTrendingMovies=(req,res)=>{
 
  const page = parseInt(req.query.page) || 1;
  const response= Movies.findTrendingMovies(page)
  res.status(200).json(response)
}
exports.getTopRateMovies=(req,res)=>{
  const page = parseInt(req.query.page)||1;
  const response = Movies.findTopRateMovies(page)
  res.status(200).json(response)
}
exports.getMoviesByGenre=(req,res)=>{
  const page = parseInt(req.query.page)||1;
  const genreId=parseInt(req.query.genreId)
  if (!genreId){
    return res.status(400).json({message:'Not found genre parram'})
  }
  const response=Genre.findMoviesByGenre(page, genreId);
  // Kiểm tra xem hàm findMoviesByGenre có trả về lỗi không
  if (response.error) {
   return res.status(response.error).json({message: response.message });
    
  }
  
  // Trả về dữ liệu nếu không có lỗi
  res.status(200).json(response);
}
exports.postFilmTrailer=(req,res)=>{
  const filmId=req.body.film_id
  const response = Video.findTrailer(filmId)
  if(response.error){
   return res.status(response.error).json({message: response.message })
  }
  res.status(200).json(response)
}
exports.postMovieByKeyword= (req,res)=>{
  const keyword = req.body.keyword
  const page = req.query.page || 1
  const genre=req.query.genre||null
  const mediaType=req.query.mediaType||null
  const language=req.query.language||null
  const year=req.query.year||null
  if(!keyword){
    return res.status(400).json({message:'Not found keyword'})
  }
    const response=Movies.findMovieByKeyword(page,keyword,genre,mediaType,language,year)
  res.status(200).json(response)
}
