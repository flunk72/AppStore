import React, { Component } from 'react';
import BookListItem from '../BookListItem'
import { connect } from 'react-redux'
import { WithBookService } from '../Hoc'
import { fetchBooks, addedBook } from '../../actions'
import { compose } from '../../utils'
import Loader from '../Loader'
import ErrorIndicator from '../ErrorIndicator'
import './BookList.css'

const BookListRender = ({books, onAddedToCart}) => {
  return(
    <ul className="book-list">
      { books.map((book) => {
        return (
          <li key={book.id}><BookListItem onAddedToCart={() => onAddedToCart(book.id)} book={book}/></li>
        )
      })}
    </ul>
)
}
class BookList extends Component {

  componentDidMount() {
    this.props.fetchBooks();
    // const { bookService } = this.props; получаем сервис из контекста с помощью ХОК WithBookService и передаем в стор через буксЛоадед
    // this.props.booksRequsted()
    // bookService.getBooks()
      //.then((data) => {  получаем данные
      //  this.props.booksLoaded(data) (экшн) вызываем функцию которая передает в редакс стор который вызывает редюсер
      // })
      // .catch((err) => this.props.booksError(err))
  }
  render() {

    const { books, loading, error, onAddedToCart } = this.props
    if(loading){
      return <Loader/>
    }
    if(error) {
      return <ErrorIndicator/>
    }
    return <BookListRender books={books} onAddedToCart={onAddedToCart}/>
  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error}
}
const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookService } = ownProps;
  return {
    fetchBooks: fetchBooks(bookService, dispatch),
    onAddedToCart: (id) => dispatch(addedBook(id))
  }
}
// компонент загружается
// => функция коннект оборачивает компонент БукЛист в компонент высшего порядка(ХОК), который подклбчается к стору редакса
// => MSTP описывает данные  которые получаем из редакс стора, MDTP описывает дейсвия выполняет компонент, действия передает в стор
export default compose (
  WithBookService(),
  connect(mapStateToProps,mapDispatchToProps)
)(BookList);