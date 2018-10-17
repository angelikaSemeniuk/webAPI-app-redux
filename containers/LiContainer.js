import React from "react";
import { connect } from "react-redux";
import { openAccordionBody } from "../actions/LiActions";

const mapStateToProps = (state) => {
    return {
        arrayOfArticles: state.arrayOfArticles,
        accordionBodyShown: state.accordionBodyShown,
        articleInfo: state.articleInfo,
        webUrl: state.webUrl,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        openAccordionBody : (item, index) => {
            dispatch(openAccordionBody(item, index))
        }
    }

}

const LiContainer = (props) => {

        return (
            <div>
                <li key={props.item.toString()}  onClick={props.openAccordionBody.bind(this, props.item, props.index)}>
                    {props.item.accordionBodyShown ? (
                        <div className="accordion-header" style={{background: "lightskyblue", border: "2px solid black"}} >
                            {props.item.webTitle}
                            <i className="fa fa-caret-up"></i>
                        </div>
                    ) : (
                        <div className="accordion-header" style={{background: "none", border: "none"}}>
                            {props.item.webTitle}
                            <i className="fa fa-caret-down"></i>
                        </div>
                    )
                    }

                    {props.item.accordionBodyShown &&
                    <div className="panel">
                        <p dangerouslySetInnerHTML={{__html: props.articleInfo}}></p>
                        <a href={props.webUrl}>Read full information</a>
                    </div>
                    }
                </li>
            </div>
        );
    }


export default connect(mapStateToProps, mapDispatchToProps)(LiContainer);