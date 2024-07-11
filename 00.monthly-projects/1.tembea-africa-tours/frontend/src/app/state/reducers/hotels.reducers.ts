import { createReducer, on } from "@ngrx/store"
import { Hotels, hotelsResponse } from '../../models/hotels';
import { HotelActions } from "../actions/hotels.actions";


// define the interface
export interface HotelInterface {
    // get a tour
    id:string
      
    // get all tours
    hotels: Array<Hotels>
    getHotelsError : string
    getHotelsSuccess : string
    getHotelsLoading : boolean

    //add tours
    addHotelSuccessMsg : string,
    addHotelErrorMsg : string,
    addHotelLoading : boolean
}

//initialize the initial state of the slice
const initialState:HotelInterface = {
    // get a hotel
    id: '',
      
    // get all hotels
    hotels: [],
    getHotelsError : '',
    getHotelsSuccess : '',
    getHotelsLoading : false,

    //add hotels
    addHotelSuccessMsg : '',
    addHotelErrorMsg : '',
    addHotelLoading : false

}

export const hotelReducer = createReducer(
    initialState,
    // handle the get tours actions
    on(HotelActions.add, (state)=>{
        return {
            ...state,
            addHotelSuccessMsg : '',
            addHotelErrorMsg : '',
            addHotelLoading : true        
        }
    }),

    on(HotelActions.addSuccess, (state, action)=>{
        return {
            ...state,
            addHotelSuccessMsg : action.response.message,
            addHotelErrorMsg : '',    
            addHotelLoading : false,        
        }
    }),

    on(HotelActions.addFailure, (state, {message})=>{
        return {
            ...state,
            addHotelSuccessMsg : message,
            addHotelErrorMsg : '',    
            addHotelLoading : false,        
        }
    }),

    // handle the get tour actions
    on(HotelActions.get, (state)=>{
        return {
            ...state,
            hotels: [],
            getHotelsSuccessMsg : '',
            getHotelsErrorMsg : '',    
            getHotelsLoading : true,         
        }
    }),

    on(HotelActions.getSuccess, (state, action)=>{
        return {
            ...state,
            tours: action.hotel,
            getHotelsSuccessMsg : '',
            getHotelsErrorMsg : '',    
            getHotelsLoading : false,        
        }
    }),

    on(HotelActions.getFailure, (state, {message})=>{
        return {
            ...state,
            tours: [],
            getHotelsSuccessMsg : message,
            getHotelsErrorMsg : '',    
            getHotelsLoading : false,        
        }
    }),

    // get tour by id
    on(HotelActions.getHotel, (state, action)=>{
        return {
            ...state,
            id: action.id,      
        }
    }),
)