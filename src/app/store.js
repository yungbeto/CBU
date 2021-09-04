import { configureStore } from "@reduxjs/toolkit";
import isPlayingReducer from "../features/isPlaying/isPlayingSlice";

export const store = configureStore({
    reducer: {
        isPlaying: isPlayingReducer,
    },
})

