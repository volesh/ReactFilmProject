import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faHeart} from '@fortawesome/free-solid-svg-icons'

import {movieActions} from "../../redux";
import css from './movie.module.css'
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";



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
                {selectedMovie ? <img src={`https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}`}/> : <></>}
                <div className={css.posterBlock}>
                    <div className={css.poster}>
                        {selectedMovie ?
                            <img src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}/> : <></>}
                    </div>
                    <div className={css.infoBlock}>
                        <div className={css.title}>{selectedMovie ? selectedMovie.title : ''}</div>
                        <div className={css.buttonsDiv}>
                            <div>
                                <button><FontAwesomeIcon icon={faHeart}/></button>
                                <p>Favorite</p>
                            </div>
                            <div>
                                <button><FontAwesomeIcon icon={faEye}/></button>
                                <p>Reviewed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className={css.allInformation}>*/}
            {/*    <div className={css.overview}>*/}
            {/*        <div>{selectedMovie?<p>{selectedMovie.overview}</p>:<></>}</div>*/}
            {/*    </div>*/}
            {/*    <div>{selectedMovie?selectedMovie.genres.map(genre=><span>{genre.name}</span>):<></>}</div>*/}
            {/*    <div>{selectedMovie?<p>Production companies {selectedMovie.production_companies.map(company => <span>{company.name}</span>)}</p>:<></>}</div>*/}
            {/*    <div>{selectedMovie?<p>Release date <span>{selectedMovie.release_date}</span></p>:<></>}</div>*/}
            {/*    <div>{selectedMovie?<p>Runtime - {`${Math.floor(selectedMovie.runtime / 60)}h${selectedMovie.runtime & 60}min`}</p>:<></>}</div>*/}
            {/*    {selectedMovie?<div className={css.rating}>*/}
            {/*        <Stack spacing={1}>*/}
            {/*            <Rating name="half-rating-read" defaultValue={selectedMovie.vote_average / 2} precision={0.5} size={'small'} readOnly />*/}
            {/*            <span>{selectedMovie.vote_average / 2}</span>*/}
            {/*        </Stack>*/}
            {/*    </div>:<></>}*/}
            {/*</div>*/}

            <div className={css.allInformation}>
                <div>
                    <h3>Overview</h3>
                    {selectedMovie ? <p>{selectedMovie.overview}</p> : <></>}
                </div>
                <i></i>

                <div>
                    <h3>Genres</h3>
                    {selectedMovie ? <div className={css.genresDiv}>{selectedMovie.genres.map(genre =>
                        <span>{genre.name}</span>)}</div> : <></>}
                </div>
                <i></i>

                <div>
                    <h3>Companies</h3>
                    {selectedMovie ? <div className={css.genresDiv}>{selectedMovie.production_companies.map(company =>
                        <span>{company.name}</span>)}</div> : <></>}
                </div>
                <i></i>

                <div>
                    <h3>Runtime</h3>
                    {selectedMovie ?
                        <p>{`${Math.floor(selectedMovie.runtime / 60)}h ${selectedMovie.runtime % 60}min`}</p> : <></>}
                </div>
                <i></i>

                <div>
                    <h3>Production country</h3>
                    {selectedMovie ? <p>{selectedMovie.production_countries[0].name}</p> : <></>}
                </div>
                <i></i>

                <div className={css.retingDiv}>
                    <h3>Reting</h3>
                    {selectedMovie ?
                        <Stack className={css.reting} spacing={1}>
                            <Rating name="half-rating-read" defaultValue={selectedMovie.vote_average / 2}
                                    precision={0.5} size={'small'} readOnly/>
                        </Stack> : <></>}
                    {selectedMovie?<p>{(selectedMovie.vote_average / 2).toFixed(1)}</p>:<></>}

                </div>
                <i></i>
            </div>
        </div>
    );
};

export {Movie};