/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotFound } from 'strapi-helper-plugin';
import HistoryPage from "../../components/HistoryPage";
// Utils
import pluginId from '../../pluginId';
// Containers
import HomePage from '../HomePage';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path={`/plugins/${pluginId}`} component={HomePage} exact />
        <Route component={NotFound} />
        <Route
          path={`/plugins/${pluginId}/history`}
          component={HistoryPage}
          exact
      />
      </Switch>
    </div>
  );
};

export default App;
