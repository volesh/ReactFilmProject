import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import {genresActions, movieActions} from "../../redux";
import {MovieCard} from "../movieCard/MovieCard";
import css from './movies.module.css'
import {Genre} from "../genre/Genre";



const Movies = () => {
    const {movies, search, pages, currentPage} = useSelector(state => state.movieReducer)
    const {selectedGenre} = useSelector(state => state.genresReducer)
    const dispatch = useDispatch()

    useEffect(()=>{
        if ((search === '' || !search) && ! selectedGenre){
            dispatch(movieActions.getAll({currentPage}))
        }if(selectedGenre && (search === '' || !search)){
            dispatch(movieActions.getWithGenre({currentPage, genre:selectedGenre.toString()}))
        } else {
            dispatch(genresActions.setGenre(null))
            dispatch(movieActions.getBySearchParams({currentPage, search}))
        }
    },[currentPage, search, selectedGenre])

    const setCurrentPage = (page) => {
        dispatch(movieActions.setCurrentPage(page))
    }

    return (
        <div className={css.wrap}>
            <Genre/>
            <div className={css.moviesDiv}>
                {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
            <div className={css.paginationDiv}>
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