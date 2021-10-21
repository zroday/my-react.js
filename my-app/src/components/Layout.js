import React from "react";
import Movies from './movies/Movies';
import Characters from './characters/Characters';

export default class Layout extends React.Component{
    constructor(){
        super();
        this.state = {welcome: "Welcome to Star Wars Trivia!"};
        this.state = {shoutout: "No ShoutOuts!"};
    }
    
    createNewShoutOut(shoutout){
        this.setState({shoutout})
    }
    
    render(){
        const movieQuestion = "Have you seen all of these movies?";
        const characterQuestion = "What do you know about each of these characters?";
        return (
            <div>
                {this.state.welcome}
                <Movies shoutout = {this.state.shoutout} createNewShoutOut = {this.createNewShoutOut.bind(this)} question = {movieQuestion}/>
                <Characters question = {characterQuestion}/>
            </div>
        );
    }
}
