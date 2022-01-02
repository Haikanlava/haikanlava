/**
 * Created by jannevainio on 13/01/17.
 */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StoreProvider } from './components/Store';

import Home from './components/home';
import Varauskalenteri from './components/varauskalenteri';
import Yhteystiedot from './components/yhteystiedot';
import Esittely from './components/esittely';
import Kuvagalleria from './components/kuvagalleria';
import Hinnasto from './components/hinnasto';
import Vuokraehdot from './components/ehdot';




export default (
  <StoreProvider>

  <Router>
    <div>
    <Route path="/" component={Home}/>
    <Route path="/varauskalenteri" component={Varauskalenteri}/>
    <Route path="/yhteystiedot" component={Yhteystiedot} />
    <Route path="/esittely" component={Esittely} />
    <Route path="/hinnasto" component={Hinnasto} />
    <Route path="/ehdot" component={Vuokraehdot} />
    <Route path="/kuvagalleria" component={Kuvagalleria} />
</div>
  </Router>
      </StoreProvider>
);
