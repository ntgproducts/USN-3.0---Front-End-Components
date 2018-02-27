import { Link } from 'react-router-dom';
import React from 'react';

class MainAppLanding extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
      <div>
        <h1>Component Example List</h1>
        <Link to="/calculator" href="/calculator">Calculator Styles</Link>
      </div>
    )
  }
}

MainAppLanding.defaultProps = {

};

MainAppLanding.propTypes = {

};


export default MainAppLanding;