import React from 'react';
import PropTypes from 'prop-types';

class ImageGrid extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div className="image-grid-container">
        {this.props.media.map( (mediaItem) => <div key={mediaItem.name}>Hello {mediaItem.name}</div>)}
        <ThumbContent thumbData={this.props.media} />
      </div>
    )
  }
}

ImageGrid.propTypes = {
  media: PropTypes.arrayOf(PropTypes.object).isRequired
};
ImageGrid.defaultProps = {};

const Image = (props) => (
  <div>
    Image {props.url}
  </div>
);

const Video = (props) => (
  <div>
    Video {props.url}
  </div>
);

Video.propTypes = { url: PropTypes.string.isRequired };
Image.propTypes = { url: PropTypes.string.isRequired };

const ThumbContent = (props) => (
  <div>Your Thumbnails
    <Thumbnail data={props.thumbData} />
  </div>
);

ThumbContent.propTypes = {
  thumbData: PropTypes.arrayOf(PropTypes.object).isRequired
}

const Thumbnail = (props) => <div>Thumbnails {props.data[0].name}</div>
Thumbnail.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default ImageGrid;