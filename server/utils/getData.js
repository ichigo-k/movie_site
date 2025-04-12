const getData = async (req, res, next, url, page) => {
    try {
        const response = await fetch(`${url}&api_key=${process.env.API_KEY}${page ? '&page=' + page : ''}`);
        const data = await response.json();
        res.json(data.results);
        next();
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Something went wrong, refresh the page." });
    }
};


module.exports ={
    getData
}
