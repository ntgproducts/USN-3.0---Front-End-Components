import React from 'react';
import PropTypes from 'prop-types';
import AccordionTitle from './AccordionTitle';

const AccordionContext = React.createContext();


class Accordion extends React.Component {
  static Button = props => (
    <AccordionContext.Consumer>
      {({expanded, expand}) => (
        <AccordionTitle expanded={expanded} aria-expanded={expanded} onClick={expand} {...props} />
      )}
    </AccordionContext.Consumer> 
  )

  static Expanded = ({children}) => (
    <AccordionContext.Consumer>
      {({expanded}) => (
        <div className={expanded ? "accordion-panel accordion-panel-open" : "accordion-panel accodion-panel-closed" }>
          { expanded ? children : null }
        </div>
      )}
    </AccordionContext.Consumer>
  )
  state = { expanded: false }
  expand = () => {
    this.setState(({expanded}) => ({ expanded: !expanded }));
  }

  render(){
    return (
      <AccordionContext.Provider value={{expanded: this.state.expanded, expand: this.expand }}>
        {this.props.children}
      </AccordionContext.Provider>
    )
  }
}


Accordion.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}

Accordion.defaultProps = {
  children: null
}


export { Accordion as default };