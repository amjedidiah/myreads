// Module imports
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Component imports
import BookShelves from './BookShelves';
import AddBook from './AddBook';
import {getAll} from '../BooksAPI';

/**
 * Home Route
 * @constructor
 * @param {Object[]} shelfBooks - List of books
 * @param {Object[]} shelves - List of shelves
 */
export default class Home extends Component {
  /**
   * Component State
   */
  state = {
    shelfBooks: [],
  };

  // Component propTypes
  static propTypes = {
    shelves: PropTypes.array,
  };

  /**
   * Fetches and updates state shelfBooks
   */
  updateShelfBooks() {
    const updater = async () => {
      try {
        const shelfBooks = await getAll();

        this.setState(() => ({shelfBooks}));
      } catch (error) {
        console.log(error);
      }
    };

    updater();
  }

  /**
   * Runs functions after component is mounted
   */
  componentDidMount() {
    this.updateShelfBooks();
  }

  /**
   * Returns Home UI
   * @return {obj} The UI DOM object
   */
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {this.state.shelfBooks && (
          <BookShelves
            shelfBooks={this.state.shelfBooks}
            shelves={this.props.shelves}
            onUpdateShelfBooks={() => this.updateShelfBooks()}
          />
        )}
        <AddBook />
      </div>
    );
  }
}
