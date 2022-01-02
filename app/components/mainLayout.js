/**
 * Created by jannevainio on 13/01/17.
 */
import React from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

import Header from './header';
import siteData from './data';

const MainLayout = props => {
  const mainStyle = "mainStyle";
  const myClass = "polaroids";
  return (
    <div className="app">
      <ReactCSSTransitionGroup
        transitionName="title"
        transitionAppear={true}
        transitionEnter={true}
        transitionLeave={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={600}>

        <Header title={siteData.siteTitle}/>
      </ReactCSSTransitionGroup>
      <div className="mainStyle" >
        {props.children}
      </div>
    </div>
  );
};

export default MainLayout;
