/**
 * Created by jannevainio on 13/01/17.
 */
import React from 'react';
import PlainClosableLayout from './plainclosablelayout';
import RenderIntros from './renderintros';

const Esittely = props =>
  <PlainClosableLayout name="kalusto" text="Kalustoluettelo ">
    <RenderIntros sheetName="kalusto" numbering={false}/>
  </PlainClosableLayout>

export default Esittely;
