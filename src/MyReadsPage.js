import React, { Component } from 'react';
import Book from './Book'

class MyReads extends Component {
  
    render() {
        const { books, name, onShelfChange} = this.props

        return (
            <div className='book-category'>
                <div className='category-title'>
                    {name}
                </div>
                <Book books={books} onShelfChange={onShelfChange}/>
            </div>
        )
    }
}

export default MyReads;