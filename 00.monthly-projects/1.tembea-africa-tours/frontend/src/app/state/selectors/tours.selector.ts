import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TourInterface } from "../reducers/tours.reducers";


const tourFeatureSelector = createFeatureSelector<TourInterface>('tours')

export const tourSelector = createSelector(tourFeatureSelector,(state) => state.getToursSuccess)
// export const tourSelector = createSelector(tourFeatureSelector,(state) => state.getToursSuccess)
// export const tourSelector = createSelector(tourFeatureSelector,(state) => state.getToursSuccess)
// export const tourSelector = createSelector(tourFeatureSelector,(state) => state.getToursSuccess)
// export const tourSelector = createSelector(tourFeatureSelector,(state) => state.getToursSuccess)
// export const tourSelector = createSelector(tourFeatureSelector,(state) => state.getToursSuccess)