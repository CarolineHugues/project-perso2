import React from 'react';

function Choice(props) {
  return (
    <div>
      <label>{props.label}</label>
      <input type="radio" name={props.name} value={props.value} onClick={props.onClick}/>
    </div>
  );
}

export class Choices extends React.Component {
  renderChoice(label, value, question) {
    return (
      <Choice 
        label={label}
        value={value}
        name={question}
        onClick={() => this.props.onClick(question, value)}
      />
    )
  }

  render() {
    return (
      <section>
        <div>
          {this.renderChoice("Pays froids", 1, 0)}
          {this.renderChoice("Pays chauds", 2, 0)}
        </div>
        <div>
          {this.renderChoice("Ville", 3, 1)}
          {this.renderChoice("Nature", 4, 1)}
        </div>
      </section>
    );
 }
}