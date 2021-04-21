import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// Styled Components
import {
  StyledDetails,
  StyledFlexDetails,
  StyledBackground,
  StyledSeriesDetails,
} from "../styles/DetailStyles";
const SeriesDetails = () => {
  const history = useHistory();
  const { tvData } = useSelector((state) => state.tvDetails);
  const reloadHandler = () => {
    history.push(`/`);
  };
  useEffect(() => {
    window.addEventListener("load", reloadHandler);
  });
  return (
    <>
      {tvData ? (
        <StyledDetails>
          <StyledSeriesDetails>
            {tvData.backdrop_path && (
              <StyledBackground>
                <img
                  src={`https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces${tvData.backdrop_path}`}
                  alt="backdrop"
                />
              </StyledBackground>
            )}
            <StyledFlexDetails>
              {tvData.poster_path && (
                <div className="poster">
                  <img
                    src={`https://www.themoviedb.org/t/p/w440_and_h660_face${tvData.poster_path}`}
                    alt="poster"
                  />
                </div>
              )}
              <div className="description">
                <div className="title">
                  <h2>{tvData.name}</h2>
                  <h3>{tvData.tagline}</h3>
                </div>
                {tvData.genres &&
                  tvData.genres.map((genre, index) => (
                    <div className="genres" key={genre.id}>
                      <h3 key={index}>#{genre.name}</h3>
                    </div>
                  ))}
                <div className="overview">
                  <span>Overview:</span>
                  <p>{tvData.overview}</p>
                </div>
                <div className="status">
                  <h4>Seasons:{tvData.number_of_seasons}</h4>
                  <h4>Episodes:{tvData.number_of_episodes}</h4>
                </div>
                {tvData.created_by &&
                  tvData.created_by.map((creator, index) => (
                    <div className="creators" key={creator.id}>
                      <h3 key={index}>{creator.name}</h3>
                    </div>
                  ))}
              </div>
            </StyledFlexDetails>
          </StyledSeriesDetails>
        </StyledDetails>
      ) : (
        "Something Went wrong "
      )}
    </>
  );
};

export default SeriesDetails;
