import React from "react";
import { useSelector } from "react-redux";
// Components
import Movies from "../components/Movies";
// StyledComponents
import { StyledContainer, StyledMovies } from "../styles/HomeStyles";
const Movie = () => {
  // All the Movie states from the store
  //Movies
  const {
    nowPlayingMovies,
    topRatedMovies,
    popularMovies,
    upcomingMovies,
  } = useSelector((state) => state.movies);
  return (
    <StyledContainer>
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
    </StyledContainer>
  );
};

export default Movie;
