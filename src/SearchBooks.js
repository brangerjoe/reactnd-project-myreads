import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends React.Component {
    state = {
        results: [],
        query: ''
    }

    updateQuery(event) {
        this.setState({
            query: event.target.value
        })
    }

    updateResults(query) {
        if (query === '') {
            this.setState({
                results: []
            })
        }
        else {
            BooksAPI.search(query)
                .then(results => {
                    if (results.error === "empty query") {
                        this.setState({
                            results: []
                        })
                    }
                    else {
                        this.setState({
                            results: results,
                        })
                    }
                })
        }
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(e) => {
                                this.updateQuery(e)
                                this.updateResults(e.target.value)
                            }
                            }
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <Bookshelf
                            name='results'
                            displayName='Results'
                            books={this.state.results.map(result => {
                                let book = this.props.books.find(book => book.id === result.id)
                                result.shelf = book !== undefined ? book.shelf : 'none'
                                return result
                            })}
                            onMoveBook={this.props.onMoveBook}
                            ShowAll='true'
                        />
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks