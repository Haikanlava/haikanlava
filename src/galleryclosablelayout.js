/**
 * Created by jannevainio on 13/01/17.
 */
import React from 'react';
import Button from './button';
import { withRouter } from 'react-router'

import {CSSTransition, TransitionGroup} from 'react-transition-group' // ES6
import siteData from './data';

const GalleryClosableLayout = props => {
  const nodeRef = React.useRef(null);

  function handleClick () {
    props.history.goBack();
  }
  return (
    <TransitionGroup
      appear={true}
      enter={true}
      exit={false}
    >
    <CSSTransition
      nodeRef={nodeRef}
      classNames="figureView"
      timeout={{ exit: siteData.baseAnimDelay, enter: siteData.baseAnimDelay }}>
      <div className="figureView" ref={nodeRef}>

        <div className="title">
          {props.text}
          <Button handleClick={handleClick} label="X"/>
        </div>

        { props.children }
      </div>
    </CSSTransition>
    </TransitionGroup>
  );
};

export default withRouter(GalleryClosableLayout);
