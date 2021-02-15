
const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 220
}

// const updateCartItems = (cartItems, item, index) => {

//   if (index === -1) {
//     return [
//       ...cartItems,
//       item
//     ];
//   }

//   return [
//     ...cartItems.slice(0, index),
//     item,
//     ...cartItems.slice(index + 1)
//   ];
// };

// const updateCartItem = (book, item = {}) => {

//   const {
//     id = book.id,
//     count = 0,
//     title = book.title,
//     total = 0 } = item;

//   return {
//     id,
//     title,
//     count: count + 1,
//     total: total + book.price
//   };
// };


const reducer = (state = initialState, action) => {
  console.log(action.type);
  
  switch(action.type) {
    case 'BOOK_REQUESTED':
      return { ...state, books: [], loading: true, error: null }
    case 'BOOK_LOADED':
      return { ...state, books: action.payload, loading: false, error: null }
    case 'BOOK_ERROR':
      return { ...state, books: [], loading: false, error: action.payload }
    case 'ADDED_BOOK':
      const bookId = action.payload;
      const book = state.books.find((book) => book.id === bookId);
      const itemIndex = state.cartItems.find(({id}) => id === bookId);
      const item = state.cartItems[itemIndex]


      let newItem;
      if(item) {
        newItem = {
          ...item,
          count: item.count + 1,
          total: item.total + book.price
        }
        } else {
          newItem = {
            id: book.id,
            title: book.title,
            count: 1,
            total: book.price
          }
        }

        if(itemIndex<0) {
          return {
            ...state, 
            cartItems: [ ...state.cartItems, newItem ]
          };
        } else {
          return {
            ...state, 
            cartItems: [ ...state.cartItems.slice(0, itemIndex), newItem, ...state.cartItems.slice(itemIndex + 1)]
      };
        }
      // const newItem = updateCartItem(book, item);
      // return {
      //   ...state,
      //   cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
      // };

    default:
      return state;
  };
}


export default reducer;