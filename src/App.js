import React, { Component } from 'react'
import Movies from './server/Movies'

class App extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    this.getMoveis()
  }

  getMoveis = async () => {
    const response = await Movies.get()
    this.setState({
      movies: response.data.results
    })
  }

  renderMovies = () => {
    const movies = this.state.movies.filter((movie) => movie.vote_average >= 8 && movie.vote_count > 2000);
    return movies.map(movie => (
      <div>
      <p>{movie.title} - {movie.overview}</p>
      <h2> {movie.vote_average} </h2>
    </div>
    ));
  }


  render() {
    console.log(this.state.movies)
    return (
      <div>
        {this.state.movies.length > 0 && (
          <div>
            {/* { this.state.movies.map((movie)=>(
              <div>
                <p>{movie.title} - {movie.overview}</p>
                <h2> {movie.vote_average} </h2>
              </div>
            ))} */}
            {this.renderMovies()}
          </div>
        )}
      </div>
    )
  }
}

export default App;