const express = require("express")
const router = express.Router()

const { getPopularMovies , getLatestmovies, getTopRatedmovies, getUpcomingmovies ,getNowPlayingmovies , getTrendingmovies, search} = require("../controllers/movieControllers")



router.route("/popular").get( getPopularMovies )
router.route("/latest").get( getLatestmovies )
router.route("/top_rated").get( getTopRatedmovies )
router.route("/upcoming").get( getUpcomingmovies )
router.route("/now_playing").get( getNowPlayingmovies )
router.route("/trending").get( getTrendingmovies )
router.route("/search").post( search )


module.exports = router