
const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 220
}

const updateCartItems = (cartItems, item, index) => {
  if (item.count === 0) {
    return [
      ...cartItems.slice(0, index),
      ...cartItems.slice(index + 1)
    ]
  }
  if (index === -1) {
    return [
      ...cartItems,
      item
    ];
  }

  return [
    ...cartItems.slice(0, index),
    item,
    ...cartItems.slice(index + 1)
  ];
};

const updateCartItem = (book, item = {}, quantity) => {

  const {
    id = book.id,
    count = 0,
    title = book.title,
    total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity*book.price
  };
};

const updateOrder = (state, bookId, quantity) => {
  const { books, cartItems } = state;

  const book = books.find(({id}) => id === bookId);
  const itemIndex = cartItems.findIndex(({id}) => id === bookId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(book, item, quantity);
  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, itemIndex)
  };
};

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
      return updateOrder(state, action.payload, 1);
      // let newItem;
      // if(item) {
      //   newItem = {
      //     ...item,
      //     count: item.count + 1,
      //     total: item.total + book.price
      //   }
      //   } else {
      //     newItem = {
      //       id: book.id,
      //       title: book.title,
      //       count: 1,
      //       total: book.price
      //     }
      //   }

      //   if(itemIndex < 0) {
      //     return {
      //       ...state, 
      //       cartItems: [ ...state.cartItems, newItem ]
      //     };
      //   } else {
      //     return {
      //       ...state, 
      //       cartItems: [ ...state.cartItems.slice(0, itemIndex), newItem, ...state.cartItems.slice(itemIndex + 1)]
      // };
      //   }
      case 'REMOVED_BOOK':
        return updateOrder(state, action.payload, -1);
      case 'ALL_REMOVED_BOOK':
        const item = state.cartItems.find(({id}) => id === action.payload)
        return updateOrder(state, action.payload, -item.count);
    default:
      return state;
  };
}


export default reducer;