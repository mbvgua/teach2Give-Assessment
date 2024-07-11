import {createActionGroup, emptyProps, props} from '@ngrx/store'
import { Tours, toursResponse } from '../../models/tours';


export const TourActions = createActionGroup({
    source : 'TOUR API',
    events:{
        // add the hotel events
        'add': props<{tour:Tours}>(),
        'add success': props<{response:toursResponse}>(),
        'add failure': props<{message:string}>(),

        // get the hotel events
        'get': emptyProps(),    //when there is nothing to pass
        'get success': props<{tour:Array<Tours>}>(),
        'get failure': props<{message:string}>(),

        // get the tour by id events
        'get tour': props<{id:string}>(),    


    }
})

