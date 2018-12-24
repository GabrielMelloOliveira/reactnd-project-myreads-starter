import React from 'react'
//import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './components/Book'

class SearchPage extends React.Component {

    state = {
        text: '',
        books: []
    }

    handleTextChange = (e) => {
        this.setState({ text: e.target.value }, () => {
                BooksAPI.search(e.target.value).then(data => {
                    this.setState({
                        books: (data !== null && data !== undefined) ? data : []
                    })
                });
            }
        );
    }

    render () {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                <button className="close-search" onClick={this.props.onChangeShowSearchPage}>Close</button>
                <div className="search-books-input-wrapper">
                    <input type="text" onChange={this.handleTextChange} value={this.state.text} placeholder="Search by title or author"/>
                </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.books.map((book, index) => (
                                <li><Book key={index} book={book} onUploadShelves={this.props.onUploadShelves} /></li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        );
    }

}

export default SearchPage