import React from "react";
import { useSelector } from "react-redux";
// Components
import Series from "../components/Series";
// StyledComponents
import { StyledContainer, StyledSeries } from "../styles/HomeStyles";
const Tv = ({ clearSearchHandler }) => {
  //Tv Series
  const { airingTodayTv, popularTv, topRatedTv, searchedTv } = useSelector(
    (state) => state.tv
  );
  return (
    <StyledContainer>
      {searchedTv.length && (
        <div className="search" key={searchedTv.id}>
          <h2>Searched results from Tv</h2>
          <button onClick={clearSearchHandler}>Clear</button>
        </div>
      )}
      {searchedTv.length && (
        <StyledSeries>
          <h2>Searched results from Tv</h2>
          {searchedTv.map((tv) => (
            <Series
              key={tv.id}
              id={tv.id}
              title={tv.name}
              image={tv.poster_path}
              releaseDate={tv.first_air_date}
              voteCount={tv.vote_average}
            />
          ))}
        </StyledSeries>
      )}
      <h2>Airing Now on Tv</h2>
      <StyledSeries>
        {airingTodayTv.map((tv) => (
          <Series
            key={tv.id}
            id={tv.id}
            title={tv.name}
            image={tv.poster_path}
            releaseDate={tv.first_air_date}
            voteCount={tv.vote_average}
          />
        ))}
      </StyledSeries>
      <h2>Popular Tv</h2>
      <StyledSeries>
        {popularTv.map((tv) => (
          <Series
            key={tv.id}
            id={tv.id}
            title={tv.name}
            image={tv.poster_path}
            releaseDate={tv.first_air_date}
            voteCount={tv.vote_average}
          />
        ))}
      </StyledSeries>
      <h2>Upcoming Tv</h2>
      <StyledSeries>
        {topRatedTv.map((tv) => (
          <Series
            key={tv.id}
            id={tv.id}
            title={tv.name}
            image={tv.poster_path}
            releaseDate={tv.first_air_date}
            voteCount={tv.vote_average}
          />
        ))}
      </StyledSeries>
    </StyledContainer>
  );
};

export default Tv;
