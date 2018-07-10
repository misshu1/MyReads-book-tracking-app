import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AddBook from './AddBook';
import Home from './Home';
import './App.css';

class BooksApp extends Component {
  render() {
    return (
        <div className="app">
          <Route exact path='/' component={ Home } />
          <Route path='/search' component={ AddBook } />
      </div>
    )
  }
}

export default BooksApp;
