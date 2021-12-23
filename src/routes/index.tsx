import React from 'react';
import { Switch } from 'react-router-dom';

import { Route } from './Route';

import { SignIn } from '../Pages/SignIn';
import { Home } from '../Pages/Home';
import { CreateSubsidiary } from '../Pages/CreateSubsidiary';
import { CreateEmployee } from '../Pages/CreateEmployee';
import { Employees } from '../Pages/Employees';
import { EditSubsidiary } from '../Pages/EditSubsidiary';
import { EditEmployee } from '../Pages/EditEmployee';

const Routes: React.FC = () => {
    return(
        <Switch>
            <Route path="/" exact component={SignIn} />

            <Route path="/home" component={Home} isPrivate />
            <Route path="/subsidiary" component={CreateSubsidiary} isPrivate />
            <Route path="/employee" component={CreateEmployee} isPrivate />
            <Route path="/employees" exact component={Employees} isPrivate />
            <Route path="/editEmployee/:id" exact component={EditEmployee} isPrivate />
            <Route path="/editSubsidiary/:id" component={EditSubsidiary}  isPrivate />
        </Switch>
    );
};

export { Routes };