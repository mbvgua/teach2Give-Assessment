import {createActionGroup, emptyProps, props} from '@ngrx/store'
import { Hotels, hotelsResponse } from '../../models/hotels';



export const HotelActions = createActionGroup({
    source : 'HOTEL API',
    events:{
        // add the hotel events
        'add': props<{hotel:Hotels}>(),
        'add success': props<{response:hotelsResponse}>(),
        'add failure': props<{message:string}>(),

        // get the hotel events
        'get': emptyProps(),    //when there is nothing to pass
        'get success': props<{hotel:Array<Hotels>}>(),
        'get failure': props<{message:string}>(),

        // get the hotel by id events
        'get hotel': props<{id:string}>(),    

    }
})

