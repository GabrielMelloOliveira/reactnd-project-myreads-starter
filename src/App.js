import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import * as UserAPI from './UserAPI'
import Shelve from './components/Shelve'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    booksCurrentlyReading: [],
    booksWantToRead: [],
    booksRead: []
  }

  onChangeShowSearchPage = () => this.setState({ showSearchPage: false })

  onUploadShelves = () => {
    this.setState({
      booksCurrentlyReading: [],
      booksWantToRead: [],
      booksRead: []
    })

    if (UserAPI.getShelve(1) !== null) {

      UserAPI.getShelve(1).map((bookId, index) => {
        BooksAPI.get(bookId).then((book) => {
          this.setState(currentState => ({ 
            booksCurrentlyReading: [...currentState.booksCurrentlyReading, book] 
          }))
        })
      })

    }
      
    if (UserAPI.getShelve(2) !== null) {

      UserAPI.getShelve(2).map((bookId, index) => {
        BooksAPI.get(bookId).then((book) => {
          this.setState(currentState => ({ 
            booksWantToRead: [...currentState.booksWantToRead, book] 
          }))
        })
      })

    }
      
    if (UserAPI.getShelve(3) !== null) {

      UserAPI.getShelve(3).map((bookId, index) => {
        BooksAPI.get(bookId).then((book) => {
          this.setState(currentState => ({ 
            booksRead: [...currentState.booksRead, book] 
          }))
        })
      })

    }
  }

  componentDidMount() {

    if (UserAPI.getShelve(1) !== null) {

      UserAPI.getShelve(1).map((bookId, index) => {
        BooksAPI.get(bookId).then((book) => {
          this.setState(currentState => ({ 
            booksCurrentlyReading: [...currentState.booksCurrentlyReading, book] 
          }))
        })
      })

    }
      
    if (UserAPI.getShelve(2) !== null) {

      UserAPI.getShelve(2).map((bookId, index) => {
        BooksAPI.get(bookId).then((book) => {
          this.setState(currentState => ({ 
            booksWantToRead: [...currentState.booksWantToRead, book] 
          }))
        })
      })

    }
      
    if (UserAPI.getShelve(3) !== null) {

      UserAPI.getShelve(3).map((bookId, index) => {
        BooksAPI.get(bookId).then((book) => {
          this.setState(currentState => ({ 
            booksRead: [...currentState.booksRead, book] 
          }))
        })
      })

    }
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage onChangeShowSearchPage={this.onChangeShowSearchPage} onUploadShelves={this.onUploadShelves} />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <Shelve title="Currently Reading" books={this.state.booksCurrentlyReading} onUploadShelves={this.onUploadShelves} />
                <Shelve title="Want to Read" books={this.state.booksWantToRead} onUploadShelves={this.onUploadShelves} />
                <Shelve title="Read" books={this.state.booksRead} onUploadShelves={this.onUploadShelves} />
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
