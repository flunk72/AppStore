import React from 'react';
import { BookServiceConsumer } from '../BookServiceContext';

const WithBookService = () => (Wrapped) => {

  return (props) => {
    return (
      <BookServiceConsumer>
        {
          (bookService) => {
            return (<Wrapped {...props}
                     bookService={bookService}/>);
          }
        }
      </BookServiceConsumer>
    );
  }
};

export default WithBookService;
