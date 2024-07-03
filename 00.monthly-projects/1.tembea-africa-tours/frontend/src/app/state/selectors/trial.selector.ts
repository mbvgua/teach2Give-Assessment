import { createFeatureSelector, createSelector } from "@ngrx/store"
import { trialRI } from "../reducers/trial.reducer"

// select the slice
const trialSelector = createFeatureSelector<trialRI>('trial')

// select single property from within the slice
export const trialParagraphSelector = createSelector(
    trialSelector,
    (state)=>state.showParagraph
)