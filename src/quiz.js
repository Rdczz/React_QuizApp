import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';
import SubmitButton from './submitButton';
import NextButton from './nextButton';
import PrevButton from './PrevButton';
let quizData=require('./quiz_data.json');

class Quiz extends Component {
    /* state = {  } */
    constructor(props){
        super(props);
        this.state={quiz_pos:1};
    }
    
    nextQuestion=()=>{
        this.setState({quiz_pos:this.state.quiz_pos+1}
        );
    }
    prevQuestion=()=>{
        this.setState({
            quiz_pos:this.state.quiz_pos-1
        })
    }
    render() { 
        const isFirstQuestion=(this.state.quiz_pos-1)
        const isQuizEnd=((this.state.quiz_pos-1)==(quizData.quiz_questions.length));
        return (<> 
            <div className="container mt-3">
                <div className="row d-flex">
                    <div className="col-12">
                        <h4 className="h4 text-center">Quiz Time !</h4>
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center">
                {isQuizEnd ? <QuizEnd/>:<div className="container mt-3 ">
                <div className="jumbotron pb-3 pt-5">
                <div className="card">
                    <div className="card-body">
                    <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_pos-1]} qno={this.state.quiz_pos}/>
                    </div>
                </div>
                <div className="d-flex justify-content-between mt-3">
                <div>
                    {(isFirstQuestion===0)?<PrevButton disable={this.state.quiz_pos}/>:<PrevButton prev={this.prevQuestion.bind(this)}/>}
                    <NextButton next=
                    {this.nextQuestion.bind(this)}/>
                    
                    </div>
                    <SubmitButton/>
                    
                    
                </div>
                </div>
            </div>}
            </div>
         </>);
    }
}
 
export default Quiz;