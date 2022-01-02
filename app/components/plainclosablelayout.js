/**
 * Created by jannevainio on 13/01/17.
 */
import React from 'react';
import Button from './button';
import Jimage from './jimage';
import siteData from './data';

import { browserRouter } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

const PlainClosableLayout = props => {
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
    </ReactCSSTransitionGroup>
  );
};

export default withRouter(PlainClosableLayout);
