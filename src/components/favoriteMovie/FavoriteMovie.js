import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import css from './favoriteMovie.module.css'
import {usersFilmsActions} from "../../redux";
import {useDispatch} from "react-redux";


const FavoriteMovie = ({movie}) => {
    const {poster_path,title, overview, vote_average} = movie
    const dispatch = useDispatch()

    const addToFavorite = (film) =>{
        dispatch(usersFilmsActions.addFavoriteFilm(film))
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
                    addToFavorite(movie)
                }}>Remove from favorite</button>
            </div>
        </div>
    );
};

export {FavoriteMovie};