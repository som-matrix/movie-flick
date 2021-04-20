import styled from "styled-components";

export const StyledDetails = styled.div`
  min-height: 100vh;
  height:auto;
  width: 100%;
  max-width: 100%;
  position: relative;
`;
export const StyledMovieDetails = styled.div`
  height:100%;
  width: 100%;
  max-width: 100%;
`;
export const StyledSeriesDetails = styled.div`
  height:100%;
  width: 100%;
  max-width:100%;
`;
export const StyledBackground = styled.div`
  height: 55rem;
  width:100%;
  filter: blur(5px) brightness(0.5);
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
    max-width: 100%;
  }
`;
export const StyledFlexDetails = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1200px;
  height:110rem;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .poster {
    img {
      height: 50vh;
    }
  }
  .description{
      padding:1.5rem 5rem 0 5rem;
      width: 100%;
      height: 50rem;
      .title{
          padding:1rem 1rem;
          width: 80%;
          margin-left:1rem;
          h2{
              color:#fff;
              font-size:3rem;
              font-weight:500;
              letter-spacing:0.3rem;
              text-transform:uppercase;
          }
          h3{ 
              color:#fff;
              font-size:1.8rem;
              font-weight:500;
          }
      }
      .genres{
          padding:1rem 1rem;
          margin-left:1rem;
          display:inline-block;
      }
      .overview{
          padding:3rem 0;
          max-width:100%;
          span{
              padding-left:2rem 1rem;
              margin-left:2rem;
              font-size:1.8rem;
              color:#fff;
          }
          p{
              line-height:1.5;
              font-size:1.6rem;
              font-weight:500;
              color:#fff;
          }
      }
      .status{
          display:flex;
          justify-content:space-between;
          align-items:center;
          h4{
              font-size:1.4rem;
          }
      }
      .creators{
        padding:2rem 1rem;
        margin-left:1rem;
        display:inline-block;
      }
  }
  @media screen  and (max-width:1234px){
      flex-direction:column;
      max-width:100%;
      top:70%;
      .poster{
        
      }
      .description{
        padding:0;
        margin:0;
        .title{
          width:100%;
        }
        .overview{
          width:100%;
        }
      }
  }
`;
