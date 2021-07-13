import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';
import NextButton from './nextButton';
import SubmitButton from './submitButton';

class QuizQuestion extends Component {
    constructor(props){
        super(props);
        this.state={incorrectAnswer:null}
    }
    handleClick(buttonText){
        if(buttonText===this.props.quiz_question.answer){
            this.setState({incorrectAnswer:false})
        }else{
            this.setState({incorrectAnswer:true})
        }
    }
    render() { 
        return ( 
            <>
            <main>
                <section >
                    <h5><strong>Q. {this.props.quiz_question.instruction_text}</strong></h5>
                </section>
                <section>
                    <ul className="list-group">
                        {this.props.quiz_question.answer_options.map((option,index)=>{
                            return <QuizQuestionButton key=
                            {index} button_text={option} clickHandler={this.handleClick.bind(this)}/>
                        })}
                    </ul>
                </section>
                <div className="d-flex justify-content-between align-items-center">
                <section>
                    {this.state.incorrectAnswer?<p className="badge badge-danger p-2 mt-2 mb-0">Incorrect</p>:null}
                </section>
                <section>
                    <span className="badge badge-pill badge-info p-2 mt-3 font-weight-bold">{this.props.qno} / 10</span>
                </section>
                </div>
            </main>
            </>
         );
    }
}
 
export default QuizQuestion;