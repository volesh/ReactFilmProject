import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import {movieActions} from "../../redux";
import {MovieCard} from "../movieCard/MovieCard";
import css from './movies.module.css'


const Movies = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const {movies, pages} = useSelector(state => state.movieReducer)
    const dispatch = useDispatch()
    console.log(currentPage);

    useEffect(()=>{
        dispatch(movieActions.getAll({currentPage}))
    },[currentPage])

    return (
        <div className={css.wrap}>
            <div className={css.genresDiv}>
                <div>Жанр</div>
                <div>Жанр</div>
                <div>Жанр</div>
                <div>Жанр</div>
                <div>Жанр</div>
            </div>
            <h3>Фільми</h3>
            <div className={css.moviesDiv}>
                {movies.map(movie=><MovieCard key={movie.id} movie={movie}/>)}
            </div>
            <div>
                <Stack spacing={2}>
                    <Pagination
                        page={currentPage}
                        count={pages}
                        onChange={(_, page)=>setCurrentPage(page)}
                    />
                </Stack>
            </div>
        </div>
    );
};

export {Movies};