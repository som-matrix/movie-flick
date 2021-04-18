import React,{useEffect} from 'react'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { loadMovies } from "./actions/movieAction";
import { loadTv } from "./actions/tvAction";
// GlobalStyle 
import {GlobalStyle} from './styles/GlobalStyles'
// Components
import Header from './components/Header'
import MovieDetails from './components/MovieDetails'
import SeriesDetails from './components/SeriesDetails'
// Pages
import Home from './pages/Home'
import Movie from './pages/Movie'
import Tv from './pages/Tv'
function App() {
  const dispatch = useDispatch();
  //Movies and Series will mount when page loads
  useEffect(() => {
    dispatch(loadMovies());
    dispatch(loadTv());
  });
  return (
    <Router>
      <div className="App">
      <GlobalStyle/>
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route exact path="/movies">
          <Movie/>
        </Route>
        <Route path="/movies/:id">
          <MovieDetails/>
        </Route>
        <Route exact path="/tv">
          <Tv/>
        </Route>
        <Route path="/tv/:id">
          <SeriesDetails/>
        </Route>
      </Switch>
     </div>
    </Router>
  );
}

export default App;
