/**
 * Created by jannevainio on 13/01/17.
 */
import React from 'react';


const RenderIntros = props => {
  return (
    <div>
      {props.intro.map(function (paragraph, j, intro) {

        var pStyle={};

        if(j>0 && intro[j-1].substring(0, 5) == "STYLE")
          pStyle = JSON.parse(intro[j-1].substring(6));

        if(paragraph.substring(0, 5) != "STYLE")
          return <p style={pStyle} key={j}   dangerouslySetInnerHTML={{__html: paragraph}} ></p>;
      })}
    </div>
  );
};

export default RenderIntros;
