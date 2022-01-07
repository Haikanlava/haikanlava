/**
 * Created by jannevainio on 13/01/17.
 */
import React from 'react';
import PlainClosableLayout from './plainclosablelayout';
import RenderIntros from './renderintros';

import contactImg from './img/Lavan pihalla1200w.jpg';
import image2 from './img/kahvila720.jpg';
import image from './img/lava auringossa1200.jpg';

const Esittely = props =>
  <PlainClosableLayout text="Lavan esittely" wideImg={contactImg} image={image} image2={image2}>
    <RenderIntros sheetName="esittely" numbering={false}/>
  </PlainClosableLayout>

export default Esittely;
