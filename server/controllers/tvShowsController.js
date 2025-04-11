require('dotenv').config();
const {getData} = require("../utils/getData");
const {randomNumber} = require("../utils/randomNumber");

function getPopularTvShows(req, res, next) {

    let page = randomNumber() 
    url = 'https://api.themoviedb.org/3/discover/tv?language=en-US&sort_by=popularity.desc'

   getData(req,res,next,url,page);
}

function getAiringTvShows(req,res,next){
    let page = randomNumber()
    url ="https://api.themoviedb.org/3/tv/airing_today?"
    getData(req, res, next, url, page);
}

function getOnAirTvShows(req,res,next){
    let page = randomNumber()
    url ="https://api.themoviedb.org/3/tv/on_the_air?"
    getData(req, res, next, url, page);
}

function getLatestTvShows(req,res,next){
    let page = randomNumber()
    url ="https://api.themoviedb.org/3/tv/popular?"
    getData(req, res, next, url, page);
}

function getTopRatedTvShows(req,res,next){
    let page = randomNumber()
    url ="https://api.themoviedb.org/3/tv/top_rated?"
    getData(req, res, next, url, page);
}

function getTrendingTvShows(req,res,next){
    let page = randomNumber()
    url ="https://api.themoviedb.org/3/trending/tv/day?"
    getData(req, res, next, url, page);
}

module.exports = {
    getPopularTvShows ,getAiringTvShows , getOnAirTvShows , getLatestTvShows, getTopRatedTvShows , getTrendingTvShows
}