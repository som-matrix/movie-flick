import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams,useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadDetailsMovie } from "../actions/detailsMovieAction";
import Loading from '../components/Loading'
// Styled Components
import {
  StyledDetails,
  StyledMovieDetails,
  StyledBackground,
  StyledFlexDetails,
} from "../styles/DetailStyles";
const MovieDetails = () => {
  const { movieData,isLoading } = useSelector((state) => state.movieDetails);
  const dispatch = useDispatch()
  const {pathname} = useLocation()
  const {id} = useParams();
  const reloadHandler = () => {
      dispatch(loadDetailsMovie(id))
  };
  // This effect will takes place when user refreshes the page
  useEffect(()=>{
      window.addEventListener('load', reloadHandler)
  })
  // This effect will help us to scroll to top when the page renders
  useEffect(()=>{
    window.scroll({
      top:0,
      left:0
    },[pathname])
  })
  return (
    <>
      {isLoading && (<Loading/>)}
      {movieData ? (
        <StyledDetails>
          <StyledMovieDetails>
            {movieData.backdrop_path && (
              <StyledBackground>
                {isLoading && (<Loading/>)}
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
        ''
      )}
      
    </>
  );
};

export default MovieDetails;
