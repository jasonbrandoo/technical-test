import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import UserList from './components/UserList';
import User from './components/User';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div className="App">
    <AppNavbar />
    <BrowserRouter>
      <Container>
        <Switch>
          <Route exact path="/" component={UserList} />
          <Route exact path="/user/:id" component={User} />
        </Switch>
      </Container>
    </BrowserRouter>
  </div>
);

export default App;
