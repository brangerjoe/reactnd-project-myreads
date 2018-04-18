import React from 'react'
import Bookshelf from './Bookshelf'

class ListBooks extends React.Component {
    state = {
        bookshelves: ['currentlyReading', 'wantToRead', 'read']
    }
    render() {
        console.log(this.props)
        return (
            <div className="list-books-content">
                {this.state.bookshelves.map(shelf => (
                    <Bookshelf name={shelf} books={this.props.books} />
                ))}
            </div>
        );
    }
}

export default ListBooks