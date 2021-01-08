import React from "react";
import "../Styles/Cartitem.css";

const CartItem = (props) => {
  const { price, title, qty, img } = props.product;
  const {product, onIncrease, onDecrease,onDeleteProduct} = props;

  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} alt="" src={product.img} />
      </div>
      <div className="right-block">
        <div className="title">{title}</div>
        <div className="price">&#8377; {price}</div>
        <div className="qty">Quantity: {qty} </div>
        <div className="cart-item-actions">
          {/* Buttons */}
          <img
            onClick={() => onIncrease(product)}
            alt="increase"
            className="action-icons"
            src="https://www.flaticon.com/svg/static/icons/svg/1828/1828817.svg "
          />
          <img
            onClick={() => onDecrease(product)}
            alt="decrease"
            className="action-icons"
            src="https://www.flaticon.com/svg/static/icons/svg/463/463700.svg"
          />
          <img
            alt="delete"
            className="action-icons"
            src="https://www.flaticon.com/svg/static/icons/svg/812/812853.svg"
            onClick={() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
};


const styles = {
  image: {
      height: 160,
      width: 160,
      padding: 10,
      borderRadius: 4,
      background: '#CCC'
  }
}
export default CartItem;
