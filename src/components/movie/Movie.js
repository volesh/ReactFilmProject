import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faHeart} from '@fortawesome/free-solid-svg-icons'
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";


import {movieActions, usersFilmsActions} from "../../redux";
import css from './movie.module.css'
import {RatingPopup} from "../ratingPopup/RatingPopup";



const Movie = () => {
    const {selectedMovie, error} = useSelector(state => state.movieReducer)
    const {favoriteIds, watchedIds} = useSelector(state => state.usersFilmsReducer)
    const [active, setActive] = useState(false)
    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(()=>{
        dispatch(movieActions.setCurrentMovieById({id}))
    },[])

    const addToFavorite = (film) =>{
        dispatch(usersFilmsActions.addFavoriteFilm(film))
    }

    const addToWatched = (film) =>{
        if(watchedIds.includes(film.id)){
            console.log(true);
            dispatch(usersFilmsActions.addWatchedFilm(film))
        }else {
            setActive(true)
        }
    }
    console.log(error);
    console.log(selectedMovie);
    return (
        <>
            {error &&
                <div className={css.error}>
                    Something went wrong
                </div>
            }
            {(selectedMovie && selectedMovie.id==id) &&
                <div className={css.block}>
                    {active&&<RatingPopup dispatch={dispatch} film={selectedMovie} setActive={setActive}/>}
                    <div className={css.backDrop}>
                        {selectedMovie.backdrop_path?<img src={`https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}`} alt={selectedMovie.title}/>:<div className={css.empty}> No photo</div>}
                        <div className={css.posterBlock}>
                            <div className={css.poster}>
                                <img src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`} alt={selectedMovie.title}/>
                            </div>
                            <div className={css.infoBlock}>
                                <div className={css.title}>{selectedMovie.title}</div>
                                <div className={css.buttonsDiv}>
                                    <div>
                                        <button onClick={()=>{
                                            addToFavorite(selectedMovie)
                                        }
                                        }><FontAwesomeIcon className={favoriteIds.includes(selectedMovie.id)?css.chosed:''} icon={faHeart}/></button>
                                        <p>Favorite</p>
                                    </div>
                                    <div>
                                        <button onClick={()=>{
                                            addToWatched(selectedMovie)
                                        }
                                        }><FontAwesomeIcon className={watchedIds.includes(selectedMovie.id)?css.chosed:''} icon={faEye}/></button>
                                        <p>Reviewed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.allInformation}>
                        <div>
                            <h3>Overview</h3>
                            <p>{selectedMovie.overview}</p>
                        </div>
                        <i></i>

                        <div>
                            <h3>Genres</h3>
                            <div className={css.genresDiv}>{selectedMovie.genres.map(genre =>
                                <span key={genre.id}>{genre.name}</span>)}</div>
                        </div>
                        <i></i>

                        <div>
                            <h3>Companies</h3>
                            <div className={css.genresDiv}>{selectedMovie.production_companies.map((company, index) =>
                                <span key={index}>{company.name}</span>)}</div>
                        </div>
                        <i></i>

                        <div>
                            <h3>Runtime</h3>
                            <p>{`${Math.floor(selectedMovie.runtime / 60)}h ${selectedMovie.runtime % 60}min`}</p>
                        </div>
                        <i></i>

                        <div>
                            <h3>Production country</h3>
                            <p>{selectedMovie.production_countries[0]?.name}</p>
                        </div>
                        <i></i>

                        <div className={css.retingDiv}>
                            <h3>Rating</h3>
                            <Stack className={css.reting} spacing={1}>
                                <Rating name="half-rating-read" defaultValue={selectedMovie.vote_average / 2}
                                        precision={0.5} size={'small'} readOnly/>
                                <p>{(selectedMovie.vote_average / 2).toFixed(1)}</p>
                            </Stack>
                        </div>
                        <i></i>
                    </div>
                </div>}
        </>
    );
};

export {Movie};