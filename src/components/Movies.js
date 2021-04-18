import React from "react";
import {useHistory} from 'react-router-dom'
// Styled Components
import { StyledMovie } from "../styles/MovieStyles";
const Movies = ({ id, title, image, releaseDate, voteCount }) => {
  const history = useHistory()
  const movieDetailsHandler = ()=>{
    history.push(`/movies/${id}`)
  }
  return (
    <StyledMovie onClick={movieDetailsHandler}>
      <img
        src={`https://www.themoviedb.org/t/p/w440_and_h660_face${image}`}
        alt={title}
      />
      <h3>{title}</h3>
      <div className="flex">
        <h4>{`Released: ${releaseDate}`}</h4>
        <p>{`Vote Average: ${voteCount}`}</p>
      </div>
    </StyledMovie>
  );
};

export default Movies;
