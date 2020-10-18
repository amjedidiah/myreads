// Module imports
import React from 'react';
import {Link} from 'react-router-dom';

/**
 * Displays button to add book
 * @constructor
 */
export default function AddBook() {
  return (
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  );
}
