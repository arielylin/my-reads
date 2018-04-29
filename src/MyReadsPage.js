import React, { Component } from 'react';
import Book from './Book'

class MyReads extends Component {
  
    render() {
        const { books, name} = this.props
       
        return (
            <div className='book-category'>
                <div className='category-title'>
                    {name}
                </div>
                <ul className="list-books">
                    {books.map((book) => (
                    <li className="book" key={book.id}>
                        <div className='book-image' 
                        style={{backgroundImage: `url(${book.imageLinks.thumbnail})`}}>
                        </div>
                        <p>{book.shelf}</p>
                        <p>{book.title}</p>
                        <p>{book.authors}</p>
                    </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default MyReads;