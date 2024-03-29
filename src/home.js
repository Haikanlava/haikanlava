/**
 * Created by jannevainio on 13/01/17.
 */
import React from 'react';
import { Link } from 'react-router-dom'
import Header from './header';

import Polaroid from './polaroid';
import { useStore } from './Store';

const Home = () => {

  const data = useStore();
  const calendarImg = data && data.varauskalenteri ? data.varauskalenteri.thumbnailImage : null;
  const galleryImg = data && data.kuvagalleria ? data.kuvagalleria.thumbnailImage : null;
  const presentationImg = data && data.esittely ? data.esittely.thumbnailImage : null;
  const contactImg = data && data.yhteystiedot ? data.yhteystiedot.thumbnailImage : null;
  const priceImg = data && data.hinnasto ? data.hinnasto.thumbnailImage : null;
  const equipmentImg = data && data.kalusto ? data.kalusto.thumbnailImage : null;

  return (
    <div>
      <Header/>
      <div>
        <div className="mainStyle">
          <div className="polaroids">
            <Link to="/esittely"><Polaroid name="esittely" text="Esittely" headerProp={presentationImg}/></Link>
            <Link to="/yhteystiedot"><Polaroid name="yhteystiedot" text="Sijainti" headerProp={contactImg}/></Link>
            <Link to="/varauskalenteri"><Polaroid name="varauskalenteri" text="Katso varaustilanne"
                                                  headerProp={calendarImg} /></Link>
            <Link to="/kuvagalleria"><Polaroid name="kuvagalleria" text="Kuvia" headerProp={galleryImg}/></Link>
            <Link to="/hinnasto"><Polaroid name="hinnasto" text="Hinnasto" headerProp={priceImg}/></Link>
            <Link to="/kalusto"><Polaroid name="kalusto" text="Kalustoluettelo" headerProp={equipmentImg}/></Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
