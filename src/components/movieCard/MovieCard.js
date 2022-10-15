import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import css from './movieCard.module.css'


const MovieCard = ({movie}) => {
    const {backdrop_path, title,vote_average} = movie

    return (
        <div className={css.card}>
            <img className={css.img} src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt={'Image not found'}/>
            <h3>{title}</h3>
            <div >
                <div className={css.rating}>
                    <Stack spacing={1}>
                        <Rating name="half-rating-read" defaultValue={vote_average / 2} precision={0.5} size={'small'} readOnly />
                    </Stack>
                    <span>{(vote_average / 2).toFixed(1)}</span>
                </div>
            </div>
        </div>
    );
};

export {MovieCard};