import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {  useHistory } from "react-router-dom";
const MovieDetails = () => {
  const history = useHistory();
  const { movieData } = useSelector((state) => state.movieDetails);
  const reloadHandler = ()=>{
      history.push('/movies')
  }
  useEffect(()=>{
      window.addEventListener('load',reloadHandler)
  })
  return (
    <div>
      <p>{movieData.overview}</p>
    </div>
  );
};

export default MovieDetails;
