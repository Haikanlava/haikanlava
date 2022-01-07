/**
 * Created by jannevainio on 13/01/17.
 */
import React from 'react';
import siteData from './data';

const Polaroid = ({headerProp, text}) =>
  <figure>
    <div className="thumbnail">
      <img src={headerProp}/>
    </div>
    <figcaption>{text}</figcaption>
  </figure>

export default Polaroid;