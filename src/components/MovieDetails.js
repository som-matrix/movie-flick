import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// Styled Components
import {
  StyledDetails,
  StyledMovieDetails,
  StyledBackground,
  StyledFlexDetails,
} from "../styles/DetailStyles";
import { StyledMovies } from "../styles/HomeStyles";
import { StyledMovie } from "../styles/MovieStyles";
const MovieDetails = () => {
  const { movieData, castDataMovie } = useSelector(
    (state) => state.movieDetails
  );
  const history = useHistory();
  const reloadHandler = () => {
    history.push("/movies");
  };
  useEffect(() => {
    window.addEventListener("load", reloadHandler);
  });
  // let casts =  castDataMovie.cast && castDataMovie.cast.slice(0,4)
  return (
    <StyledDetails>
      <StyledMovieDetails>
        <StyledBackground>
          <img
            src={`https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces${movieData.backdrop_path}`}
            alt="backdrop"
          />
        </StyledBackground>
        <StyledFlexDetails>
          <div className="poster">
            <img
              src={`https://www.themoviedb.org/t/p/w440_and_h660_face${movieData.poster_path}`}
              alt="poster"
            />
          </div>
          <div className="description">
            <div className="title">
              <h2>{movieData.title}</h2>
              <h3>{movieData.tagline}</h3>
            </div>
            {movieData.genres &&
              movieData.genres.map((genre,index) => (
                <div className="genres" key={genre.id}>
                  <h3 key={index}>#{genre.name}</h3>
                </div>
              ))}
            <div className="overview">
              <span>Overview:</span>
              <p>{movieData.overview}</p>
            </div>
            <div className="status">
              <h4>
                {movieData.status === "Unreleased"
                  ? "Will Be Released in"
                  : "Released On"}
              </h4>
              <h4>{movieData.release_date}</h4>
            </div>
          </div>
        </StyledFlexDetails>
      </StyledMovieDetails>
      {/* {castDataMovie.cast && casts.map((cast) => (
            <StyledMovies key={cast.id}>
              <StyledMovie>
                <img
                  src={`https://www.themoviedb.org/t/p/w440_and_h660_face${cast.profile_path}`}
                  alt="profile"
                />
                <h3>{cast.name}</h3>
              </StyledMovie>
            </StyledMovies>
      ))} */}
    </StyledDetails>
  );
};

export default MovieDetails;
