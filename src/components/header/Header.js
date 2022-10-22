import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark, faSearch, faCircleUser} from '@fortawesome/free-solid-svg-icons'

import css from './header.module.css'
import {movieActions} from "../../redux";
import {HeaderMenu} from "../headerMenu/HeaderMenu";
import {useNavigate} from "react-router-dom";


const Header = ({setActivePopup}) => {
    const [inputValue, setInputValue] = useState('')
    const {userName} = useSelector(state => state.usersFilmsReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const changeValue = (value) => {
        setInputValue(value)
        dispatch(movieActions.setSearch(value))
    }



    return (
        <div className={css.wrap}>
            <header className={css.header}>
                <div onClick={()=>navigate('/maine/films')} className={css.logo}>Vasyl Olesh</div>
                <HeaderMenu/>
                <div className={css.inputBlock} >
                    <input type="text" required="required" value={inputValue} onChange={(elem)=>changeValue(elem.target.value)}/>
                    <span>Find</span>
                    <div className={css.searchIcon}>{inputValue?<FontAwesomeIcon onClick={()=>changeValue('')} icon={faXmark} />:<FontAwesomeIcon icon={faSearch} />}</div>
                    <i></i>
                </div>
                <div className={css.userDiv}>
                    <FontAwesomeIcon className={css.userIcon} icon={faCircleUser} />
                    {userName?<p onClick={()=>setActivePopup(true)}>{userName}</p>:<p>User</p>}
                </div>
            </header>
        </div>
    );
};

export {Header};