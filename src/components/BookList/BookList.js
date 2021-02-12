import React, { Component } from 'react';
import BookListItem from '../BookListItem'
import { connect } from 'react-redux'
import { WithBookService } from '../Hoc'
import { booksLoaded } from '../../actions'
import { compose } from '../../utils'

class BookList extends Component {

  componentDidMount() {
    const { bookService } = this.props; // получаем сервис из контекста с помощью ХОК WithBookService и передаем в стор через буксЛоадед
    const data = bookService.getBooks() // получаем данные

    this.props.booksLoaded(data) // (экшн) вызываем функцию которая передает в редакс стор который вызывает редюсер
    
  }
  render() {

    const { books } = this.props
    return(
      <div>
        <ul>
          { books.map((book) => {
            return (
              <li key={book.id}><BookListItem book={book}/></li>
            )
          })}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}
const mapDispatchToProps = {
  booksLoaded
}
// компонент загружается
// => функция коннект оборачивает компонент БукЛист в компонент высшего порядка(ХОК), который подклбчается к стору редакса
// => MSTP описывает данные  которые получаем из редакс стора, MDTP описывает дейсвия выполняет компонент, действия передает в стор
export default compose (
  WithBookService(),
  connect(mapStateToProps,mapDispatchToProps)
)(BookList);