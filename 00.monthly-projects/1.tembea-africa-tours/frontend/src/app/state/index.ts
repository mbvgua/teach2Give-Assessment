import { counterRI } from "./reducers/counter.reducer";
import { trialRI } from "./reducers/trial.reducer";
import { AuthInterface } from "./reducers/auth.reducer";
import { TourInterface } from "./reducers/tours.reducers";
import { HotelInterface } from "./reducers/hotels.reducers";


export interface AppState {
    trial:trialRI,
    counter:counterRI,
    auth: AuthInterface,
    tours: TourInterface,
    hotels: HotelInterface,
}