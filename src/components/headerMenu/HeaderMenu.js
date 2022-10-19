import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFilm, faHeart, faEye} from '@fortawesome/free-solid-svg-icons'

import css from './headerMenu.module.css'
import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

const HeaderMenu = () => {
    const navigate = useNavigate()
    const [child, setChild] = useState(1)
    const location = useLocation()

    console.log(location);
    const active = (n) =>{
        setChild(n)
        switch (n) {
            case 1:
                navigate('/maine/films')
                break
            case 2:
                navigate('/maine/favorite')
                break
            case 3:
                navigate('/maine/watched')
        }

    }

    return (
        <div className={css.navigate}>
            <ul>
                <li onClick={() => active(1)}
                    className={(location.pathname === '/maine/films') ? css.active : undefined}>
                    <a>
                        <span className={css.icon}><FontAwesomeIcon icon={faFilm}/></span>
                        <span className={css.text}>Films</span>
                    </a>
                </li>
                <li onClick={() => active(2)}
                    className={location.pathname === '/maine/favorite' ? css.active : undefined}>
                    <a>
                        <span className={css.icon}><FontAwesomeIcon icon={faHeart}/></span>
                        <span className={css.text}>Favorite</span>
                    </a>
                </li>
                <li onClick={() => active(3)}
                    className={location.pathname === '/maine/watched' ? css.active : undefined}>
                    <a>
                        <span className={css.icon}><FontAwesomeIcon icon={faEye}/></span>
                        <span className={css.text}>Viewed</span>
                    </a>
                </li>
                {(location.pathname === '/maine/films' || location.pathname === '/maine/favorite' || location.pathname === '/maine/watched') &&
                    <div className={css.indicator}></div>}

            </ul>
            <div></div>
        </div>
    );
};

export {HeaderMenu};