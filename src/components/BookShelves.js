// Module imports
import React from 'react';
import PropTypes from 'prop-types';

// Component imports
import BookShelf from './BookShelf';

/**
 *  Displays multiple shelves
 * @constructor
 * @param {Object[]} books - List of books
 * @param {Object[]} shelves - List of shelves
 */
const BookShelves = ({shelves, books}) => (
  <div className="list-books-content">
    <div>
      {shelves.map(({value, title}) => (
        <BookShelf
          bookList={books.filter(({shelf}) => shelf === value)}
          shelves={shelves}
          title={title}
          key={`shelf-${value}`}
        />
      ))}
    </div>
  </div>
);

// PropTypes
BookShelves.propTypes = {
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
};

// Export component
export default BookShelves;
