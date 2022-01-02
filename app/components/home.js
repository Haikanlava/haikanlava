/**
 * Created by jannevainio on 13/01/17.
 */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6
import Header from './header';
import { StoreProvider } from './Store';

import Polaroid from './polaroid';
import siteData from './data';

const calendarImg = require("file-loader!../img/lava auringossa320.jpg");
const presentationImg = require("file-loader!../img/Lavan pihalla320.jpg");
const galleryImg = require("file-loader!../img/haat320.jpg");
const contactImg = require("file-loader!../img/ilmakuva320.jpg");
const priceImg = require("file-loader!../img/juhlissa320.jpg");

const Home = () => {
  return (
    <ReactCSSTransitionGroup
      transitionName="home"
      transitionAppear={true}
      transitionEnter={true}
      transitionLeave={false}
      transitionAppearTimeout={siteData.baseAnimDelay}
      transitionEnterTimeout={siteData.baseAnimDelay}
      transitionLeaveTimeout={siteData.baseAnimDelay}>
      <Header title={siteData.siteTitle}/>

      <div className="mainStyle" >

        <div className="polaroids">
          <Link to="/esittely" ><Polaroid text="Tutustu meihin" headerProp={presentationImg}/></Link>
          <Link to="/yhteystiedot" ><Polaroid text="Sijainti" headerProp={contactImg}/></Link>
          <Link to="/varauskalenteri" ><Polaroid text="Katso varaustilanne" headerProp={calendarImg} data={siteData.varauskalenteri}/></Link>
          <Link to="/kuvagalleria" ><Polaroid text="Kuvia" headerProp={galleryImg}/></Link>
          <Link to="/hinnasto" ><Polaroid text="Hinnasto" headerProp={priceImg}/></Link>
        </div>
      </div>
    </ReactCSSTransitionGroup>
  );
};

export default Home;
