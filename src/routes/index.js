import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import PartialResults from '../pages/PartialResults';
import RaceClassification from '../pages/RaceClassification';

export const HOME_ROUTE = '/';
export const PARTIAL_RESULTS_ROUTE = '/partial-results';
export const RACE_CLASSIFICATION_ROUTE = '/race-classification';

const Routes = () => (
  <Switch>
    <Route path={HOME_ROUTE} exact>
      <Home />
    </Route>

    <Route path={PARTIAL_RESULTS_ROUTE}>
      <PartialResults />
    </Route>

    <Route path={RACE_CLASSIFICATION_ROUTE}>
      <RaceClassification />
    </Route>
  </Switch>
);

export default Routes;
