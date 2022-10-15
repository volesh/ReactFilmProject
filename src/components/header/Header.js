import {useState} from "react";
import {useDispatch} from "react-redux";

import css from './header.module.css'
import {movieActions} from "../../redux";


const Header = () => {
    const [inputValue, setInputValue] = useState(null)
    const dispatch = useDispatch()


    const changeValue = (value) => {
        setInputValue(value)
        dispatch(movieActions.setSearch(value))
    }

    return (
        <div className={css.wrap}>
            <header className={css.header}>
                <div className={css.logo}>Logo</div>
                <div>
                    <input className={css.input} value={inputValue} onChange={(elem)=>changeValue(elem.target.value)} type="text"/>
                </div>
                <div className={css.userDiv}>user</div>
            </header>
        </div>
    );
};

export {Header};