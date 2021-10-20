import React from "react";
import Movies from './movies/Movies';
import Characters from './characters/Characters';

export default class Layout extends React.Component{
    constructor(){
        super();
        this.state = {welcome: "Welcome to Star Wars Trivia!"};
    }
    render(){
        const movieQuestion = "Have you seen all of these movies?";
        const characterQuestion = "What do you know about each of these characters?";
        return (
            <div>
                {this.state.welcome}
                <Movies question = {movieQuestion}/>
                <Characters question = {characterQuestion}/>
            </div>
        );
    }
}
