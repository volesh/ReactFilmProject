import {combineReducers} from "redux";

import {movieReducer} from "../slices";
import {configureStore} from "@reduxjs/toolkit";


const rootReducer = combineReducers({
    movieReducer
})

const setupStore = () => configureStore({
    reducer:rootReducer
})

export {setupStore}