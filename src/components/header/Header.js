import {useState} from "react";
import {useDispatch} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark, faSearch} from '@fortawesome/free-solid-svg-icons'

import css from './header.module.css'
import {movieActions} from "../../redux";
import {HeaderMenu} from "../headerMenu/HeaderMenu";



const Header = () => {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()


    const changeValue = (value) => {
        setInputValue(value)
        dispatch(movieActions.setSearch(value))
    }

    return (
        <div className={css.wrap}>
            <header className={css.header}>
                <div className={css.logo}>Vasyl Olesh</div>
                <HeaderMenu/>
                <div className={css.inputBlock} >
                    <input type="text" required="required" value={inputValue} onChange={(elem)=>changeValue(elem.target.value)}/>
                    <span>Find</span>
                    <div className={css.searchIcon}>{inputValue?<FontAwesomeIcon onClick={()=>changeValue('')} icon={faXmark} />:<FontAwesomeIcon icon={faSearch} />}</div>
                    <i></i>
                </div>
                <div className={css.userDiv}>user</div>
            </header>
        </div>
    );
};

export {Header};