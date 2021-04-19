import React,{useEffect} from 'react'
import { useSelector } from "react-redux";
import {  useHistory } from "react-router-dom";
const SeriesDetails = () => {
    const history = useHistory();
    const { tvData } = useSelector((state) => state.tvDetails);
    const reloadHandler = ()=>{
        history.push(`/tv`)
    }
    useEffect(()=>{
        window.addEventListener('load',reloadHandler)
    })
    return (
        <div key={tvData.id}>
            <h2  id={tvData.id}>{tvData.overview}</h2>
        </div>
    )
}

export default SeriesDetails
