import { createReducer, on } from "@ngrx/store"
import { AuthActions } from "../actions/auth.actions"


// define the interface
export interface AuthInterface {
    // login values
    loginSuccessMsg : string,
    loginErrorMsg : string,
    loginLoading : boolean,

    // register values
    registerSuccessMsg : string,
    registerErrorMsg : string,
    registerLoading : boolean
}

//initialize the initial state of the slice
const initialState:AuthInterface = {
    // login
    loginSuccessMsg : '',
    loginErrorMsg : '',
    loginLoading : false,

    //register
    registerSuccessMsg : '',
    registerErrorMsg : '',
    registerLoading : false,

}

export const authReducer = createReducer(
    initialState,
    // handle the login actions
    on(AuthActions.login, (state)=>{
        return {
            ...state,
            loginSuccessMsg : '',
            loginErrorMsg : '',
            loginLoading : true,        
        }
    }),
    on(AuthActions.loginSuccess, (state, action)=>{
        return {
            ...state,
            loginSuccessMsg : action.response.message,
            loginErrorMsg : '',
            loginLoading : false,        
        }
    }),
    // on(AuthActions.loginFailure, (state, action)=>{
    //     return {
    //         ...state,
    //         loginSuccessMsg : '',
    //         loginErrorMsg : action.response.message,    //why giving back error?
    //         loginLoading : false,        
    //     }
    // }),
    on(AuthActions.loginFailure, (state, {message})=>{
        return {
            ...state,
            loginSuccessMsg : '',
            loginErrorMsg : message,    
            loginLoading : false,        
        }
    }),

    // handle the register actions
    on(AuthActions.register, (state)=>{
        return {
            ...state,
            registerSuccessMsg : '',
            registerErrorMsg : '',
            registerLoading : true,        
        }
    }),
    on(AuthActions.registerSuccess, (state, action)=>{
        return {
            ...state,
            registerSuccessMsg : action.response.message,
            registerErrorMsg : '',
            registerLoading : false,        
        }
    }),
    on(AuthActions.registerFailure, (state, {message})=>{
        return {
            ...state,
            registerSuccessMsg : '',
            registerErrorMsg : message,
            registerLoading : false,        
        }
    })
)