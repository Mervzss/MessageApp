import {SEND_MESSAGE, RECEIVE_MESSAGE} from '../ActionFolder/ActionTypes'

initialState={
    sendMessage:[],
    receiveMessage:[]
}

export default reducer = (state = initialState, action) =>{
        switch(action.type){
            case SEND_MESSAGE:
            return{
                ...state,
                sendMessage: action.sendMessage
            }
            case RECEIVE_MESSAGE:
            return{
                ...state,
                receiveMessage: action.receiveMessage
            }
            default:
            return state
        }
}