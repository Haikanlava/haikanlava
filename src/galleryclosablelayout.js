/**
 * Created by jannevainio on 13/01/17.
 */
import React from 'react';
import Button from './button';
import { withRouter } from 'react-router'

const GalleryClosableLayout = props => {

  function handleClick() {
    props.history.goBack();
  }

  return (
    <div className="figureView" >
      <div className="title">
        {props.text}
        <Button handleClick={handleClick} label="X"/>
      </div>

      { props.children }
    </div>
  );
};

export default withRouter(GalleryClosableLayout);
