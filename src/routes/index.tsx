import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Information from '../pages/Information';

const Routes:React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/information/:information+" component={Information} />
    </Switch>
);

export default Routes;