/**
 * Created by jannevainio on 13/01/17.
 */
import React from 'react';
import siteData from './data';
import {CSSTransition, TransitionGroup} from 'react-transition-group' // ES6

import logoImg from './img/lavanew1.png';

const Header = props => {
  const headerImgClass = "headerImg";
  const headerClass = "header";
  const headerTextClass = "headerText";
  const headerInfoTextClass = "headerInfoText";
  const headerBannerClass = "headerBanner";
  const logoClass = "logo";
  const nodeRef = React.useRef(null);

  return (

    <TransitionGroup
      appear={true}
      enter={true}
      >
    <CSSTransition
      nodeRef={nodeRef}
      classNames="title"
      timeout={{ exit: siteData.baseAnimDelay, enter: siteData.baseAnimDelay }}
    >

    <div className={headerClass} ref={nodeRef}>

      <div className={logoClass}>
        <img className={headerImgClass} src={logoImg}/>
        <div className={headerTextClass}>
              <span>
                <span>HAIKANLAVA</span>
              </span>
        </div>
      </div>

      <div className={headerBannerClass}> Juhlatilaisuudet Pyhäjärven rannalla</div>

      <div className="clear"></div>
    </div>
    </CSSTransition>
    </TransitionGroup>
  );
};

export default Header;





