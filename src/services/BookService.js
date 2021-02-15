
export default class BookService {

  data = [
    {
      id: 1,
      title: 'Harry Potter and the Philosophers Stone',
      author: 'J.K. Rowling',
      price: 15,
      coverImage: 'https://img-gorod.ru/24/446/2444651_detail.jpg'
    },
    {
      id: 2,
      title: 'Zen Way',
      author: 'Alan Watts',
      price: 21,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/71eqs8n-0uL.jpg'
    }
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(Math.random() > 0.75) {
          reject(new Error('Error'))
        } else{
          resolve(this.data)
        }
      }, 1000)
    })
  }
}