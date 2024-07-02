import { createAction, createReducer, on } from "@ngrx/store";

interface trialRI {
    showParagraph:boolean,
    name:string
}

const initialState:trialRI = {
    showParagraph:false,
    name:'Kihejo'
}

export const trialReducer = createReducer (
    initialState,
    on(createAction('Checked'),(state)=>{
        return{
            ...state,
            showParagraph:!state.showParagraph,
            name:state.name
        }
    })
)