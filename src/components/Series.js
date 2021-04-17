import React from "react";
// Styled Components
import { StyledTv } from "../styles/SeriesStyle";
const Series = ({ id, title, image, releaseDate, voteCount }) => {
  return (
    <StyledTv>
      <img
        src={`https://www.themoviedb.org/t/p/w440_and_h660_face${image}`}
        alt={title}
      />

      <h3>{title}</h3>
      <div className="flex">
        <h4>{`Released ${releaseDate}`}</h4>
        <p>{voteCount}</p>
      </div>
    </StyledTv>
  );
};

export default Series;
