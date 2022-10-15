import css from './movieCard.module.css'


const MovieCard = ({movie}) => {
    return (
        <div className={css.card}>
            <img className={css.img} src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}/>
            <h3>{movie.title}</h3>
        </div>
    );
};

export {MovieCard};