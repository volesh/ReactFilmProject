import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFilm, faUser, faHeart, faEye} from '@fortawesome/free-solid-svg-icons'

import css from './headerMenu.module.css'
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const HeaderMenu = () => {
    const navigate = useNavigate()
    const [child, setChild] = useState(1)

    const active = (n) =>{
        setChild(n)
        switch (n) {
            case 1:
                navigate('/maine/films')
        }

    }

    return (
        <div className={css.navigate}>
            <ul>
                <li onClick={()=>active(1)} className={child===1?css.active:undefined}>
                    <a>
                        <span className={css.icon}><FontAwesomeIcon icon={faFilm} /></span>
                        <span className={css.text}>Films</span>
                    </a>
                </li>
                <li onClick={()=>active(2)} className={child===2?css.active:undefined}>
                    <a>
                        <span className={css.icon}><FontAwesomeIcon icon={faHeart} /></span>
                        <span className={css.text}>Favorite</span>
                    </a>
                </li>
                <li onClick={()=>active(3)} className={child===3?css.active:undefined}>
                    <a>
                        <span className={css.icon}><FontAwesomeIcon icon={faEye} /></span>
                        <span className={css.text}>Viewed</span>
                    </a>
                </li>
                <div className={css.indicator}></div>
            </ul>
            <div></div>
        </div>
    );
};

export {HeaderMenu};