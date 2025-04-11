const randomNumber = () =>{
    let randomNumber = Math.random();
    return Math.floor(randomNumber * 15) + 1;
}

module.exports = {randomNumber}