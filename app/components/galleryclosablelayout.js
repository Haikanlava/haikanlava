/**
 * Created by jannevainio on 13/01/17.
 */
import React from 'react';
import Button from './button';
import { withRouter } from 'react-router-dom'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6
import siteData from './data';

const GalleryClosableLayout = props => {
  function handleClick () {
    props.history.goBack();
  }
  return (
    <ReactCSSTransitionGroup
      transitionName="figureView"
      transitionAppear={true}
      transitionEnter={true}
      transitionLeave={false}
      transitionAppearTimeout={siteData.baseAnimDelay}
      transitionEnterTimeout={siteData.baseAnimDelay}
      transitionLeaveTimeout={siteData.baseAnimDelay}>
      <div className="figureView">

        <div className="title">
          {props.text}
          <Button handleClick={handleClick} label="X"/>
        </div>

        { props.children }
      </div>
    </ReactCSSTransitionGroup>

  );
};

export default withRouter(GalleryClosableLayout);
