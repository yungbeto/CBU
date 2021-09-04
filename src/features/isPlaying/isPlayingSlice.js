import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
}

export const isPlayingSlice = createSlice({
    name: 'isPlaying',
    initialState,
    reducers:{
        play: (state) =>{
            state.value = true
        },
        stop: (state) => {
            state.value = false
        },
    }
})

export const {play, stop} = isPlayingSlice.actions

export default isPlayingSlice.reducer