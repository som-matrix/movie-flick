import styled from "styled-components";

export const StyledHeader = styled.div`
  min-height: 8vh;
  width: 100%;
  background-color: #333;
  .main-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:8vh;
    margin:auto;
    padding:0 4rem;
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
`;
