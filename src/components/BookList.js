// Module imports
import React from 'react';
import PropTypes from 'prop-types';

// Component imports
import Book from './Book';

/**
 * Displays list of books
 * @constructor
 * @param {Object[]} bookIDList - List of books
 * @callback onUpdateBookList
 * @param {Object[]} shelves - List of shelves
 */
const BookList = ({bookIDList, onUpdateBookList, shelves}) => (
  <ol className="books-grid">
    {bookIDList &&
      bookIDList.map((bookID) => (
        <Book
          bookID={bookID}
          onUpdateBookSource={() => onUpdateBookList()}
          shelves={shelves}
          key={`book-${bookID}`}
        />
      ))}
  </ol>
);

// Component propTypes
BookList.propTypes = {
  bookIDList: PropTypes.array,
  onUpdateBookList: PropTypes.func.isRequired,
  shelves: PropTypes.array.isRequired,
};

// Export Component
export default BookList;
