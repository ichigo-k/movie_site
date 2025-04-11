require('dotenv').config();
const {getData} = require("../utils/getData");
const {randomNumber} = require("../utils/randomNumber");

function getPopularMovies(req, res, next) {
    
    let page = randomNumber()
    url = 'https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc'
    
    getData(req, res, next, url, page);
  
}

function getLatestmovies(req,res,next){
    let page = randomNumber()
    url ="https://api.themoviedb.org/3/movie/popular?"
    getData(req, res, next, url, page);
}

function getTopRatedmovies(req,res,next){
    let page = randomNumber()
    url ="https://api.themoviedb.org/3/movie/top_rated?"
    getData(req, res, next, url, page);
}

function getUpcomingmovies(req,res,next){
    let page = randomNumber()
    url ="https://api.themoviedb.org/3/movie/upcoming?"
    getData(req, res, next, url, page);
}

function getNowPlayingmovies(req,res,next){
    let page = randomNumber()
    url ="https://api.themoviedb.org/3/movie/now_playing?"
    getData(req, res, next, url, page);
}

function getTrendingmovies(req,res,next){
    let page = randomNumber()
    url ="https://api.themoviedb.org/3/trending/movie/day?"
    getData(req, res, next, url, page);
}


function search(req,res,next){
    console.log(req.body.search)
}


module.exports ={
    getPopularMovies, getLatestmovies, getTopRatedmovies, getUpcomingmovies, getNowPlayingmovies , getTrendingmovies, search
}