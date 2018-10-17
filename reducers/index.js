const initialState = { arrayOfArticles: [], error: null, fetching: false, articleInfo: "", webUrl: null, fetchingInfo: false }

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
        case "ATTRIBUTE_FOR_ITEMS" : {
            return state = Object.assign({}, state, {
                arrayOfArticles: state.arrayOfArticles.map(item => {
                    return item = Object.assign({}, item, {
                        accordionBodyShown: false,
                    })
                })
            })
        }
        case "CATCH_ERROR" : {
            return state = Object.assign({}, state, {
                error: action.value,
            })
        }
        case "FETCH_ARTICLE_INFO" : {
            return state = Object.assign({}, state, {fetchingInfo: true});
        }
        case "RECEIVE_ARTICLE_INFO" : {
            return state = Object.assign({}, state, {articleInfo: action.value});
        }
        case "RECIEVE_WEBURL" : {
            return state = Object.assign({}, state, {webUrl: action.value});
        }
        case "SHOW_ACCORDION_BODY" : {
            return state = Object.assign({}, state, {
                arrayOfArticles: state.arrayOfArticles.map( (item, index) => {
                    if(index === action.index) {
                        return Object.assign({}, item, {
                            accordionBodyShown: !action.accordionBodyShown
                        })
                    }
                    return item
                })
            })

        }
    }
    return state
};

export default reducer