import { configureStore } from "@reduxjs/toolkit";
import { likeSlice } from "./likeSlice";
import { savedSlice } from "./savedSlice";

export const store = configureStore({
    reducer:{
        like:likeSlice.reducer,
        saved:savedSlice.reducer
    }
})
