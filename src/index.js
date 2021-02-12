import React from 'react';
import ReactDOM from 'react-dom';
import  { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import ErrorBoundry from './components/ErrorBoundry';
import BookService from './services/BookService';
import { BookServiceProvider } from './components/BookServiceContext';
import store from './store'

const bookService = new BookService();

ReactDOM.render (
  // предоставляет доступ к редакс стор => обработка ошибок в компонентах ниже => передает сервис через КонтексАпи => роутер из пакета реакт-роутер
  <Provider store={store}>  
    <ErrorBoundry>
      <BookServiceProvider value={bookService}>
        <Router>
          <App/>
        </Router>
      </BookServiceProvider>
    </ErrorBoundry>
  </Provider>, 
  document.getElementById('root'))
