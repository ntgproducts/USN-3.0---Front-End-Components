import React from 'react';
import SubNav from '../components/SubNavigation';

class MainAppLanding extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
      <div className="container">
        <h1>Main Component List</h1>
        <h3>Sub Navigation Bar</h3>
        <SubNav />        
      </div>
    )
  }
}

MainAppLanding.defaultProps = {};

MainAppLanding.propTypes = {};


export default MainAppLanding;