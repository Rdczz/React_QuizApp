import React, { Component } from 'react';
class QuizEnd extends Component {
    /* state = {  } */
    render() { 
        return ( <>
            <div className="jumbotron container mt-5">
                <div className="row d-flex align-items-center">
                    <div className="col-12">
                        <h4 className="h4 text-center display-4 font-weight-bold">Wee ! Quiz is Over !!</h4>
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-3">
                        <p><a href="" className="badge badge-warning p-2">Reset the Quiz</a></p>
                    </div>
                </div>
            </div>
            
        </> );
    }
}
 
export default QuizEnd;