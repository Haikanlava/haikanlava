/**
 * Created by jannevainio on 13/01/17.
 */
import React, { useRef, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import PlainClosableLayout from './plainclosablelayout';
import RenderIntros from './renderintros';

const Yhteystiedot = (props) => {

  const ref = useRef(null);

  const [mapWidth, setMapWidth] = useState(300);
  useEffect(() => {
    setMapWidth(ref.current.offsetWidth);
  }, []);

  let googleMap = {
    width: mapWidth + 'px',
    height: 'auto',
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
    width: mapWidth + 'px',
    height: '300px',
    frameborder: '0',
    border: '1px solid #cccccc',
    backgroundColor: '#eeeeee',
    verticalAlign: 'top'
  };

  return (
    <PlainClosableLayout name="yhteystiedot" text="Yhteystiedot">
        <RenderIntros sheetName="yhteystiedot" numbering={false}/>
        <Link style={{ display:'block', textAlign: 'center', color: '#ffffff' }} to="/varauskalenteri"><p
          style={{ margin: '16px auto', textAlign: 'center', color: '#ffffff', background:'#2875C7', padding: '9px',  display: 'inline-block', paddingBottom: '9px', borderRadius: '5px' }}>
          Katso vapaita aikoja</p></Link>

      <div ref={ref}>
        <div style={googleMap}>
          <iframe style={gStyle}
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60942.12872574424!2d23.6486634!3d61.48913679999999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468ed8fe1ac0afaf%3A0xb145cc3ed1168b13!2sHaikan+lava!5e0!3m2!1sen!2sfi!4v1484472523340"
                  allowFullScreen=""></iframe>
        </div>
      </div>
    </PlainClosableLayout>
  );
};

export default Yhteystiedot