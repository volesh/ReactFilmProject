import React from "react";
import {useDispatch} from "react-redux";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";

import {usersFilmsActions} from "../../redux";
import css from "../favoriteMovie/favoriteMovie.module.css";

const WatchedMovie = ({movie}) => {
    const {poster_path,title, overview, vote_average} = movie
    const dispatch = useDispatch()

    const removeFromWatched = (film) =>{
        dispatch(usersFilmsActions.addWatchedFilm(film))
    }

    return (
        <div className={css.card}>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
            <div className={css.infoBlock}>
                <h3>{title}</h3>
                <p>{overview}</p>
                <Stack spacing={1}>
                    <Rating name="half-rating-read"  defaultValue={vote_average / 2} precision={0.5} size={'small'} readOnly />
                </Stack>
            </div>
            <div className={css.btnDiv}>
                <button onClick={()=>{
                    removeFromWatched(movie)
                }}>Remove from watched</button>
            </div>
        </div>
    );
};


export {WatchedMovie};