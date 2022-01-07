/**
 * Created by jannevainio on 13/01/17.
 */
import React from 'react';
import PlainClosableLayout from './plainclosablelayout';
import RenderIntros from './renderintros';

const Vuokraehdot = () =>
  <PlainClosableLayout text="Vuokraehdot">
    <RenderIntros sheetName="vuokraehdot" numbering={true}/>
  </PlainClosableLayout>

export default Vuokraehdot;
