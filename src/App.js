import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Collections from './components/collections';
import NotFound from './components/notFound';
import Search from './components/search';
import Home from './components/home';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main className='container'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/collection' component={Collections} />
            <Route path='/search' component={Search} />
            <Route path='/not-found' component={NotFound} />
            <Redirect from='/' exact to='/search' />
            <Redirect to='/not-found' />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
