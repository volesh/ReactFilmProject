import {useSelector} from "react-redux";

import {FavoriteMovie} from "../favoriteMovie/FavoriteMovie";
import css from './favorite.module.css'

const Favorite = () => {
    const {favorite} = useSelector(state => state.usersFilmsReducer)


    return (
        <div className={css.wrap}>
            <h2>Favorite movies</h2>
            {favorite.map(movie => <FavoriteMovie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Favorite};