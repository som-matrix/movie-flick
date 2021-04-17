import styled from "styled-components";

export const StyledTv = styled.div`
  min-height: 30vh;
  box-shadow: 1px 1px 6px 1px rgba(51, 51, 51, 0.3);
  border-radius: 0.5rem;
  cursor: pointer;
  overflow: hidden;

  h3 {
    text-align: center;
    padding: 2rem 0;
    color: rgba(238, 238, 238,0.7);
    font-weight: 500;
    font-family: 'Raleway', sans-serif;
    font-size: 1.7rem;
    text-transform:uppercase;
    letter-spacing:0.1rem;
  }
  img{
     height:40vh;
     width:100%;
     object-fit:cover;
 }
`;
