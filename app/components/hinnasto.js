/**
 * Created by jannevainio on 13/01/17.
 */
import React from 'react';
import { Link } from 'react-router-dom';

import PlainClosableLayout from './plainclosablelayout';
import RenderIntros from './renderintros';
import Jimage from './jimage';
import { useStore } from './Store';

const contactImg = require("file-loader!../img/juhlissa1200.jpg");

const Hinnasto = () => {

  const { lavaData } = useStore();

  if(lavaData.length == 0){
    return(<div></div>)
  }
  return (
    <PlainClosableLayout text={lavaData[0][0]}  >


      <div className="minWrapper">
        <table className="priceTable">
          <tbody>
          <tr><td className="wholeRow" colSpan={4}>Yksityiset vuokraajat (alv 24%)</td></tr>

          <tr>
            <th></th><th>hinta</th><th></th><th className="lastCell">Varaus&#173;maksu</th>
          </tr>
          <tr>
            <td className="firstCell">Maanantai-torstai</td><td>{lavaData[2][1]}€</td><td>vrk</td><td>{lavaData[2][2]}€</td>

          </tr>
          <tr>
            <td className="firstCell">Perjantai-sunnuntai</td><td>{lavaData[3][1]}€</td><td>vrk</td><td>{lavaData[3][2]}€</td>
          </tr>
          <tr>
            <td className="firstCell">Viikonloppu&#173;paketti <br/> (pe klo 12 - su klo 12)</td><td>{lavaData[4][1]}€</td><td>2 vrk</td><td>{lavaData[4][2]}€</td>
          </tr>

          <tr><td className="wholeRow" colSpan={4}>Yritykset (alv 0%)</td></tr>

          <tr>
            <th></th><th>hinta</th><th></th><th className="lastCell">Varaus&#173;maksu</th>
          </tr>
          <tr>
            <td className="firstCell">Maanantai-torstai</td><td>{lavaData[6][1]}€</td><td>vrk</td><td>{lavaData[6][2]}€</td>

          </tr>
          <tr>
            <td className="firstCell">Perjantai-sunnuntai</td><td>{lavaData[7][1]}€</td><td>vrk</td><td>{lavaData[7][2]}€</td>
          </tr>
          <tr>
            <td className="firstCell">Viikonloppu&#173;paketti <br/> (pe klo 12 - su klo 12)</td><td>{lavaData[8][1]}€</td><td>2 vrk</td><td>{lavaData[8][2]}€</td>
          </tr>

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
