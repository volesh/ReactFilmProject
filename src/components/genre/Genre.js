import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {genresActions} from "../../redux";
import css from './genre.module.css'

const Genre = () => {
    const dispatch = useDispatch()
    const {genres} = useSelector(state => state.genresReducer)

    useEffect(()=>{
        dispatch(genresActions.getGenres())
    },[])


    return (
        <div className={css.genresDiv}>
            {genres?.map(genre => <div className={css.genre}>{genre.name}</div>)}
        </div>
    );
};

export {Genre};