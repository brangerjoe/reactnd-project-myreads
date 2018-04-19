import React from 'react'
import Bookshelf from './Bookshelf'

class ListBooks extends React.Component {
    state = {
        bookshelves: [
            { title: 'Currently Reading', id: 'currentlyReading' },
            { title: 'Want to Read', id: 'wantToRead' },
            { title: 'Read', id: 'read' }
        ]
    }

    render() {
        console.log(this.props)
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {this.state.bookshelves.map(shelf => (
                        <Bookshelf
                            key={shelf.id}
                            name={shelf.id}
                            displayName={shelf.title}
                            books={this.props.books}
                            onMoveBook={this.props.onMoveBook}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default ListBooks