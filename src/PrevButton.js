import React, { Component } from 'react';
class PrevButton extends Component {
    /* state = {  } */
    
    class=()=>{
        var btnclass="btn btn-primary ml-auto mr-2";
        var check=this.props.disable-1;
        if(check===0){
            return btnclass+=" disabled";
        }
        else{
            return btnclass;
        }
    }
    render() { 
        return (<> <button type="button" className={this.class()} onClick={this.props.prev}>previous</button>
        </> );
    }
}
 
export default PrevButton;