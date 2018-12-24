import React from 'react'
import PropTypes from 'prop-types'
import * as UserAPI from '../UserAPI'

export default class Book extends React.Component {

    onHandleSelectionChange = (e) => {
        switch (e.target.value) {
            case 'currentlyReading':
                UserAPI.saveBook(1, this.props.book.id);
                break;
            case 'wantToRead':
                UserAPI.saveBook(2, this.props.book.id);
                break;
            case 'read':
                UserAPI.saveBook(3, this.props.book.id);
                break;
            case 'none':
                //UserAPI.deleteBook(4, this.props.book.id);
                break;
        }
        this.props.onUploadShelves();
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.book.props.image})` }}></div>
                <div className="book-shelf-changer">
                    <select onChange={this.onHandleSelectionChange}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                {
                    this.props.book.authors !== undefined
                    ? this.props.book.authors.map(author => (<div className="book-authors">{author}</div>))
                    : ""
                }
            </div>
        )
    }

}