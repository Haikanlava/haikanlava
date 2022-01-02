/**
 * Created by jannevainio on 13/01/17.
 */
import React from 'react';
import { Link } from 'react-router-dom';

import siteData from './data';
import CalEvents from './calevents';
import PlainClosableLayout from './plainclosablelayout';
import RenderIntros from './renderintros';
import { useStore } from './Store';

const Varauskalenteri = () => {
  const { lavaData } = useStore();
  let yhteystiedot1 = "-";
  let yhteystiedot2 = "-";
  if(lavaData.length > 0){
    yhteystiedot1 = lavaData[9][0];
    yhteystiedot2 = lavaData[9][1];
  }
  const pStyle={
    textAlign: "center"
  }
  return (
    <PlainClosableLayout text={siteData.varauskalenteri.title}>
      <RenderIntros intro={siteData.varauskalenteri.intro}/>
      <p style={pStyle}>{yhteystiedot1}</p>
      <p style={pStyle}>{yhteystiedot2}</p>
      <CalEvents />
    </PlainClosableLayout>
  );
};

export default Varauskalenteri;
