import React, { Fragment } from 'react';


const BookListItem = ({ book }) => {
  const { author, title } = book
    return(
      <Fragment>
        <span>{title}</span>
        <span>{author}</span>
      </Fragment>
    )

}

export default BookListItem;