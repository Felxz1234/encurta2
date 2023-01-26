
function urlReducer(state='',action){
    switch (action.type) {
        case 'url':
            return( action.payload)

        case 'error':
            return(action.payload)      

        default:
            return state
  
    }
}

export default urlReducer