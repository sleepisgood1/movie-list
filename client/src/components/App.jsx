import React from 'react';
import MovieList from './MovieList.jsx'
import SearchForm from './SearchForm.jsx'
import AddMovieForm from './AddMovieForm.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSearched: false,
      movies: [],
      filteredMovies: []
    }
    this.onSubmitOfSearch = this.onSubmitOfSearch.bind(this)
    this.onSubmitOfAddMovie = this.onSubmitOfAddMovie.bind(this)
  }
  onSubmitOfSearch(input) {
    if (!input) {
      this.setState({
        isSearched: !this.state.isSearched,
        filteredMovies: this.state.movies
      })
    } else {
      // console.log(input)
      // event.preventDefault();
      var filteredMovie = this.matchMovie(this.state.movies, input)
      this.setState({
        isSearched: !this.state.isSearched,
        filteredMovies: filteredMovie
      })
    }
  }
  onSubmitOfAddMovie(movieToAdd) {
    var newMovieList = this.state.movies
    newMovieList.push(movieToAdd)
    console.log(newMovieList)
    this.setState({
      movies: newMovieList
    })
  }

  matchMovie(movies, input) {
    var matchedMovies = [];
      for (let i=0;i<movies.length;i++) {
        if (movies[i]["title"].toLowerCase().indexOf(input.toLowerCase()) !== -1) {
          matchedMovies.push(movies[i])
        }
      }
      return matchedMovies
  }

  render () {
    if (this.state.isSearched && this.state.filteredMovies.length>0) {
      return(
        <div>
          <AddMovieForm search={this.onSubmitOfAddMovie}/>
          <SearchForm search={this.onSubmitOfSearch}/>
          <MovieList allMovies={this.state.filteredMovies}/>
        </div>
      )
    } else if (this.state.isSearched && this.state.filteredMovies.length===0) {
      return (
        <div>
          <AddMovieForm search={this.onSubmitOfAddMovie}/>
          <SearchForm search={this.onSubmitOfSearch}/>
          <h1>No Movies Were Found!</h1>
          <MovieList allMovies={this.state.movies}/>
        </div>
      )
    } else {
      return (
        <div>
          <AddMovieForm search={this.onSubmitOfAddMovie}/>
          <SearchForm search={this.onSubmitOfSearch}/>
          <MovieList allMovies={this.state.movies}/>
        </div>
      )
    }
  }
}
// const App = (props) => (
//   <div>Hello World!</div>
// );

export default App;