import React from 'react';
import EnhancedCalc from './calcs/Calculator-Square-Foot';
import './calcs/calculator.styl';

// TODO: List all of the available calculator types
class Calculators extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className="container calculator-container">
        <EnhancedCalc />
      </div>
    )
  }
}

Calculators.defaultProps = {};

Calculators.propTypes = {};

export default Calculators;