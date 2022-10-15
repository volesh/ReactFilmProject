import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {moviesService} from "../../services";

const initialState = {
    movies:[],
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

const moviesSlice = createSlice({
    name:'moviesSlice',
    initialState,
    reducers:{},
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                state.pages = action.payload.total_pages
                state.movies = action.payload.results
            })
})

const {reducer:movieReducer, actions:{}} = moviesSlice

const movieActions = {
    getAll
}

export {movieActions, movieReducer}