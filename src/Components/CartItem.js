import React from "react";
import "../Styles/Cartitem.css";
class CartItem extends React.Component {
  

  handleIncreaseQuantity = () => {
    console.log("this", this.state);
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    });
  };

  handleDecreaseQuantity = () => {
    const {qty} = this.state;
    if(qty === 0){
      return ;
    }
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1,
      };
    });
  };
  render() {
    const { price, title, qty, img } = this.props.product;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img alt="" src={img} />
        </div>
        <div className="right-block">
          <div>{title}</div>
          <div>Rs {price}</div>
          <div>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              onClick={this.handleIncreaseQuantity}
              alt="increase"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1828/1828919.svg"
            />
            <img
              onClick={this.handleDecreaseQuantity}
              alt="decrease"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1828/1828899.svg"
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1758/1758438.svg"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
