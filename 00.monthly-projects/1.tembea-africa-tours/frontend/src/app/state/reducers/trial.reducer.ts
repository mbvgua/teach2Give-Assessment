import { createAction, createReducer, on } from "@ngrx/store";
import { Toggle } from "../actions/trial.actions";

export interface trialRI {
    showParagraph:boolean,
    name:string
}

const initialState:trialRI = {
    showParagraph:false,
    name:'Kihejo'
}

export const trialReducer = createReducer (
    initialState,
    on(Toggle,(state)=>{
        return{
            ...state,
            showParagraph:!state.showParagraph,
            name:state.name
        }
    })
)