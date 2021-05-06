import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams,useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadDetailsTv } from "../actions/detailsTvAction";
import Loading from "../components/Loading";
// Styled Components
import {
  StyledDetails,
  StyledFlexDetails,
  StyledBackground,
  StyledSeriesDetails,
} from "../styles/DetailStyles";
const SeriesDetails = () => {
  const { tvData, isLoading } = useSelector((state) => state.tvDetails);
  const { id } = useParams();
  const {pathname} = useLocation();
  const dispatch = useDispatch();
  const reloadHandler = () => {
    dispatch(loadDetailsTv(id));
  };
  // This effect will takes place when user refreshes the page
  useEffect(() => {
    window.addEventListener("load", reloadHandler);
  });
  // This effect will help us to scroll to top when the page renders
  useEffect(() => {
   window.scroll({
     top:0,
     left:0
   })
  },[pathname])
  return (
    <>
      {isLoading && <Loading />}
      {tvData ? (
        <StyledDetails>
          <StyledSeriesDetails>
            {tvData.backdrop_path &&  (
              <StyledBackground>
                {isLoading && (<Loading/>)}
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
