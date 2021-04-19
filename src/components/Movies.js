import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadDetailsMovie } from "../actions/detailsMovieAction";
// Styled Components
import { StyledMovie } from "../styles/MovieStyles";
const Movies = ({ id, title, image, releaseDate, voteCount }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const movieDetailsHandler = () => {
    history.push(`/movies/${id}`);
    dispatch(loadDetailsMovie(id));
  };
  // Lets add event throttling 
  const throttled = (func,limit) =>{
    let flag = true
    return function(){
      // If the function has 'this' context or arguments
      let context = this
      let args = arguments
      if(flag){
        func.apply(context,args)
        flag = false
        setTimeout(()=>{
          flag = true
        },limit)
      }
    }
  }
  const betterMovieDetailsHandler = throttled(movieDetailsHandler,500)
  return (
    <>
      {title && image === null ? (
        " "
      ) : (
        <StyledMovie onClick={betterMovieDetailsHandler} whileHover={{scale:1.1,transition:{duration:0.3,ease:[0.6, 0.05, -0.01, 0.9]}}}>
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
      )}
    </>
  );
};

export default Movies;
