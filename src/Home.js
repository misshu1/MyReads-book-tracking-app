import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import escapeRegExp from 'escape-string-regexp';

class Home extends Component {
    state = {         
        currentlyReading: [],
        wantToRead: [],
        read: [] 
    };

    componentDidMount() {
        this.getBooks();
    };
    
    getBooks() {
        BooksAPI.getAll().then(books => {
            const matchCR = new RegExp(escapeRegExp('currentlyReading'));
            let currentlyReading = books ? books.filter(book => matchCR.test(book.shelf)) : null;

            const matchWR = new RegExp(escapeRegExp('wantToRead'));
            let wantToRead = books ? books.filter(book => matchWR.test(book.shelf)) : null;

            const matchR = new RegExp(escapeRegExp('read'));
            let read = books ? books.filter(book => matchR.test(book.shelf)) : null;

            this.setState({ currentlyReading, wantToRead, read });
        })
    };

    bookShelf(book, shelf) {
        BooksAPI.update(book, shelf).then(() => this.getBooks());
    };

    renderShelf(books, title) {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {console.log(books, title)}
                        {books.map((book, index) =>
                            <Book
                                key={index}
                                book={book}
                                bookShelf={this.bookShelf.bind(this)}
                            />)}
                    </ol>
                </div>
            </div>
        )
    };

  render() {
    return (
        <div className="list-books">
            <div className="list-books-title">
                    <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {this.renderShelf(this.state.currentlyReading, 'Currently Reading')}
                    {this.renderShelf(this.state.wantToRead, 'Want to Read')}
                    {this.renderShelf(this.state.read, 'Read')}
                </div>
            </div>
            <div className="open-search">
                <Link to='/add-book'>Add a book</Link>
            </div>
        </div>
    )
  }
};

export default Home;
