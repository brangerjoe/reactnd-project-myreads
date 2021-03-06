import React from 'react'

class Bookshelf extends React.Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.displayName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books
                            .filter(book => (this.props.ShowAll === 'true' ? true : book.shelf === this.props.name))
                            .map(book => (
                                <li key={book.id}>
                                    <div className="book">
                                        <div className="book-top">
                                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + (book.imageLinks !== undefined ? book.imageLinks.smallThumbnail : '') + ')' }}></div>
                                            <div className="book-shelf-changer">
                                                <select value={book.shelf} onChange={(e) => this.props.onMoveBook(book, e.target.value)}>
                                                    <option value="moveTo" disabled>Move to...</option>
                                                    <option value="currentlyReading">Currently Reading</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="read">Read</option>
                                                    <option value="none">None</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                        <div className="book-authors">{book.authors && book.authors[0]}</div>
                                    </div>
                                </li>
                            ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf