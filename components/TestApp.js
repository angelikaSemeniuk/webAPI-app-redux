import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions";


const mapStateToProps = (state) => {
    return {
        arrayOfArticles: state.arrayOfArticles,
    }
};

class TestApp extends React.Component { // Component

    componentDidMount () {
        this.props.dispatch(fetchData());
    }

    render () {
        console.error("action-props", this.props);

        const listItems = this.props.arrayOfArticles.map((item, index) => {
            return (
                <li key={index}>
                    {item.webTitle}
                </li>
            );
        });
        return (
            <div>
                <h1>The Guardian News</h1>
                <ul>{listItems}</ul>
            </div>
        )
    }
}


export default connect(mapStateToProps)(TestApp);
