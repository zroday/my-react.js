import React from "react";

export default class Movies extends React.Component{
    render(){
        return(
            <div>
                <h2>Movies List</h2>    
                <h3>{this.props.question}</h3>
            </div>
        );
    }
}