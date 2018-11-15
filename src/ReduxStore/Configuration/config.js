import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// Reducer Imports
import MessageReducer from '../ReducerFolder/Message'

const CombineReducer = combineReducers({
    Message: MessageReducer
})


let composeEnchancers = compose;

if(__DEV__){
    composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default config = () =>{
    return createStore(CombineReducer, composeEnchancers(applyMiddleware(thunk)))
}