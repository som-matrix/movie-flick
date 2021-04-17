import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {loadMovies} from './actions/movieAction'
import {loadTv} from './actions/tvAction'
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(loadMovies())
    dispatch(loadTv())
  })
  return (
    <div className="App">
      MovieFlicks
    </div>
  );
}

export default App;
