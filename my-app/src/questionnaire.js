import React from 'react';
import { Choices } from './choices.js';

class Question extends React.Component {
  constructor(props) {    
    super(props);    
    this.state = { 
      history: [{
        choices: Array(2).fill(null), 
      }],
      stepNumber: 0,     
    };  
  }

  handleClick(question, value) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const choices = current.choices.slice();    
    choices[question] = value;
    this.setState({
      history: history.concat([{choices: choices,}]),
      stepNumber: history.length,
    })
  }

  jumpTo(step) {   
    this.setState({      
      stepNumber: step,     
    });  
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const moves = history.map((step, move) => {      
      const desc = move ? 
        'Revenir au choix n°' + move :        
        'Revenir au début';      
      return (        
        <li>          
          <button onClick={() => this.jumpTo(move)}>{desc}</button>        
        </li>      
      );
    });
    return (
      <div>
        <div>
          <ol>{moves}</ol>
        </div>
        <p>Est-ce que vous préférez ... ?</p>
        <Choices
          choices = {current.choices}
          onClick={(question, value) => this.handleClick(question, value)}
        />
      </div>
    );
 }
}

export class Recommendations_questionnaire extends React.Component {
  render() {
    return (
      <section>
        <Question />
      </section>
    );
 }
}