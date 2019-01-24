// dependencies
import React from 'react';
import {Route, Switch} from 'react-router-dom';
//components
import App from './components/App';
import Calculator from './components/Calculator';
import Testimonial from './components/Testimonial';
const AppRoutes=()=>
  <App>
      <Switch>

        <Route path="/page-2" component={Calculator} />
        <Route path="/page-1" component={Testimonial} />

      </Switch>
    </App>
export default AppRoutes;
