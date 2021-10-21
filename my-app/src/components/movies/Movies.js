import React from "react";

export default class Movies extends React.Component{
    createShoutOut(e){
        const shoutOut = e.target.value;
        this.props.createNewShoutOut(shoutOut);
    }
    render(){
        return(
            <div>
                <h2>Movies List</h2>    
                <h3>{this.props.question}</h3>
                <h3>Current ShoutOut: {this.props.shoutout}</h3>
                <input onChange = {this.createShoutOut.bind(this)}/>
            </div>
        );
    }
}