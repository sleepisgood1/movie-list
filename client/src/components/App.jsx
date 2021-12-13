import React from 'react';
import MovieList from './MovieList.jsx'
import SearchForm from './SearchForm.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSearched: false,
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ],
      filteredMovies: []
    }
    this.onSubmitOfSearch = this.onSubmitOfSearch.bind(this)
  }
  onSubmitOfSearch(input) {
    console.log(input)
    // event.preventDefault();
    var filteredMovie = this.matchMovie(this.state.movies, input)
    this.setState({
      isSearched: !this.state.isSearched,
      filteredMovies: filteredMovie
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
    if (this.state.isSearched) {
      return(
        <div>
          <SearchForm />
          <MovieList allMovies={this.state.filteredMovies}/>
        </div>
      )
    } else {
      return (
        <div>
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