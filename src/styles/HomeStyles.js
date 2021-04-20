import styled from "styled-components";

export const StyledContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  h2{
    padding: 6rem 4rem;
    font-size:2.8rem;
  }
  .search{
    display:flex;
    justify-content:space-between;
    align-items: center;
    padding: 5.5rem 4rem;
  }
  @media screen  and (max-width: 768px){
    .search{
      padding:5rem 3.5rem;
      h2{
        width:85%;
        font-size:1.8rem;
      }
    }
  }
`;
export const StyledMovies = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;
  padding-bottom: 3rem;
  padding: 5rem 4rem;
`;
export const StyledSeries = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;
  padding-bottom: 3rem;
  padding: 5rem 4rem;
`;
