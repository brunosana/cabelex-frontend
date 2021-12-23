import React from 'react';
import { Switch } from 'react-router-dom';

import { Route } from './Route';

import { SignIn } from '../Pages/SignIn';
import { Home } from '../Pages/Home';
import { CreateSubsidiary } from '../Pages/CreateSubsidiary';
import { CreateEmployee } from '../Pages/CreateEmployee';

const Routes: React.FC = () => {
    return(
        <Switch>
            <Route path="/" exact component={SignIn} />

            <Route path="/home" component={Home} isPrivate />
            <Route path="/filial" component={CreateSubsidiary} isPrivate />
            <Route path="/employee" component={CreateEmployee} isPrivate />
        </Switch>
    );
};

export { Routes };