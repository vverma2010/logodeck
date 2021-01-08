import React from "react";
import CartItem from "./CartItem";
import "../Styles/Cartitem.css";

const Cart = (props) => {
    
  const { products } = props;
  return (
    <div>
      <div className="left-panel">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onDecrease={props.onDecrease}
              onIncrease={props.onIncrease}
              onDeleteProduct={props.onDeleteProduct}
            />
          );
        })}
      </div>
      <div className="right-panel">
        <div className="order-screen">
          <h3>Cart Summary:</h3>
          <div className="item-count">Total items:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.count}</div>
          <div className="cart-amount">Total Amount:&nbsp;&nbsp;{props.cartTotal}&nbsp;&#8377;  </div>
          {(props.cartTotal === 0 ) ? <button>Add items to Order</button> : <button>Place Order</button>}
        </div>
      </div>
    </div>
  );
};

export default Cart;
