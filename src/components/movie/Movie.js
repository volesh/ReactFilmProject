import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faHeart} from '@fortawesome/free-solid-svg-icons'
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import {movieActions, usersFilmsActions} from "../../redux";
import css from './movie.module.css'
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";



const Movie = () => {
    const {selectedMovie} = useSelector(state => state.movieReducer)
    const {favoriteIds, watchedIds} = useSelector(state => state.usersFilmsReducer)
    const dispatch = useDispatch()
    const {id} = useParams()
    const [open, setOpen] = React.useState(false);

    useEffect(()=>{
        dispatch(movieActions.setCurrentMovieById({id}))
    },[selectedMovie])

    const addToFavorite = (film) =>{
        dispatch(usersFilmsActions.addFavoriteFilm(film))
    }

    const addToWatched = (film) =>{
        dispatch(usersFilmsActions.addWatchedFilm(film))
    }

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <>
            {(selectedMovie && selectedMovie.id==id) &&
                <div className={css.block}>
                    <div className={css.backDrop}>
                        <img src={`https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}`} alt={selectedMovie.title}/>
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
                                            handleClick()
                                        }
                                        }><FontAwesomeIcon className={favoriteIds.includes(selectedMovie.id)?css.chosed:''} icon={faHeart}/></button>
                                        <p>Favorite</p>
                                    </div>
                                    <div>
                                        <button onClick={()=>{
                                            addToWatched(selectedMovie)
                                            handleClick()
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
                                <span>{genre.name}</span>)}</div>
                        </div>
                        <i></i>

                        <div>
                            <h3>Companies</h3>
                            <div className={css.genresDiv}>{selectedMovie.production_companies.map(company =>
                                <span>{company.name}</span>)}</div>
                        </div>
                        <i></i>

                        <div>
                            <h3>Runtime</h3>
                            <p>{`${Math.floor(selectedMovie.runtime / 60)}h ${selectedMovie.runtime % 60}min`}</p>
                        </div>
                        <i></i>

                        <div>
                            <h3>Production country</h3>
                            <p>{selectedMovie.production_countries[0].name}</p>
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
                    <Snackbar
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        message='Success'
                        action={action}
                    />
                </div>}

        </>
    );
};

export {Movie};