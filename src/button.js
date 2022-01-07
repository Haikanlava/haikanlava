/**
 * Created by jannevainio on 13/01/17.
 */
import React from 'react';

const Button = ({handleClick, label}) =>
  <div className="btn btn-default" onClick={handleClick}>{label}</div>;

export default Button;
