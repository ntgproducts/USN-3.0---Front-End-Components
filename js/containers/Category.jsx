import React from 'react';
import PropTypes from 'prop-types';

class Category extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

  
  render() {
    return (
      <div className="category-container container">
        <div className="stack-row row">
          <div className="column column-75">
            <div className="tile-bg">
              <div className="tile-title-box right-cap bottom-cap">
                <h1>{this.props.mainProduct.name}</h1>
                <h2>{this.props.mainProduct.subTitle}</h2>
                { this.props.mainProduct.descriptionLines && 
                  <div className="left">
                    {this.props.mainProduct.descriptionLines.map( (line) => <p key={line}>{line}</p>)}
                  </div>
                }
                <div className="right">
                  <a href={this.props.mainProduct.ctaLink} className="btn call-to-action-tile-button call-to-action-btn">Shop Now</a>
                </div>
              </div>
              <img className="hidden-xs" src={this.props.mainProduct.image} alt="Background" />
            </div>
          </div>
          {this.props.sideLinkActive &&
            <div className="column column-25">
              <div className="row">
                <ul className="image-list">
                    {this.props.sideLinks.map((link) => (
                      <li key={link.url}>
                        <a href={link.url}>
                          <img src={link.image} alt={link.name} />
                          <span className="product-link-name">{link.name}</span>
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}

Category.defaultProps = {
  mainProduct: {
    name: "Defender Gates",
    subTitle: "Safety Barriers",
    ctaLink: "/",
    descriptionLines: [
      "Toughest Lineup on the Market",
      "ANSI &amp; OSHA compliant"
    ],
    image: 'https://static.usnetting.com/img/gates/dg20grates.jpg'
  },
  sideLinkActive: true,
  sideLinks: [
    {
      name: 'Defender Gate 20',
      image: 'https://static.usnetting.com/img/cart-thumbs/dg20.jpg',
      url: '/safety-barriers/dg-20/'
    },
    {
      name: 'Defender Gate 10',
      image: 'https://static.usnetting.com/img/cart-thumbs/dg10.jpg',
      url: '/safety-barriers/dg-10/'
    },
    {
      name: 'Defender Gate XL',
      image: 'https://static.usnetting.com/img/cart-thumbs/xl.jpg',
      url: '/safety-barriers/dg-xl/'
    },
    {
      name: 'Post Mounted Nets',
      image: 'https://static.usnetting.com/img/cart-thumbs/postmount.jpg',
      url: '/safety-solutions/post-mounted-safety-nets/'
    },
    {
      name: 'Existing Bollard Rings',
      image: 'https://static.usnetting.com/img/cart-thumbs/rings.jpg',
      url: '/safety-solutions/existing-bollard-safety-nets/'
    }
  ]
};

Category.propTypes = {
  mainProduct: {
    name: PropTypes.string,
    subTitle: PropTypes.string,
    ctaLink: PropTypes.string,
    descriptionLines: [
      PropTypes.string
    ],
    image: PropTypes.string
  },
  sideLinkActive: PropTypes.bool,
  sideLinks: [
    { name: PropTypes.string,
      image: PropTypes.string,
      url: PropTypes.string }
  ],
};

export default Category;