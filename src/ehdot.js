/**
 * Created by jannevainio on 13/01/17.
 */
import React from 'react';
import siteData from './data';
import PlainClosableLayout from './plainclosablelayout';
import RenderIntros from './renderintros';

const Vuokraehdot = () => {
  return (
    <PlainClosableLayout text={siteData.vuokraehdot.title}>
      <RenderIntros intro={siteData.vuokraehdot.intro}/>
    </PlainClosableLayout>
  );
};

export default Vuokraehdot;
