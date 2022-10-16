import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import {movieActions} from "../../redux";
import {MovieCard} from "../movieCard/MovieCard";
import css from './movies.module.css'
import {Genre} from "../genre/Genre";


const Movies = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const {movies, search, pages} = useSelector(state => state.movieReducer)
    const dispatch = useDispatch()


    useEffect(()=>{
        if (search === '' || !search){
            dispatch(movieActions.getAll({currentPage}))
        }else {
            dispatch(movieActions.getBySearchParams({currentPage, search}))
        }
    },[currentPage, search])

    return (
        <div className={css.wrap}>
            <Genre/>
            <h3>Фільми</h3>
            <div className={css.moviesDiv}>
                {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
            <div>
                <Stack spacing={2}>
                    <Pagination
                        page={currentPage}
                        count={pages > 500 ? 500 : pages}
                        onChange={(_, page) => setCurrentPage(page)}
                    />
                </Stack>
            </div>
        </div>
    );
};

export {Movies};