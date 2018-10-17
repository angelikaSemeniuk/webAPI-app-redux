import React from "react";
import { connect } from "react-redux";
import {handlePreviousPage, handleNextPage} from "../actions/PaginationActions";

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage,
        totalPages: state.totalPages,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePreviousPage : (currentPage) => {
            console.error("action-PAGE", currentPage);
            dispatch(handlePreviousPage(currentPage));
        },
        handleNextPage: (currentPage) => {
            console.error("action-PAGE", currentPage);
            dispatch(handleNextPage(currentPage));
        }
    }
}

const paginationContainer = (props) => {
    return (
        <div className="pagination">
            <button className="previousPage" onClick={props.handlePreviousPage.bind(this, props.currentPage)}>Previous page</button>
            <span className="currentPage" dangerouslySetInnerHTML={{__html: props.currentPage}}></span>
            <p className="numberOfPages" dangerouslySetInnerHTML={{__html: props.totalPages}}></p>
            <button className="nextPage" onClick={props.handleNextPage.bind(this, props.currentPage)}>Next page</button>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(paginationContainer);