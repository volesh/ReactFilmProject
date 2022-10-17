import {Movies} from "../../components";
import css from './mainePage.module.css'


const MainePage = () => {
    return (
            <div className={css.wrap}>
            <Movies/>
        </div>
    );
};

export {MainePage};