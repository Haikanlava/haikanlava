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

  return (
    <div>
      {calData.map((item, i) =>
        <p style={style} key={i} >{(numbering ? (i+1) + ". " : "")+ item}</p>
      )}
    </div>
  );
};

export default RenderIntros;
