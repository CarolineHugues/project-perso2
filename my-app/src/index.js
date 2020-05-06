import React from 'react';
import ReactDOM from 'react-dom';
import { Recommendations_questionnaire } from './questionnaire.js';

function Start() {
  const [btn, setBtn] = React.useState(true)
  const [start, setStart] = React.useState(false)
  const onClick = () => {
    setStart(true)
    setBtn(false)
  }
  return (
    <div>
      { btn ? <input type="submit" value="Démarrer" onClick={onClick} /> : null}
      { start ? <Recommendations_questionnaire /> : null }
    </div>
  )
}

class Recommendations_app extends React.Component {
  render() {
    return (
      <section>
        <h1 className="page-title">Application de suggestions culturelles et escapages, selon vos goûts ou vos envies de découvertes</h1>
        <Start />
      </section>
    );
  }
}

ReactDOM.render(<Recommendations_app />, document.getElementById("recommendations-content"));