import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HotelInterface } from "../reducers/hotels.reducers";


const hotelFeatureSelector = createFeatureSelector<HotelInterface>('hotels')

export const hotelSelector = createSelector(hotelFeatureSelector, (state) => state.hotels)
// export const hotelSelector = createSelector(hotelFeatureSelector, (state) => state.hotels)
// export const hotelSelector = createSelector(hotelFeatureSelector, (state) => state.hotels)
// export const hotelSelector = createSelector(hotelFeatureSelector, (state) => state.hotels)
// export const hotelSelector = createSelector(hotelFeatureSelector, (state) => state.hotels)
// export const hotelSelector = createSelector(hotelFeatureSelector, (state) => state.hotels)
// export const hotelSelector = createSelector(hotelFeatureSelector, (state) => state.hotels)