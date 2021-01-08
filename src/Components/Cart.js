import React, { Component } from "react";
import CartItem from "./CartItem";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          price: 9999,
          title: "Phone",
          qty: 1,
          img: "",
          id: 1,
        },
        {
          price: 9999,
          title: "Phone",
          qty: 1,
          img: "",
          id: 2,
        },
        {
          price: 9999,
          title: "Phone",
          qty: 1,
          img: "",
          id: 3,
        },
      ],
    };
  }
  render() {
    const { products } = this.state;
    return (
      <div>
        {products.map((product) => {
          return <CartItem product={product} key={ product.id} />;
        })}
      </div>
    );
  }
}

export default Cart;
