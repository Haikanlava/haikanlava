/**
 * Created by jannevainio on 13/01/17.
 */
import React from 'react';
import Button from './button';
import Jimage from './jimage';
import siteData from './data';
import { useStore } from './Store';

import { browserRouter } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import {CSSTransition, TransitionGroup} from 'react-transition-group' // ES6

const PlainClosableLayout = props => {

  const data = useStore();
  const nodeRef = React.useRef(null);
  const pageData = props.name && data[props.name] ? data[props.name] : null;

  const wideImage = pageData && pageData.wideImage1st ? pageData.wideImage1st : props.wideImg;
  const image1 = pageData && pageData.image1 ? pageData.image1 : props.image1;
  const image2 = pageData && pageData.image2 ? pageData.image2 : props.image2;

  const onBottom = props.onBottom ? true : false;

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
        
        <div className="title narrow">
          {props.text}
          <Button handleClick={handleClick} label="X"/>
        </div>

        <div className="content">

          {wideImage && !onBottom ? (
            <Jimage className="wideImg" imgSrc={wideImage}/>
          ) : null}
          {props.children}
          {image1 ? (
            <img className="right" src={image1}/>
          ) : null}

          {image2 ? (
            <img className="left" src={image2}/>
          ) : null}
          {wideImage && onBottom ? (
            <Jimage maxWidth={props.maxWidth} className="wideImg" imgSrc={wideImage}/>
          ) : null}
        </div>
      </div>
    </CSSTransition>
      </TransitionGroup>
  );
};

export default withRouter(PlainClosableLayout);
