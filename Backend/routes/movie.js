const express = require('express')

const router=express.Router();
const movieController = require('../controllers/movie')
// route GET /api/movies/trending
router.get('/api/movies/trending',movieController.getTrendingMovies)
// route GET /api/movies/top-rate
router.get('/api/movies/top-rate',movieController.getTopRateMovies)
// route GET /api/movies/discover
router.get('/api/movies/discover',movieController.getMoviesByGenre)
// route POST /api/movies/video 
router.post('/api/movies/video',movieController.postFilmTrailer)
// route POST /api/movies/search
router.post('/api/movies/search',movieController.postMovieByKeyword)
module.exports = router;