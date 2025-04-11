const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require('body-parser');
const cron = require('node-cron');
const axios = require('axios');

require('dotenv').config();


app.use(cors())
app.use(bodyParser.json());


const URL = 'https://movie-site-1.onrender.com';

cron.schedule('*/5 * * * *', async () => {
    try {
        console.log(`[${new Date().toISOString()}] Making GET request to ${URL}`);
        const response = await axios.get(URL);
        console.log(`Status: ${response.status}`);
    } catch (error) {
        console.error(`Error making request: ${error.message}`);
    }
});


const movieRouter = require("./routers/movieRoutes")
const tvShowRouter = require("./routers/tvShowRoutes")


app.get("/", (req, res) => {
    console.log("Logged")
})
app.use("/api/v1/movies", movieRouter)
app.use("/api/v1/tvShows", tvShowRouter)


try {
    app.listen(process.env.PORT, () => {
        console.log("Server Online")
    })
}
catch {
    console.log(err)
}
