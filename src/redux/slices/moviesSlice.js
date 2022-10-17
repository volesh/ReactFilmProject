import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    movies:[],
    search:'',
    pages:0,
    currentPage:1,
    selectedMovie:null,
    error:null,
    isLoading:false
}

const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async ({currentPage}, {rejectWithValue})=>{
        try {
            const {data} = await moviesService.getAll(currentPage)
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const getBySearchParams = createAsyncThunk(
    'moviesSlice/getBySearchParams',
    async ({currentPage, search}, {rejectWithValue})=>{
        try {
            const {data} = await moviesService.getBySearchParams(currentPage, search)
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const getWithGenre = createAsyncThunk(
    'moviesSlice/getWithGenre',
    async ({currentPage, genre}, {rejectWithValue})=>{
        try {
            const {data} = await moviesService.getWithGenres(currentPage, genre)
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)


const setCurrentMovieById = createAsyncThunk(
    'moviesSlice/setCurrentMovieById',
    async ({id}, {rejectWithValue})=>{
        try {
            const {data} = await moviesService.getMovieById(id)
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)



const moviesSlice = createSlice({
    name:'moviesSlice',
    initialState,
    reducers:{
        setSearch:(state, action)=>{
            state.search = action.payload
        },
        setCurrentPage:(state, action)=>{
            state.currentPage = action.payload
        }
    },
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                state.pages = action.payload.total_pages
                state.movies = action.payload.results
            })
            .addCase(getBySearchParams.fulfilled, (state, action)=>{
                state.pages = action.payload.total_pages
                state.movies = action.payload.results
            })
            .addCase(getWithGenre.fulfilled, (state, action)=>{
                state.pages = action.payload.total_pages
                state.movies = action.payload.results
            })
            .addCase(setCurrentMovieById.fulfilled, (state, action)=>{
                state.selectedMovie = action.payload
                console.log(state.selectedMovie);
            })
})

const {reducer:movieReducer, actions:{setSearch, setCurrentPage}} = moviesSlice

const movieActions = {
    getAll,
    getBySearchParams,
    setSearch,
    getWithGenre,
    setCurrentPage,
    setCurrentMovieById,
}

export {movieReducer, movieActions}