import React from 'react';
import PropTypes from 'prop-types';

class TabLayout extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div className="tabs tabs-container">
        <div className="tab-menu tabs">
          <ul>
            {this.props.tabs.map( tab => <Tab tabName={tab.tabName} tabUrl={tab.tabUrl} key={tab.tabName} activeTab={this.props.activeTab} />)}
            
          </ul>
        </div>
        <div className="tab-content">
            {this.props.tabs.map( tab => <TabContent key={tab.tabName} tabText={tab.tabText} />)}
        </div>
      </div>
    )
  }
}

TabLayout.defaultProps = {
  activeTab: 0
};

TabLayout.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeTab: PropTypes.number
};

const Tab = (props) => (
  <li><a href={props.tabUrl}>{props.tabName} {props.activeTab}</a></li>
)

Tab.propTypes = {
  tabUrl: PropTypes.string,
  tabName: PropTypes.string,
  activeTab: PropTypes.number
};

Tab.defaultProps = {
  tabUrl: 'https://www.usnetting.com/',
  tabName: 'Default Tab',
  activeTab: 0
};

const TabContent = (props) => (
  <div className="tab-content">
    {props.tabText}
  </div>
)

TabContent.propTypes = {
  tabText: PropTypes.string.isRequired
};


export default TabLayout;