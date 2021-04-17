import React from 'react'
// Styled Components
import {StyledMovie} from '../styles/MovieStyles'
const Movies = ({id,title,image,releaseDate,voteCount}) => {
    
    return (
        <StyledMovie>
           <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face${image}`} alt={title}/>
           <h3>{title}</h3>
           <div className="flex">
             <h4>{`Released ${releaseDate}`}</h4>
             <p>{voteCount}</p>
           </div>
        </StyledMovie>
    )
}

export default Movies
