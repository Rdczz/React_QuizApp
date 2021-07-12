import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';
import NextButton from './nextButton';
import SubmitButton from './submitButton';

class QuizQuestion extends Component {
    constructor(props){
        super(props);
        this.state={incorrectAnswer:false}
    }
    render() { 
        return ( 
            <>
            <main>
                <section>
                    <h5><strong>Q. {this.props.quiz_question.instruction_text}</strong></h5>
                </section>
                <section>
                    <ul>
                        <QuizQuestionButton button_text=
                        {this.props.quiz_question}/> 
                    </ul>
                </section>
            </main>
            </>
         );
    }
}
 
export default QuizQuestion;