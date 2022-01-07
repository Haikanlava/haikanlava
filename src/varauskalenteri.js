/**
 * Created by jannevainio on 13/01/17.
 */
import React from 'react';
import CalEvents from './calevents';
import PlainClosableLayout from './plainclosablelayout';
import RenderIntros from './renderintros';

const Varauskalenteri = () =>
  <PlainClosableLayout text="Varauskalenteri">
    <RenderIntros sheetName="varauskalenteri" numbering={false} align="center"/>
    <CalEvents />
  </PlainClosableLayout>

export default Varauskalenteri;
