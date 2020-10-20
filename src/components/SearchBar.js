// Module imports
import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Displays search bar
 * @constructor
 * @param {string} searchQuery
 * @callback onUpdateSearchQuery
 */
const SearchBar = ({searchQuery, onUpdateSearchQuery}) => (
  <div className="search-books-bar">
    <Link to="/" className="close-search">
      Close
    </Link>
    <div className="search-books-input-wrapper">
      <input
        type="text"
        value={searchQuery}
        placeholder="Search by title or author"
        onChange={(e) => onUpdateSearchQuery(e.target.value)}
      />
    </div>
  </div>
);

// Component propTypes
SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onUpdateSearchQuery: PropTypes.func.isRequired,
};

// Export Component
export default SearchBar;
