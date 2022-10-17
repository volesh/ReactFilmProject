import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import css from './movieCard.module.css'


const MovieCard = ({movie}) => {
    const {title,vote_average, poster_path,genre_ids,original_language, release_date, vote_count} = movie

    return (
        <div className={css.card}>
            <img className={css.img} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={'Image not found'}/>
            <div>
                <div className={css.movieInfo}>
                    <p>INFO</p>
                    <div>Name - {title}</div>
                    <div>Original language - {original_language}</div>
                    <div>Release date - {release_date}</div>
                    <div>Genres :</div>
                    <div className={css.rating}>
                        <span>Rating - </span>
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={vote_average / 2} precision={0.5} size={'small'} readOnly />
                        </Stack>
                        <span>{(vote_average / 2).toFixed(1)}</span>
                    </div>
                    <div>Vote count - {vote_count}</div>
                </div>
            </div>
        </div>
    );
};

export {MovieCard};