const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require('body-parser');
require('dotenv').config();


app.use(cors())
app.use(bodyParser.json());


const movieRouter = require("./routers/movieRoutes")
const tvShowRouter = require("./routers/tvShowRoutes")



app.use("/api/v1/movies",movieRouter)
app.use("/api/v1/tvShows",tvShowRouter)


try{
    app.listen(process.env.PORT,()=>{
        console.log("Server Online")
    })
}
catch{
    console.log(err)
}
