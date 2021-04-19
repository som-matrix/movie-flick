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
const Home = ({clearSearchHandler}) => {
  
  //All states of Movies
  const { topRatedMovies, popularMovies, searchedMovie } = useSelector(
    (state) => state.movies
  );
  //All state of Tv Series
  const { popularTv, topRatedTv, searchedTv } = useSelector(
    (state) => state.tv
  );
  return (
    <StyledContainer>
     {searchedMovie.length && (
       <div className="search">
         <h2>Searched results from movies</h2>
         <button onClick={clearSearchHandler}>Clear</button>
       </div>
     )}
     {searchedMovie.length && (
        <StyledMovies>
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
      )}
      {searchedTv.length && (
         <StyledSeries>
           <h2>Searched results from Tv</h2>
           {searchedTv.map((tv)=>(
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
      )}
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
      <h2>Top Rated Tv</h2>
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
