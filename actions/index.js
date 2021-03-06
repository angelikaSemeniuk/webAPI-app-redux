export function fetchData() {
    return function (dispatch) {
        dispatch({type: "FETCH_ARTICLES"});
        fetch('https://content.guardianapis.com/search?api-key=64725228-5b31-4c1c-aba5-faa61edfb7be')
            .then((response) => {
                return response.json();
            })
            .then(
                (data) => {
                    dispatch({type: "RECEIVE_ARTICLES", value: data.response.results});
                    dispatch({type: "RECEIVE_CURRENT_PAGE", value: data.response.currentPage});
                    dispatch({type: "RECEIVE_TOTAL_PAGE", value: data.response.total});
                    dispatch({type: "ATTRIBUTE_FOR_ITEMS" });
                },
                (error) => {
                    dispatch({type: "CATCH_ERROR", value: error});
                }
            )

    }
}