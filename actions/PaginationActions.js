export function handlePreviousPage(currentPage) {
    return function (dispatch) {
        const page = currentPage - 1;
        const url = "http://content.guardianapis.com/search?page=" + page + "&api-key=64725228-5b31-4c1c-aba5-faa61edfb7be"
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then(
                (data) => {
                    dispatch({type: "RECEIVE_ARTICLES", value: data.response.results});
                    dispatch({type: "RECEIVE_CURRENT_PAGE", value: data.response.currentPage});
                },
                (error) => {
                    dispatch({type: "CATCH_ERROR", value: error});
                }
            )
    }
}

export function handleNextPage(currentPage) {
    return function (dispatch) {
        const page = currentPage + 1;
        const url = "http://content.guardianapis.com/search?page=" + page + "&api-key=64725228-5b31-4c1c-aba5-faa61edfb7be"
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then(
                (data) => {
                    dispatch({type: "RECEIVE_ARTICLES", value: data.response.results});
                    dispatch({type: "RECEIVE_CURRENT_PAGE", value: data.response.currentPage});
                },
                (error) => {
                    dispatch({type: "CATCH_ERROR", value: error});
                }
            )
    }
}