const movies = [];

function favouriteMovie(operation, movie) {
    // Write your code here

    fav_movie = [];
    if (operation==='add')
    {
        fav_movie.push(movie);
    }
    else{
        fav_movie.pop(movie);
    }
    return fav_movie;
}

module.exports = favouriteMovie;
