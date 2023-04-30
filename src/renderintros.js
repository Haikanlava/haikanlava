/**
 * Created by jannevainio on 13/01/17.
 */
import React, {useEffect, useState} from 'react';
import {fetchGoogleData} from './Utils'

const RenderIntros = ({sheetName, numbering=false, align="left"}) => {

  const [calData, setCalData] = useState([]);

  useEffect(() => {
    fetchGoogleData(sheetName, setCalData);
  }, []);

  const style={
    textAlign: align
  };

  console.log(calData);
  return (
    <div>
      {calData.map((item, i) =>
 
        <p style={style} key={i} dangerouslySetInnerHTML={{__html: item}} />
      )}
    </div>
  );
};

export default RenderIntros;
