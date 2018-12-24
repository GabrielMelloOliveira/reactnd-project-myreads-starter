import React from 'react'
import Book from './Book'

export default (props) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {
                    props.books.map((book, index) => (
                        <li><Book key={index} book={book} onUploadShelves={props.onUploadShelves} /></li>
                    ))
                }
            </ol>
        </div>
    </div>
)