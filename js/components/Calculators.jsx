import React from 'react';
import EnhancedCalc from './calcs/Calculator-Square-Foot';

class Calculators extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Types of Calculators</h1>
        <EnhancedCalc />
      </div>
    )
  }
}

Calculators.defaultProps = {

};

Calculators.propTypes = {

};


export default Calculators;