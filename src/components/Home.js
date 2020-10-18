// Module imports
import React from 'react';
import PropTypes from 'prop-types';

// Component imports
import BookShelves from './BookShelves';
import AddBook from './AddBook';

/**
 * Home Route
 * @constructor
 * @param {Object[]} books - List of books
 * @param {Object[]} shelves - List of shelves
 */
const Home = ({books, shelves}) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    {books && <BookShelves books={books} shelves={shelves} />}
    <AddBook />
  </div>
);

// PropTypes
Home.propTypes = {
  books: PropTypes.array,
  shelves: PropTypes.array,
};

export default Home;
