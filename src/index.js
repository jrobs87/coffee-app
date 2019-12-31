// Component Summary
// This component serves as the entry point for the App and provides client-side routing.
// All components except for the Navigation or any other globally available component should 
// be children of the Switch component.

// React DOM + React Router + React Transition Group
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// ServiceWorker for Progressive Web Apps (optional)
import * as serviceWorker from './serviceWorker';

// CSS Imports + External Libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// React Routes (serve as page components)
import RouteZero from './routes/Route_00';
import RouteOne from './routes/Route_01';
import Route404 from './routes/Route_404';
import RouteScaffold from './routes/Route_Scaffold';

// React Components (for rendering globally)
import Nav from './components/Nav';

// Component Code
// Define the Router and Switch (include all Route components).
// Include Navigation or other globals outside of the Switch.
const routing = (
  <Router>
  <Nav />
    <Switch>
        <Route exact path="/" component={RouteZero} />
        <Route path="/route-1" component={RouteOne} />
        <Route path="/route-scaffold" component={RouteScaffold} />
        <Route component={Route404} />
    </Switch>
  </Router>
)

// Render the Router (entry point for the App)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your App to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
