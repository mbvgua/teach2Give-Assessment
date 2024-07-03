import { counterRI } from "./reducers/counter.reducer";
import { trialRI } from "./reducers/trial.reducer";



export interface AppState {
    trial:trialRI,
    counter:counterRI
}