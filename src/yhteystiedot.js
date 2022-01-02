/**
 * Created by jannevainio on 13/01/17.
 */
import React from 'react';
import { Link } from 'react-router-dom';

import siteData from './data';
import PlainClosableLayout from './plainclosablelayout';
import RenderIntros from './renderintros';
import { useStore } from './Store';

import contactImg from './img/ilmakuva1200wt.jpg';

const Yhteystiedot = (props) => {

  const { lavaData } = useStore();

  let googleMap = {
    width: '49%',
    height: 'auto',
    //border: '1px solid #cccccc',
    float: 'none',
    padding: '0',
    marginTop: '25px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '10px'
  };

  let gStyle = {
    margin: '0 auto',
    padding: '0',
    width: '300px',
    height: '225px',
    frameborder: '0',
    border: '1px solid #cccccc',
    backgroundColor: '#eeeeee',
    verticalAlign: 'top'
  };

  let right={
    float: 'left',
    width: 'auto',
    marginTop: '5px'

  };

  var w="300px";
  var sW = props.containerWidth + 96/2;
  var h="225px";
  var rh = "auto";
  if(props.containerWidth >= 700){
    w="384px";
    h="288px";
    googleMap.float = 'right';
    googleMap.marginLeft = '9px';
    googleMap.marginRight = '0';
    rh = (props.containerWidth - 382) + 'px';
    var sW = props.containerWidth + 382 + 96/2;

  }

  gStyle.width = w;
  gStyle.height = h;
  googleMap.width = w;
  right.width = rh;

  let yhteystiedot = "-";
  if(lavaData.length > 0){
    yhteystiedot = lavaData[9][0] + " " + lavaData[9][1]
  }
  return (
    <PlainClosableLayout text={siteData.yhteystiedot.title} wideImg={contactImg}>
      <div style={right}>
        <RenderIntros intro={siteData.yhteystiedot.intro}/>
        <p>{yhteystiedot}</p>
        <Link style={{ display:'block', textAlign: 'center', textDecoration: 'underline', color: '#ffffff' }} to="/varauskalenteri" ><p style={{ margin: '16px auto', textAlign: 'center', color: '#ffffff', background:'#2875C7', padding: '6px',  display: 'inline-block', paddingBottom: '9px', borderRadius: '5px' }}>Katso vapaita aikoja</p></Link>
      </div>

      <div style={googleMap}>
        <iframe style={gStyle} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60942.12872574424!2d23.6486634!3d61.48913679999999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468ed8fe1ac0afaf%3A0xb145cc3ed1168b13!2sHaikan+lava!5e0!3m2!1sen!2sfi!4v1484472523340" allowFullScreen=""></iframe>
      </div>


    </PlainClosableLayout>
  );

};

export default Yhteystiedot // Enhanced component