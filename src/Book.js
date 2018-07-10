import React from 'react';


const Book = ({ book, bookShelf }) => {

    const thumbnail = book.imageLinks ? book.imageLinks.smallThumbnail : 'https://via.placeholder.com/128x193?text=NoImage';
    
    const authors = book.authors ? book.authors : 'Unspecified authors';
    
    const bookStyle = {
        width: 128, 
        height: 193, 
        backgroundImage: `url(${thumbnail})`
    };
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={bookStyle}></div>
                            <div className="book-shelf-changer">
                                <select onChange={e => bookShelf(book, e.target.value)} value={book.shelf} >
                                    <option value="none" disabled>Move to...</option>
                                    <option value="none">None</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                </select>
                            </div>
                        </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{authors}</div>
                </div>
            </li>
        );
};

export default Book;
