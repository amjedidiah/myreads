// Module imports
import React from 'react';
import PropTypes from 'prop-types';

// Component imports
import BookShelf from './BookShelf';

/**
 *  Displays multiple shelves
 * @constructor
 * @callback onUpdateShelfBooks
 * @param {Object[]} shelfBooks - List of books belonging to a shelf
 * @param {Object[]} shelves - List of shelves
 */
const BookShelves = ({onUpdateShelfBooks, shelves, shelfBooks}) => (
  <div className="list-books-content">
    <div>
      {shelves.map(({value, title}) => (
        <BookShelf
          onUpdateParticularShelfBooks={() => onUpdateShelfBooks()}
          particularShelfBooks={shelfBooks.filter(
              ({shelf}) => shelf === value,
          )}
          shelves={shelves}
          title={title}
          key={`shelf-${value}`}
        />
      ))}
    </div>
  </div>
);

// Component propTypes
BookShelves.propTypes = {
  onUpdateShelfBooks: PropTypes.func.isRequired,
  shelfBooks: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
};

// Export component
export default BookShelves;
