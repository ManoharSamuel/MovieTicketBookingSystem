const reducer = (state={}, action) => {
    switch(action.type){
        case 'GET_LATEST_MOVIES':
            return{
                ...state,
                loading:true
            }
        case 'LATEST_MOVIES_RECEIVED':
            return{
                ...state,
                loading:false,
                todos:action.json
            }
        default :
            return state;
    }
}

export default reducer;