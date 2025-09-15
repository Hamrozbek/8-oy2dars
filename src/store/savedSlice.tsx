import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { ProductType } from "../@Types/ProductType"

const initialState: ProductType[] = []

export const savedSlice = createSlice({
    name: "savedList",
    initialState,
    reducers: {
        collectSavedList: (state, action: PayloadAction<ProductType>) => {
            const isBor = state.some(item => item.id === action.payload.id)
            if (isBor) {
                const deleteIndex = state.findIndex(item => item.id === action.payload.id)
                state.splice(deleteIndex, 1)
            } else {
                state.push(action.payload)
            }
        }
    }
})

export const { collectSavedList } = savedSlice.actions
