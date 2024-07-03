import {createActionGroup, props} from '@ngrx/store'
import { loginResponse, loginUser, registerResponse, User} from '../../models/users';



export const AuthActions = createActionGroup({
    source : 'AUTH API',
    events:{
        // login events
        'login': props<{user:loginUser}>(),
        'login success': props<{response:loginResponse}>(),
        'login failure' : props<{message:string}>(),

        // register events
        'register': props<{user:User}>(),
        'register success': props<{response:registerResponse}>(),
        'register failure' : props<{message:string}>()
    }
})

