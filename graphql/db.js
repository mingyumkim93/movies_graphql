const movies = [
    {
        id: 0,
        name: "Train to Busan",
        score: 5
    },
    {
        id: 1,
        name: "Parasite",
        score: 54
    },
    {
        id: 2,
        name: "Terminator",
        score: 15
    },
    {
        id: 3,
        name: "Avengers",
        score: 50
    }
]

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => id === movie.id);
    return  filteredMovies[0]
}

export const deleteMoive = () => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length){
        movie = cleanedMovies;
        return true;
    }
    else{
        return false;
    }
}

export const addMoive = (name, score) => {
    const newMovie= {
        id: movies.length + 1,
        name,
        score
    }
    movies.push(newMovie);
    return newMovie;
}