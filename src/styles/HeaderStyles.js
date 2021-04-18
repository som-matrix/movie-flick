import styled from "styled-components";

export const StyledHeader = styled.div`
  min-height: 8vh;
  width: 100%;
  background-color: #333;
  position: relative;
  .main-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
    margin: auto;
    padding: 0 4rem;
    .left-wrapper {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .routes {
        display: flex;
        justify-content: center;
        align-items: center;
        
        h3 {
          margin-left: 2rem;
          margin-bottom: 0.5rem;
        }
      }
    }
    .right-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      .menu {
        margin-left: 1rem;
      }
    }
  }
  .line {
    background: #fff;
    border-radius: 1.3rem;
    padding:0.5rem 2rem 0.5rem 0.3rem;
    text-align: center;
    margin-left:1rem;
    transition:all .3s;
    h3{
      color:#000;
    }
  }
`;
