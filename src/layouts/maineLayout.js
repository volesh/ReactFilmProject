import React from "react";
import {Outlet} from "react-router-dom";

import {Footer, Header} from "../components";
import css from './maineLayout.module.css'

const MaineLayout = () => {
    return (
        <div className={css.wrapper}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {MaineLayout};