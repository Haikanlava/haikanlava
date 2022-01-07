/**
 * Created by jannevainio on 13/01/17.
 */
import React from 'react';
import logoImg from './img/lavanew1.png';
import { useStore } from './Store';

const Header = props => {
  const { lavaData } = useStore();
  const headerText = lavaData.length == 0 ? "" : lavaData[0][1];

  return (
    <div className="header">
      <div className="logo">
        <img className="headerImg" src={logoImg}/>
        <div className="headerText">
              <span>
                <span>HAIKANLAVA</span>
              </span>
        </div>
      </div>
      <div className="headerBanner">{headerText}</div>
      <div className="clear"></div>
    </div>
  );
};

export default Header;





