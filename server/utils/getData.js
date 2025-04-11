const getData = (req, res, next, url , page) => {
  
    try{
        fetch (`${url}&api_key=${process.env.API_KEY}${page ? '&page='+page : ''}`)  
    .then(response => response.json())
    .then(data => {
        res.json(data.results) 
        return next();
    })
    .catch(err => console.log(err));
    }
    catch{
        res.status(500).json({message: "Something went wrong, Refresh"});
    }
}

module.exports ={
    getData
}