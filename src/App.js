import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { StoreProvider } from './Store';
import Home from './home';
import Varauskalenteri from './varauskalenteri';
import Yhteystiedot from './yhteystiedot';
import Esittely from './esittely';
import Kalusto from './kalusto';
import Kuvagalleria from './kuvagalleria';
import Hinnasto from './hinnasto';
import Vuokraehdot from './ehdot';
// test
function App() {
  return (
    <div className="haikanLava">
    <StoreProvider>
      <Router>
        <div>
          <Route path="/" component={Home}/>
          <Route path="/varauskalenteri" component={Varauskalenteri}/>
          <Route path="/yhteystiedot" component={Yhteystiedot} />
          <Route path="/esittely" component={Esittely} />
          <Route path="/kalusto" component={Kalusto} />
          <Route path="/hinnasto" component={Hinnasto} />
          <Route path="/ehdot" component={Vuokraehdot} />
          <Route path="/kuvagalleria" component={Kuvagalleria} />
        </div>
      </Router>
    </StoreProvider>
      </div>
  );
}

export default App;

