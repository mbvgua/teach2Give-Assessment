import { createFeatureSelector, createSelector } from "@ngrx/store"
import { counterRI } from "../reducers/counter.reducer"

// select the slice
const counterSelector = createFeatureSelector<counterRI>('counter')

// select single property from within the slice
export const counterCountSelector = createSelector(
    counterSelector,
    (state)=>state.count
)
