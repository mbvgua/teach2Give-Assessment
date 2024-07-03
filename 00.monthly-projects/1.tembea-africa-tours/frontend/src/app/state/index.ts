import { counterRI } from "./reducers/counter.reducer";
import { trialRI } from "./reducers/trial.reducer";
import { AuthInterface } from "./reducers/auth.reducer";


export interface AppState {
    trial:trialRI,
    counter:counterRI,
    auth: AuthInterface,
}