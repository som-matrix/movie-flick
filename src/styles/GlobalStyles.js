import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 *{
     margin:0;
     padding:0;
     box-sizing:border-box;
 }
 html{
     font-size:62.5%;
 }
 body{
     background:#000;
     overflow-x:hidden;
     font-family: 'Poppins', sans-serif;
 }
 h1{
     font-size:2.5rem;
     color:red;
     font-family: 'Raleway', sans-serif;
     font-weight:500;
     letter-spacing:.2rem;
     text-transform:uppercase;
 }
 h2{
     font-size:2rem;
     color:#fff;
     font-weight:500;
 }
 h3{
     font-size:1.5rem;
     color:#fff;
     font-weight:400;
 }
 h4{
    padding: 0rem 2rem;
    color: rgba(238, 238, 238,0.5);
    font-weight: 500;
    font-size: 1.5rem;
 }
 p{
     font-size:1.3rem;
     color: rgba(238, 238, 238,0.5);
     font-weight: 500;
     padding:0 2rem;
 }
 a{
     text-decoration:none;
     font-size:1.8rem;
     color:#fff;
     font-weight:400;
 }
 
 input{
     border:none;
     outline:none;
     padding:1rem 2rem;
     border-radius:0.8rem;
 }
 button{
     border:none;
     outline:none;
     background:red;
     color:#fff;
     font-weight:500;
     padding:1rem 2rem;
     border-radius:0.8rem;
     cursor:pointer;
 }
`