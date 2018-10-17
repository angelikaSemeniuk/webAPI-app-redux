export function openAccordionBody( item, index) {
    return function (dispatch) {
        dispatch({type: "FETCH_ARTICLE_INFO"});
        const url = item.apiUrl + "?show-blocks=body&api-key=64725228-5b31-4c1c-aba5-faa61edfb7be";
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then(
                (data) => {
                    dispatch({ type: "RECEIVE_ARTICLE_INFO", value: data.response.content.blocks.body[0].elements[0].textTypeData.html });
                    dispatch({ type: "RECIEVE_WEBURL", value: data.response.content.webUrl });
                    dispatch(showAccordionInfo(index, item));
                },
                (error) => {
                    dispatch({type: "CATCH_ERROR", value: error});
                }
            )
    }
}

export function showAccordionInfo(index, item) {
    return{
        type: "SHOW_ACCORDION_BODY",
        accordionBodyShown: item.accordionBodyShown,
        index: index,
    }
}
