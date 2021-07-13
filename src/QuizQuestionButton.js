import React, { Component } from 'react';
class QuizQuestionButton extends Component {
    /* state = {  } */
    handleClick(){
        this.props.clickHandler(this.props.button_text);
    }
    render() { 
        return ( <>
            <li className="list-group-item"><button type="button" className="btn btn-light" onClick={this.handleClick.bind(this)}>{this.props.button_text}</button></li>
        </>);
    }
}
 
export default QuizQuestionButton;