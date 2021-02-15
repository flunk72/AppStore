import React from 'react';
import { connect } from 'react-redux';
import './CartTable.css';

const ShoppingCartTable = ({items, total, onInc, onDec, onDelete }) => {
  const renderRow = (item, index) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{index + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button 
            className="btn btn-outline-success btn-sm float-right"
            onClick={() => onInc(id)}>
            <i className="fa fa-plus-circle" />
          </button>
          <button 
            className="btn btn-outline-warning btn-sm float-right"
            onClick={() => onDec(id)}>
            <i className="fa fa-minus-circle" />
          </button>
          <button 
            className="btn btn-outline-danger btn-sm float-right"
            onClick={() => onDelete(id)}>
            <i className="fa fa-trash-o" />
          </button>
        </td>
      </tr>
    )
  }
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { items.map(renderRow)}
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // const { bookService } = ownProps;
  return {
    onInc: (id) => {
      console.log(`Inc ${id}`);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCartTable);