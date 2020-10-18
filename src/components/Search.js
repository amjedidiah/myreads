// Module imports
import React from 'react';
import PropTypes from 'prop-types';

// Component imports
import SearchBar from './SearchBar';
import BookList from './BookList';

/**
 * Search Route
 * @constructor
 * @param {Object[]} books - List of books
 * @param {Object[]} shelves - List of shelves
 */
const Search = ({books, shelves}) => {
  const searchQuery = 'new';

  return (
    <div className="search-books">
      <SearchBar />
      <div className="search-books-results">
        {books && (
          <BookList
            bookList={books.filter(({shelf}) => shelf === searchQuery)}
            shelves={shelves}
          />
        )}
      </div>
    </div>
  );
};

// PropTypes
Search.propTypes = {
  books: PropTypes.array,
  shelves: PropTypes.array,
};

// Export component
export default Search;
