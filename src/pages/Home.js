import React from "react";
import { useSelector } from "react-redux";
// Components
import Movies from "../components/Movies";
import Series from "../components/Series";
// Styled Comoponent
import {
  StyledContainer,
  StyledMovies,
  StyledSeries,
} from "../styles/HomeStyles";
const Home = () => {
  //All states of Movies
  const {
    nowPlayingMovies,
    topRatedMovies,
    popularMovies,
    upcomingMovies,
    searchedMovie
  } = useSelector((state) => state.movies);
  //All state of Tv Series
  const { airingTodayTv, popularTv, topRatedTv, searchedTv } = useSelector(
    (state) => state.tv
  );
  return (
    <StyledContainer>
      <StyledMovies>
        <h2>Searched Details</h2>
        {searchedMovie.map((movie) => (
          <Movies
            id={movie.id}
            key={movie.id}
            title={movie.title}
            image={movie.poster_path}
            releaseDate={movie.release_date}
            voteCount={movie.vote_average}
          />
        ))}
      </StyledMovies>

      <h2>Now Playing</h2>
      <StyledMovies>
        {nowPlayingMovies.map((movie) => (
          <Movies
            id={movie.id}
            key={movie.id}
            title={movie.title}
            image={movie.poster_path}
            releaseDate={movie.release_date}
            voteCount={movie.vote_average}
          />
        ))}
      </StyledMovies>
      <h2>Top Rated Movies</h2>
      <StyledMovies>
        {topRatedMovies.map((movie) => (
          <Movies
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image={movie.poster_path}
            releaseDate={movie.release_date}
            voteCount={movie.vote_average}
          />
        ))}
      </StyledMovies>
      <h2>Popular Movies</h2>
      <StyledMovies>
        {popularMovies.map((movie) => (
          <Movies
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image={movie.poster_path}
            releaseDate={movie.release_date}
            voteCount={movie.vote_average}
          />
        ))}
      </StyledMovies>
      <h2>Upcoming Movies</h2>
      <StyledMovies>
        {upcomingMovies.map((movie) => (
          <Movies
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image={movie.poster_path}
            releaseDate={movie.release_date}
            voteCount={movie.vote_average}
          />
        ))}
      </StyledMovies>
      <h2>Airing Now on Tv</h2>
      <StyledSeries>
        {airingTodayTv.map((tv) => (
          <Series
            key={tv.id}
            id={tv.id}
            title={tv.name}
            image={tv.poster_path}
            releaseDate={tv.first_air_date}
            voteCount={tv.vote_average}
          />
        ))}
      </StyledSeries>
      <h2>Popular Tv</h2>
      <StyledSeries>
        {popularTv.map((tv) => (
          <Series
            key={tv.id}
            id={tv.id}
            title={tv.name}
            image={tv.poster_path}
            releaseDate={tv.first_air_date}
            voteCount={tv.vote_average}
          />
        ))}
      </StyledSeries>
      <h2>Upcoming Tv</h2>
      <StyledSeries>
        {topRatedTv.map((tv) => (
          <Series
            key={tv.id}
            id={tv.id}
            title={tv.name}
            image={tv.poster_path}
            releaseDate={tv.first_air_date}
            voteCount={tv.vote_average}
          />
        ))}
      </StyledSeries>
    </StyledContainer>
  );
};

export default Home;
