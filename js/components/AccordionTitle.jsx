import React from 'react';
import PropTypes from 'prop-types';

function AccordionTitle(props) {
    const { expanded} = props

    const accordionClassName = [
      'accordion-title',
      expanded ? 'accordion-title-expanded' : 'accordion-title-closed'
    ]
      .filter(Boolean)
      .join(' ')

    return <button aria-label="Toggle" className={accordionClassName} {...props}>{props.title}</button>
}

AccordionTitle.propTypes = {
  expanded: PropTypes.number,
  title: PropTypes.string
}

AccordionTitle.defaultProps = {
  expanded: false,
  title: ''
};

export { AccordionTitle as default };