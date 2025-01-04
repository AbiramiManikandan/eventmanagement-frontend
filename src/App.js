import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import EventList from './components/Events/EventList';
import Login from './components/Auth/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/events" component={EventList} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
