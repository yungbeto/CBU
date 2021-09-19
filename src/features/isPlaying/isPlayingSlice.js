import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
    isCurrentlyPlaying: '',
    songUrl: '',
}

export const isPlayingSlice = createSlice({
    name: 'isPlaying',
    initialState,
    reducers:{
        play: (state, action) =>{
            const { title, url, id} = action.payload
            console.log('state: ',state)
            console.log("action: ",action)
            state.isCurrentlyPlaying = title
            state.songUrl = url
            state.songId = id

            state.value = !state.value
        },
        stop: (state, action) => {
            state.isCurrentlyPlaying = ''
            state.songUrl = ''
            state.value = !state.value
        },
    }
})

export const {play, stop} = isPlayingSlice.actions

export default isPlayingSlice.reducer