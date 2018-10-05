const initialState = { arrayOfArticles: [], error: null, fetching: false }

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_ARTICLES" : {
            return state = Object.assign({}, state, {
                fetching: true,
            })
        }
        case "RECEIVE_ARTICLES" : {
            return state = Object.assign({}, state, {
                arrayOfArticles: action.value,
            })
        }
        case "CATCH_ERROR" : {
            return state = Object.assign({}, state, {
                arrayOfArticles: action.value,
            })
        }
    }
    return state
};

export default reducer