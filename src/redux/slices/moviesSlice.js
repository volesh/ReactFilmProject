import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {genresService, moviesService} from "../../services";

const initialState = {
    movies:[],
    genres:[],
    selectedGenre:null,
    search:'',
    pages:0,
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

const getGenres = createAsyncThunk(
    'moviesSlice/getGenres',
    async (_, {rejectWithValue})=>{
        try {
            const {data} = await genresService.getGenres()
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
        setGenre:(state, action)=>{
            state.search = action.payload
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
            .addCase(getGenres.fulfilled, (state, action)=>{
                state.genres = action.payload
            })
})

const {reducer:movieReducer, actions:{setSearch}} = moviesSlice

const movieActions = {
    getAll,
    getBySearchParams,
    setSearch,
}

export {movieReducer, movieActions}