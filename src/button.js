/**
 * Created by jannevainio on 13/01/17.
 */
import React from 'react';

const Button = props => {
  return (
    <div
      className="btn btn-default"
      onClick={props.handleClick}>{props.label}
    </div>
  );
};

export default Button;
