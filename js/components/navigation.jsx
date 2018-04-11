import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Make Responsive, Collapse on Mobile sizings

const Nav = () => (
  // const { isSticky, navStyle, isMobile } = props;

    <div className="navigation main-navigation">
      <div className="container navigation-container">
        <ul className="brand">
          <li>
            <Link href="/" to="/">
              <img src="dist/img/system/white-logo-01.png" alt="US Netting" />
              <span className="sr-only">US Netting</span>
            </Link>
          </li>
        </ul>

        <ul className="navigation-links toggle-navigation-links active">
          <li>
            <a className="navigation-link-toggle" href="#open">Menu</a>
          </li>
        </ul>

        <ul className="navigation-links">
          <li><a href="/example">Another Example</a></li>
          <li><a href="/example">Next Example</a></li>
          <li><a href="/example">Example</a></li>
          <li><a href="/example">Contact</a></li>
        </ul>
      </div>
      <div className="mega-menu">
        <div className="mega-menu mega-menu-wrap">
          <div className="container navigation-container">
          <header>
            <h4>Optional Header on the Mega Menu</h4>
          </header>
          <div className="row grid-row">
            <div className="column column-4">
              <ul className="navigation-links">
                <li><a href="/example">Sub Another Example</a></li>
                <li><a href="/example">Sub Next Example</a></li>
                <li><a href="/example">Sub Example</a></li>
                <li><a href="/example">Sub Contact</a></li>
              </ul>
            </div>
            <div className="column column-4">
              <ul className="navigation-links">
                <li><a href="/example">Sub Another Example</a></li>
                <li><a href="/example">Sub Next Example</a></li>
                <li><a href="/example">Sub Example</a></li>
                <li><a href="/example">Sub Contact</a></li>
              </ul>
            </div>
            <div className="column column-4">
              <ul className="navigation-links">
                <li><a href="/example">Sub Another Example</a></li>
                <li><a href="/example">Sub Next Example</a></li>
                <li><a href="/example">Sub Example</a></li>
                <li><a href="/example">Sub Contact</a></li>
              </ul>
            </div>
            <div className="column column-4">
              <ul className="navigation-links">
                <li><a href="/example">Sub Another Example</a></li>
                <li><a href="/example">Sub Next Example</a></li>
                <li><a href="/example">Sub Example</a></li>
                <li><a href="/example">Sub Contact</a></li>
              </ul>
            </div>
          </div></div>
        </div>
      </div>
    </div>
);


// Nav.propTypes = {
//   isSticky: PropTypes.bool,
//   navStyle: PropTypes.string,
//   isMobile: PropTypes.bool
// };

// Nav.defaultProps = {
//   isSticky: false,
//   navStyle: "default",
//   isMobile: false
// }

export default Nav;