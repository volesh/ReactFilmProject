import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import css from './movie.module.css'
import {useParams} from "react-router-dom";
import {movieActions} from "../../redux";



const Movie = () => {
    const {selectedMovie} = useSelector(state => state.movieReducer)
    const dispatch = useDispatch()
    const {id} = useParams()


    useEffect(()=>{
        console.log(id);
        dispatch(movieActions.setCurrentMovieById({id}))
        console.log('ldkfs');
    },[])

    return (
        <div className={css.block}>
            <img src={`https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}`}/>
        </div>
    );
};

export {Movie};