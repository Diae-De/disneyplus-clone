import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    movies:[]
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovie:(state,action)=>{
            state.movies = action.payload;
        }
    }
})


export const {setMovie} = movieSlice.actions;

export const selectMovies = (state) => state.movie.movies;

export default movieSlice.reducer;