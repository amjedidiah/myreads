// Module imports
import React, {Component} from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';

// Component imports
import Home from './components/Home';
import Search from './components/Search';

// Asset imports
import './App.css';

/**
 * A Bookshelp app
 * @constructor
 */
export default class BooksApp extends Component {
  /**
   * Returns BookRoute UI
   * @return {obj} The UI DOM object
   */
  render = () => {
    const shelves = [
      {value: 'wantToRead', title: 'Want To Read'},
      {value: 'currentlyReading', title: 'Currently Reading'},
      {value: 'read', title: 'Read'},
    ];

    const books = [];

    return (
      <Router>
        <div className="app">
          <Route
            exact
            path="/"
            component={(props) => (
              <Home {...props} books={books} shelves={shelves} />
            )}
          />
          <Route
            path="/search"
            component={(props) => (
              <Search {...props} books={books} shelves={shelves} />
            )}
          />
        </div>
      </Router>
    );
  };
}
