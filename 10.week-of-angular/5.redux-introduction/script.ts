import { combineReducers,createStore } from "redux"


console.log('hello world!')
// create an enum and interfaces type for the types
enum ActionTypes {
    createClaim = 'CREATE_CLAIM',
    createPolicy = 'CREATE_POLICY',
    deletePolicy = 'DELETE_POLICY'
}

interface Action {
    type: 'CREATE_CLAIM'|'CREATE_POLICY'|'DELETE_POLICY'
    payload:{
        name:string,
        amount:number
    }
}

// build the Actions
const CREATE_CLAIM = (name:string, amount:number):Action =>{
    return{
        type : ActionTypes.createClaim,
        payload : {
            name,
            amount
        }
    }
}
const CREATE_POLICY = (name:string, amount:number):Action =>{
    return{
        type : ActionTypes.createPolicy,
        payload : {
            name,
            amount
        }
    }
}
const DELETE_POLICY = (name:string, amount:number):Action =>{
    return{
        type : ActionTypes.deletePolicy,
        payload : {
            name,
            amount
        }
    }
}

// CREATE THE REDUCERS, OUR DEPARTMENTS IN THIS CASE
// claims dpt
const claims = (listOfClaims = [], action:Action)=>{
    if(action.type ==='CREATE_CLAIM'){

        // return a new state using pure functions
        return [...listOfClaims, action.payload.name]
    }
    return listOfClaims 
}

// accoutnting dpt
const accounting = (accountBal = 1000, action:Action)=>{
    if (action.type ==="CREATE_POLICY" && action.payload.amount){
        return accountBal + action.payload.amount
    }
    if (action.type ==="CREATE_CLAIM" && action.payload.amount){
        return accountBal + action.payload.amount
    }
    if (action.type ==="DELETE_POLICY" && action.payload.amount){
        return accountBal - action.payload.amount
    }
    return accountBal
}

// policies dpt
const policies = (listOfPolicies=[], action:Action)=>{
    if(action.type==='CREATE_POLICY'){
        return [...listOfPolicies,action.payload.name]
    }
    if(action.type==='DELETE_POLICY'){
        return listOfPolicies.filter(name => name !== action.payload.name)
    }
    return listOfPolicies
}

// store receives only 1 reducer. 1 reducer with our 3 slices
// simply an Object with 3 key;value pairs
const reducer = combineReducers({
    claims,
    policies,
    accounting
})

// create the store
const store = createStore(reducer)

// dispatch the redux whatever
store.dispatch({type:'CREATE_POLICY', payload:{name:'Johnte', amount:10000}})
store.dispatch({type:'DELETE_POLICY', payload:{name:'MWAS', amount:100}})
store.dispatch({type:'CREATE_CLAIM', payload:{name:'Jane', amount:10}})
store.dispatch({type:'CREATE_CLAIM', payload:{name:'Jane', amount:10}})



// see results on terminal
console.log(store.getState())