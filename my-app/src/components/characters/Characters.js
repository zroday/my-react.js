import React from "react";

export default class Characters extends React.Component{
    render(){
        return(
            <div>
                <h2>Characters List</h2>    
                <h3>{this.props.question}</h3>
            </div>   
        );
    }
}