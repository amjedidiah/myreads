// Module imports
import React from 'react';
import PropTypes from 'prop-types';

// Component imports
import Book from './Book';

/**
 * Displays list of books
 * @constructor
 * @param {Object[]} bookList - List of books
 * @param {Object[]} shelves - List of shelves
 */
const BookList = ({bookList, shelves}) => (
  <ol className="books-grid">
    {bookList.map(({authors, id, imageLinks, shelf, title}) => (
      <Book
        authors={authors}
        backgroundImage={imageLinks.thumbnail}
        currentShelf={shelf}
        shelves={shelves}
        title={title}
        key={`book-${id}`}
      />
    ))}
  </ol>
);

// PropTypes
BookList.propTypes = {
  bookList: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
};

// Export Component
export default BookList;
