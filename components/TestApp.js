import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions";
import LiContainer  from "../containers/LiContainer";
import PaginationContainer from "../containers/PaginationContainer";


const mapStateToProps = (state) => {
    return {
        arrayOfArticles: state.arrayOfArticles,
        error: state.error,
    }
};

class TestApp extends React.Component {

    componentDidMount () {
        this.props.dispatch(fetchData());
    }
    handleRefreshButton () {
        this.props.dispatch(fetchData());
    }
    render () {
        if (this.props.error !== null) {
            return (<div> {this.props.error.message} </div> )
        } else {
            return (
                <div>
                    <div className="header">
                        <h1>The Guardian News</h1>
                        <button onClick={this.handleRefreshButton.bind(this)}>Refresh</button>
                    </div>
                    <div>
                        <ul className="list">
                            { this.props.arrayOfArticles.map((item, index) => {
                                return <LiContainer
                                    item = {item}
                                    index={index}
                                />
                            })}
                        </ul>
                    </div>
                    <div>
                        <PaginationContainer/>
                    </div>
                </div>
            );
        }
    }
}


export default connect(mapStateToProps)(TestApp);
