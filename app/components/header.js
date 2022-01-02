/**
 * Created by jannevainio on 13/01/17.
 */
import React from 'react';
import siteData from './data';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

const logoImg = require("file-loader!../img/lavanew1.png");

const Header = props => {
  const headerImgClass = "headerImg";
  const headerClass = "header";
  const headerTextClass = "headerText";
  const headerInfoTextClass = "headerInfoText";
  const headerBannerClass = "headerBanner";
  const logoClass = "logo";

  return (

    <ReactCSSTransitionGroup
      transitionName="title"
      transitionAppear={true}
      transitionEnter={true}
      transitionAppearTimeout={siteData.baseAnimDelay}
      transitionEnterTimeout={siteData.baseAnimDelay}
      transitionLeaveTimeout={siteData.baseAnimDelay}>

    <div className={headerClass}>

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
    </ReactCSSTransitionGroup>

  );
};

export default Header;





