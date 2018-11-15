import {SEND_MESSAGE,RECEIVE_MESSAGE} from './ActionTypes'
export const sendMessage = (sendMes) =>{
    return{
        type: SEND_MESSAGE,
        sendMessage: sendMes
    }
}

export const receiveMessage = (sendMes) =>{
    return{
        type: RECEIVE_MESSAGE,
        receiveMessage: sendMes
    }
}

export const trySend = (mes) =>{
    return dispatch=>{
        console.log('try send')
        fetch("https://codecampersmessagingapp.firebaseio.com/messages.json",
        {
            method:'POST',
            body:JSON.stringify({
                text: 'sadfadfadf',
                timestamp: 153434326346,
                user:{
                    _id:"sdsawerewr",
                    name:'myname'
                }
            })
        }).catch(err => console.log(err))
        .then(res => res.json)
        .then(resParse => {
            console.log(resParse)
            return console.log(resParse)
        })
        
    }
} 