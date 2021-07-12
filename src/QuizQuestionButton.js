import React, { Component } from 'react';
class QuizQuestionButton extends Component {
    state = {  }
    render() { 
        return ( <>
            <div className="mt-3">
            {this.props.button_text.answer_options.map((option,index)=> <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={option} key={index}/>
            <label class="form-check-label" for="flexRadioDefault1">{option}</label></div>)}
            </div>
        </>);
    }
}
 
export default QuizQuestionButton;