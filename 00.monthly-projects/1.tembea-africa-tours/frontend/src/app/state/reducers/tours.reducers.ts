import { createReducer, on } from "@ngrx/store"
import { Tours, toursResponse } from '../../models/tours';
import { TourActions } from "../actions/tours.actions";


// define the interface
export interface TourInterface {
    // get a tour
    id:string
      
    // get all tours
    tours: Array<Tours>
    getToursError : string
    getToursSuccess : string
    getToursLoading : boolean

    //add tours
    addTourSuccessMsg : string,
    addTourErrorMsg : string,
    addTourLoading : boolean
}

//initialize the initial state of the slice
const initialState:TourInterface = {
    // get a tour
    id: '',
      
    // get all tours
    tours: [],
    getToursError : '',
    getToursSuccess : '',
    getToursLoading : false,

    //add tours
    addTourSuccessMsg : '',
    addTourErrorMsg : '',
    addTourLoading : false

}

export const tourReducer = createReducer(
    initialState,
    // handle the get tours actions
    on(TourActions.add, (state)=>{
        return {
            ...state,
            addTourSuccessMsg : '',
            addTourErrorMsg : '',
            addTourLoading : true        
        }
    }),

    on(TourActions.addSuccess, (state, action)=>{
        return {
            ...state,
            addTourSuccessMsg : action.response.message,
            addTourErrorMsg : '',    
            addTourLoading : false,        
        }
    }),

    on(TourActions.addFailure, (state, {message})=>{
        return {
            ...state,
            addTourSuccessMsg : message,
            addTourErrorMsg : '',    
            addTourLoading : false,        
        }
    }),

    // handle the get tour actions
    on(TourActions.get, (state)=>{
        return {
            ...state,
            tours: [],
            getToursSuccessMsg : '',
            getToursErrorMsg : '',    
            getToursLoading : true,         
        }
    }),

    on(TourActions.getSuccess, (state, action)=>{
        return {
            ...state,
            tours: action.tour,
            getToursSuccessMsg : '',
            getToursErrorMsg : '',    
            getToursLoading : false,        
        }
    }),

    on(TourActions.getFailure, (state, {message})=>{
        return {
            ...state,
            tours: [],
            getToursSuccessMsg : message,
            getToursErrorMsg : '',    
            getToursLoading : false,        
        }
    }),

    // get tour by id
    on(TourActions.getTour, (state, action)=>{
        return {
            ...state,
            id: action.id,      
        }
    }),
)