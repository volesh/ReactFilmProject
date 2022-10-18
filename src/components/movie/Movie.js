import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faHeart} from '@fortawesome/free-solid-svg-icons'

import {movieActions} from "../../redux";
import css from './movie.module.css'



const Movie = () => {
    const {selectedMovie} = useSelector(state => state.movieReducer)
    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(()=>{
        dispatch(movieActions.setCurrentMovieById({id}))
    },[id])

    return (
        <div className={css.block}>
            <div className={css.backDrop}>
                {selectedMovie?<img src={`https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}`}/>:<></>}
                <div className={css.posterBlock}>
                    <div className={css.poster}>
                        {selectedMovie?<img src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}/>:<></>}
                    </div>
                    <div className={css.infoBlock}>
                        <div className={css.title}>{selectedMovie?selectedMovie.title:''}</div>
                        <div className={css.buttonsDiv}>
                            <div>
                                <button><FontAwesomeIcon icon={faHeart} /></button>
                                <p>Favorite</p>
                            </div>
                            <div>
                                <button><FontAwesomeIcon icon={faEye} /></button>
                                <p>Reviewed</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={css.allInformation}>

            </div>
        </div>
    );
};

export {Movie};