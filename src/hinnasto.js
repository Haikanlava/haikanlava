/**
 * Created by jannevainio on 13/01/17.
 */
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import PlainClosableLayout from './plainclosablelayout';
import Jimage from './jimage';
import contactImg from './img/juhlissa1200.jpg';
import {fetchGoogleData} from './Utils'

const Hinnasto = () => {

  const [calData, setCalData] = useState([]);

  useEffect(() => {
    fetchGoogleData("hinnasto", setCalData);
  }, []);

  return (
    <PlainClosableLayout text="Hinnasto"  >

      <div className="minWrapper">

        <table className="priceTable">
          <tbody>
          {calData.map((row, i) => {
            return(
              <tr key={i}>
                {row.map((cell, j) => {
                return <td
                  key={j}
                  className={row.length===1 ? "wholeRow" : null}
                  colSpan={4 / row.length} key={j} >
                  <span style={{fontWeight:row.length===2 ? "bold" : "Normal" }}>{cell}</span>
                </td>
              })}
                </tr>
            )
          }
          )}

          <tr><td className="wholeRow white" colSpan={4}>
            <br/>
            <Link style={{ paddingBottom: '15px', textAlign: 'center', textDecoration: 'underline', color: '#ffa577' }} to="/ehdot" >
              <p style={{ textAlign: 'center', color: '#ffa577' }}>Vuokraehdot</p>
            </Link>
          </td></tr>

          <tr><td className="wholeRow white" colSpan={4}>
            <br/>
            <Jimage className="wideImg" imgSrc={contactImg}/>
          </td></tr>

          </tbody>
        </table>

      </div>
    </PlainClosableLayout>
  );
};

export default Hinnasto;
