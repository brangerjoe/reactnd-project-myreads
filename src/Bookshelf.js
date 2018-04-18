import React from 'react'

class Bookshelf extends React.Component {
    render() {
        return (
            <div className="list-books-content" >
                <div>{this.props.name}</div>
                <ol>
                    {this.props.books && this.props.books
                        .filter(book => (book.shelf === this.props.name))
                        .map(book => (
                            <li>{book.title}</li>
                        ))}
                </ol>
            </div>
        )
    }
}

export default Bookshelf