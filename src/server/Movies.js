import axios from 'axios'

const ApiMovies = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie/popular?api_key=35c82b7e74b0040b3425e82d39c3a4ec'
})

export default ApiMovies