import React from 'react';
import ReactDOM from 'react-dom';
import { Recommendations_questionnaire } from './questionnaire.js';

class Recommendations_app extends React.Component {
  render() {
    return (
      <section>
        <h1 className="page-title">Application de suggestions culturelles et escapages, selon vos goûts ou vos envies de découvertes</h1>
        <Recommendations_questionnaire />
      </section>
    );
  }
}

ReactDOM.render(<Recommendations_app />, document.getElementById("recommendations-content"));