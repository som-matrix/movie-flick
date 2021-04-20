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
const MovieDetails = () => {
  const { movieData } = useSelector((state) => state.movieDetails);
  const history = useHistory();
  const reloadHandler = () => {
    history.push("/movies");
  };
  useEffect(() => {
    window.addEventListener("load", reloadHandler);
  });
  return (
    <>
      {movieData ? (
        <StyledDetails>
          <StyledMovieDetails>
            {movieData.backdrop_path && (
              <StyledBackground>
                <img
                  src={`https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces${movieData.backdrop_path}`}
                  alt="backdrop"
                />
              </StyledBackground>
            )}
            <StyledFlexDetails>
              {movieData.poster_path && (
                <div className="poster">
                  <img
                    src={`https://www.themoviedb.org/t/p/w440_and_h660_face${movieData.poster_path}`}
                    alt="poster"
                  />
                </div>
              )}

              <div className="description">
                <div className="title">
                  <h2>{movieData.title}</h2>
                  <h3>{movieData.tagline}</h3>
                </div>
                {movieData.genres &&
                  movieData.genres.map((genre, index) => (
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
        </StyledDetails>
      ) : (
        "Something Went wrong"
      )}
    </>
  );
};

export default MovieDetails;
