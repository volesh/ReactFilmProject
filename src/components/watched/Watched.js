import React from "react";
import {useSelector} from "react-redux";

import css from "../favorite/favorite.module.css";
import {WatchedMovie} from "../watchedMovie/WatchedMovie";

const Watched = () => {
    const {watched} = useSelector(state => state.usersFilmsReducer)


    return (
        <div className={css.wrap}>
            <h2>Watched movies</h2>
            {watched.map(movie => <WatchedMovie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Watched};