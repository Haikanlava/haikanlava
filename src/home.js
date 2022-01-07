/**
 * Created by jannevainio on 13/01/17.
 */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import {CSSTransition, TransitionGroup} from 'react-transition-group' // ES6
import Header from './header';
import { StoreProvider } from './Store';

import Polaroid from './polaroid';
import siteData from './data';

import calendarImg from './img/lava auringossa320.jpg';
import presentationImg from './img/Lavan pihalla320.jpg';
import galleryImg from './img/haat320.jpg';
import contactImg from './img/ilmakuva320.jpg';
import priceImg from './img/juhlissa320.jpg';

const Home = () => {
  const nodeRef = React.useRef(null);

  return (
    <div>
  <Header/>

  <TransitionGroup
      appear={true}
      enter={true}
      exit={false}
       >

     <CSSTransition
       timeout={{ exit: siteData.baseAnimDelay, enter: siteData.baseAnimDelay }}
       classNames="home" nodeRef={nodeRef}>
       <div ref={nodeRef}>

       <div className="mainStyle" >

         <div className="polaroids">
           <Link to="/esittely" ><Polaroid text="Esittely" headerProp={presentationImg}/></Link>
           <Link to="/yhteystiedot" ><Polaroid text="Sijainti" headerProp={contactImg}/></Link>
           <Link to="/varauskalenteri" ><Polaroid text="Katso varaustilanne" headerProp={calendarImg} data={siteData.varauskalenteri}/></Link>
           <Link to="/kuvagalleria" ><Polaroid text="Kuvia" headerProp={galleryImg}/></Link>
           <Link to="/hinnasto" ><Polaroid text="Hinnasto" headerProp={priceImg}/></Link>
         </div>
       </div>
       </div>
     </CSSTransition>

    </TransitionGroup>
      </div>
  );
};

export default Home;
