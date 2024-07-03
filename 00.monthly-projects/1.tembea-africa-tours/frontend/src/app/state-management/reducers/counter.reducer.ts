import { createAction, createReducer, on } from "@ngrx/store";

export interface counterRI {
    count:number
}

const initialState:counterRI = {
    count:0
}

export const countReducer = createReducer (
    initialState,
    on(createAction('Increment'),(state)=>{
        return {
            ...state,
            count:state.count + 1
        }
    }),
    on(createAction('Decrement'),(state)=>{
        return {
            ...state,
            count:state.count - 1
        }
    }),
    on(createAction('Reset'),(state)=>{
        return {
            ...state,
            count:0
        }
    })
)