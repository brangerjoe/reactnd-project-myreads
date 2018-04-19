import React from 'react'
import { Link, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';

class BooksApp extends React.Component {
	state = {
		books: []
	}

	componentDidMount() {
		BooksAPI.getAll()
			.then((books) => {
				this.setState({
					books: books
				})
			})
	}

	moveBook(book, shelf) {
		BooksAPI.update(book, shelf)
			.then(this.setState(prevState => {
				let bookToUpdate = prevState.books.find(b => (b.id === book.id))
				console.log(`Moving ${bookToUpdate.title} (${bookToUpdate.shelf} -> ${shelf})`)
				bookToUpdate.shelf = shelf;
				return prevState;
			}));
	}

	render() {
		return (
			<div className="app">
				<Route exact path='/' render={() => (
					<div>
						<ListBooks
							books={this.state.books}
							onMoveBook={(book, shelf) => this.moveBook(book, shelf)} />
						<hr />

						<div className="open-search">
							<Link to='/search'>Add a book</Link>
						</div>
					</div>
				)} />

				<Route exact path='/search' render={() => (
					<div>
						<SearchBooks 
							books={this.state.books} 
							onMoveBook={(book, shelf) => this.moveBook(book, shelf)}
						/>
						</div>
				)} />
			</div>
		)
	}
}

export default BooksApp
