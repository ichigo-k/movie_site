const getData = async (req, res, next, url, page) => {
    try {
        console.log(process.env.API_KEY)
        const response = await fetch(`${url}&api_key=${process.env.API_KEY}${page ? '&page=' + page : ''}`);
        const data = await response.json();

        console.log("RAW DATA FROM API:", data); 

        if (!data || !data.results) {
            return res.status(500).json({ message: "Invalid data received from API." });
        }

        return res.json(data.results);
    } catch (err) {
        console.error("Fetch error:", err.message || err);
        return res.status(500).json({ message: "Something went wrong, refresh the page." });
    }
};


module.exports ={
    getData
}
