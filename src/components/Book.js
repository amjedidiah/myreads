// Module imports
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Component imports
import BookCover from './BookCover';
import Control from './Control';
import BookAuthors from './BookAuthors';
import {get, update} from '../BooksAPI';

/**
 * Displays a single Book
 * @constructor
 */
export default class Book extends Component {
  /**
   * Component State
   */
  state = {
    book: {},
    currentShelf: '',
  };

  /**
   * Component PropTypes
   */
  static propTypes = {
    bookID: PropTypes.string.isRequired,
    onUpdateBookSource: PropTypes.func.isRequired,
    shelves: PropTypes.array.isRequired,
  };

  /**
   * Updates state currentshelf
   * @param {obj} book
   * @param {string} currentShelf
   */
  updateShelf(book, currentShelf) {
    const updater = async () => {
      if (book) {
        try {
          await update(book, currentShelf);
        } catch (error) {
          console.log(error);
        }
      }

      this.setState(() => ({currentShelf}), this.props.onUpdateBookSource());
    };
    updater();
  }

  /**
   * Fetches single book
   * @param {string} bookID - Book ID
   */
  fetchBook(bookID) {
    const updater = async () => {
      try {
        const book = await get(bookID);

        this.setState(
            () => ({book}),
            this.updateShelf(undefined, book.shelf),
        );
      } catch (error) {
        console.log(error);
      }
    };

    updater();
  }

  /**
   * Runs functions after component has mounted
   */
  componentDidMount() {
    this.fetchBook(this.props.bookID);
  }

  /**
   * Returns Book UI
   * @return {obj} The UI DOM object
   */
  render() {
    const {currentShelf, book} = this.state;
    const {authors, imageLinks, title} = book;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <BookCover
              backgroundImage={`url(${imageLinks && imageLinks.thumbnail})`}
            />
            <Control
              shelves={this.props.shelves}
              onControlChangeShelf={(newShelf) =>
                this.updateShelf(book, newShelf)
              }
              currentShelf={currentShelf}
            />
          </div>
          <div className="book-title">{title}</div>
          <BookAuthors authors={authors} />
        </div>
      </li>
    );
  }
}
