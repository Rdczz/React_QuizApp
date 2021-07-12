import React, { Component } from 'react';
class NextButton extends Component {
    state = {  }
    render() { 
        
        return ( <>
            <button type="button" className="btn btn-primary ml-auto" onClick={this.props.next}>Next</button>
        </> );
    }
}
 
export default NextButton;