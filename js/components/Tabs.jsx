/* eslint no-console: 0 */
import React from 'react';
import PropTypes from 'prop-types';

const TabsContext = React.createContext();

class Tabs extends React.Component {
  
  static Tab = (props) => (
    <TabsContext.Consumer>
      {({ activeTab, select }) => (
        <Tab activeTab={activeTab} onClick={select} {...props} />
      )}
    </TabsContext.Consumer>
  )
  
  state = { 
    activeTab: this.props.activeTab
  }
  select = () => {}
  render(){
    return (
      <TabsContext.Provider value={this.state}>
        <div className="tab-container tabs">
          {/* React.Children.map(this.props.children, (child, i) => (
              <button key={`${i}something`} active={this.props.activeTab} >
                {child}
              </button>
            )
          ) */}
          {this.state.activeTab}
          {this.props.children}
        </div>
      </TabsContext.Provider>
    )
  }
}

Tabs.defaultProps = {
  activeTab: 0,
  children: null
};

Tabs.propTypes = {
  activeTab: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element)
};

const Tab = (props) => (
  <div className={props.activeTab ? 'tab tab-active' : 'tab'}>
    <div className="tab-title">{props.title}</div>
    <div className="tab-content">{props.children}</div>
  </div>
)


Tab.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  activeTab: PropTypes.number,
  title: PropTypes.string
};

Tab.defaultProps = {
  children: null,
  activeTab: 0,
  title: ''
};


export { Tabs as default };