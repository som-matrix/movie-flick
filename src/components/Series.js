import React from "react";
import {useHistory} from 'react-router-dom'
import { useDispatch } from "react-redux";
import {loadDetailsTv} from '../actions/detailsTvAction'
// Styled Components
import { StyledTv } from "../styles/SeriesStyle";
const Series = ({ id, title, image, releaseDate, voteCount }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const seriesDetailsHandler = ()=>{
    history.push(`/tv/${id}`)
    dispatch(loadDetailsTv(id))
  }
  return (
    <StyledTv onClick={seriesDetailsHandler}>
      <img
        src={`https://www.themoviedb.org/t/p/w440_and_h660_face${image}`}
        alt={title}
      />

      <h3>{title}</h3>
      <div className="flex">
        <h4>{`Released: ${releaseDate}`}</h4>
        <p>{`Vote Average: ${voteCount}`}</p>
      </div>
    </StyledTv>
  );
};

export default Series;
