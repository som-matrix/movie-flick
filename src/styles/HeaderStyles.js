import styled from "styled-components";

export const StyledHeader = styled.div`
  height: 10rem;
  width: 100%;
  background-color: #333;
  .main-wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width:100%;
    max-width:100%;
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
  @media screen and (max-width:800px){
    .left-wrapper{
      width:95%;
    } 
    .right-wrapper{
       margin:0 auto;
       position:absolute;
       top:120%;
       left:5;
       transform:translate(0,-50%)
       input{
         width:100%;
       }
       .menu{
         display:none;
       }
    }
  }
  @media screen and (max-width:468px){
    .left-wrapper{
       flex-direction:column;
       .logo{
        padding:1rem 0;
       }
    }
  }
`;