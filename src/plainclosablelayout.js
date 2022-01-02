/**
 * Created by jannevainio on 13/01/17.
 */
import React from 'react';
import Button from './button';
import Jimage from './jimage';
import siteData from './data';

import { browserRouter } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import {CSSTransition, TransitionGroup} from 'react-transition-group' // ES6

const PlainClosableLayout = props => {

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
        
        <div className="title narrow">
          {props.text}
          <Button handleClick={handleClick} label="X"/>
        </div>

        <div className="content">

          {props.wideImg ? (
            <Jimage className="wideImg" imgSrc={props.wideImg}/>
          ) : null}
          {props.children}
          {props.image ? (
            <img className="right" src={props.image}/>
          ) : null}

          {props.image2 ? (
            <img className="left" src={props.image2}/>
          ) : null}
        </div>
      </div>
    </CSSTransition>
      </TransitionGroup>
  );
};

export default withRouter(PlainClosableLayout);
