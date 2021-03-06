/**
 * Created by jannevainio on 22/01/17.
 */
import React from 'react';

class Jimage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {loaded: false};
    this.handleLoad = this.handleLoad.bind(this);

  }
  handleLoad() {
    this.setState({loaded:true});
  }
  render() {
    let imageStyle = {
      height: 'auto',
      width: '200px',
      position: 'relative',
      overflow: "visible",
      textAlign: 'center',
      marginLeft: "auto",
      marginRight: "auto"
    };
    imageStyle.width = this.props.containerWidth + 'px';
    if(this.props.maxWidth){
      imageStyle.maxWidth = this.props.maxWidth + 'px';

    }
    return (
      <div>
        <div
          className="jIMage"
          style={imageStyle}>
          <img onLoad={this.handleLoad} src={this.props.imgSrc} />
        </div>
      </div>
    );
  }

};

export default Jimage
