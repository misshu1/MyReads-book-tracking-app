import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class AddBook extends Component {
  state = { 
    books: [],
    query: '',
    searchTerms: ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS']
  };
  

  updateQuery = (query) => {
    BooksAPI.search(query).then(books => books ? this.setState({ books }) : []);
    this.setState({ query });
 };


  bookShelf(book, shelf) {
    BooksAPI.update(book, shelf);
  };

  searchBook() {
        if (this.state.query) {
          return this.state.books.error ? 
          <div style={{width: '50vw', textAlign: 'center'}}><p style={{fontWeight: 700}}>Use the keywords below to find a book</p>
          <p style={{backgroundColor: '#ddd', padding: '10px', borderRadius: '10px'}}>{this.state.searchTerms.join(', ')}</p></div> 
          : this.state.books.map((book, index) => {
                  return (
                      <Book
                          key={ index }
                          book={ book }
                          bookShelf={this.bookShelf.bind(this)}
                      />
                  );
              });
      }
  };

    render() {
        return (
        <div>
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input 
                    type="text" 
                    placeholder="Search by title or author" 
                    value={this.state.query} 
                    onChange={(event) => this.updateQuery(event.target.value)}
                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {this.searchBook()}
              </ol>
            </div>
          </div>
        </div>
        )
    }
};

export default AddBook;
