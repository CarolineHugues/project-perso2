import React from 'react';

function Choice(props) {
  return (
    <div>
      <label>{props.label}</label>
      <input type="radio" value={props.value}/>
    </div>
  );
}

export class Choices extends React.Component {
  render() {
    return (
      <section>
        <div>
          <Choice 
            label="Pays froids"
            value="1"
          />
          <Choice 
            label="Pays chauds"
            value="2"
          />
        </div>
        <div>
        <Choice 
          label="Ville"
          value="3"
        />
        <Choice
          label="Nature"
          value="4"
        />
        </div>
      </section>
    );
 }
}