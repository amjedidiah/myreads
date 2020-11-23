// Module imports
import React from 'react';
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
export default function BooksApp() {
  const shelves = [
    {value: 'wantToRead', title: 'Want To Read'},
    {value: 'currentlyReading', title: 'Currently Reading'},
    {value: 'read', title: 'Read'},
  ];

  return (
    <Router basename="/myreads">
      <div className="app">
        <Route
          exact
          path="/"
          component={(props) => <Home {...props} shelves={shelves} />}
        />
        <Route
          path="/search"
          component={(props) => <Search {...props} shelves={shelves} />}
        />
      </div>
    </Router>
  );
}
