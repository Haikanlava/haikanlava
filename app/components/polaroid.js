/**
 * Created by jannevainio on 13/01/17.
 */
import React from 'react';
import siteData from './data';

const Polaroid = props => {
  return (
    <figure>
      <div className="thumbnail">
        <img src={props.headerProp}/>
      </div>
      <figcaption>{props.text}</figcaption>
    </figure>
  );
};

export default Polaroid;