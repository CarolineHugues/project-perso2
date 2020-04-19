import React from 'react';
import { Choices } from './choices.js';

class Question extends React.Component {
  render() {
    return (
      <p>Est-ce que vous préférez ... ?</p>
    );
 }
}

export class Recommendations_questionnaire extends React.Component {
  render() {
    return (
      <section>
        <Question />
        <Choices />
      </section>
    );
 }
}