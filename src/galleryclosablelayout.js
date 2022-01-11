/**
 * Created by jannevainio on 13/01/17.
 */
import React from 'react';
import Button from './button';
import { withRouter } from 'react-router'

const GalleryClosableLayout = props => {
  const nodeRef = React.useRef(null);

  function handleClick() {
    props.history.goBack();
  }

  return (
    <div className="figureView" ref={nodeRef}>
      <div className="title">
        {props.text}
        <Button handleClick={handleClick} label="X"/>
      </div>

      { props.children }
    </div>
  );
};

export default withRouter(GalleryClosableLayout);
