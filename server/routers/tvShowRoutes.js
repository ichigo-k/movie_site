const express = require("express")
const router = express.Router()

const { getPopularTvShows,getAiringTvShows , getOnAirTvShows , getLatestTvShows, getTopRatedTvShows , getTrendingTvShows } = require("../controllers/tvShowsController")



router.route("/popular").get(getPopularTvShows)
router.route("/latest").get(getLatestTvShows)
router.route("/airing").get(getAiringTvShows)
router.route("/on_air").get(getOnAirTvShows)
router.route("/top_rated").get( getTopRatedTvShows)
router.route("/trending").get( getTrendingTvShows)


module.exports = router