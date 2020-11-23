// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component imports
import SearchBar from './SearchBar';
import BookList from './BookList';
import { search } from '../BooksAPI';

/**
 * Search Route
 * @constructor
 */
export default class Search extends Component {
  /**
   * Component State
   */
  state = {
    searchedBookIDs: [],
    searchQuery: ''
  };

  /**
   * Component propTypes
   */
  static propTypes = {
    shelves: PropTypes.array.isRequired
  };

  /**
   * Updates state searchQuery
   * @param {string} searchQuery - Search term
   */
  updateSearchQuery(searchQuery) {
    this.setState(
      () => ({ searchQuery }),
      this.updateSearchBookListWithShelf(searchQuery)
    );
  }

  /**
   * Fetches and updates state searchedBookIDs
   * @param {string} searchQuery - search term
   */
  updateSearchBookListWithShelf(searchQuery) {
    const updater = async () => {
      try {
        const searchResults = searchQuery && (await search(searchQuery, 20));
        const searchBooks = searchResults.items || searchResults;
        const searchedBookIDs = searchBooks && searchBooks.map(({ id }) => id);

        this.setState(() => ({ searchedBookIDs }));
      } catch (error) {
        console.log(error);
      }
    };
    updater();
  }

  /**
   * Returns Search UI
   * @return {object} The UI DOM object
   */
  render() {
    const { searchedBookIDs, searchQuery } = this.state;

    return (
      <div className="search-books">
        <p className="my-3">
          <a
            href="https://github.com/amjedidiah/myreads/blob/main/SEARCH_TERMS.md"
            target="_blank"
          >
            Search Terms
          </a>
        </p>
        <SearchBar
          searchQuery={searchQuery}
          onUpdateSearchQuery={(searchQuery) =>
            this.updateSearchQuery(searchQuery)
          }
        />
        <div className="search-books-results">
          {searchedBookIDs && (
            <BookList
              bookIDList={searchedBookIDs}
              shelves={this.props.shelves}
              onUpdateBookList={() => {}}
            />
          )}
        </div>
      </div>
    );
  }
}
