import React, { Component } from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import "../Styles/Cartitem.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          price: 499,
          title: "AutoShop",
          qty: 0,
          img: "https://cdn.worldvectorlogo.com/logos/auto-shop-1.svg",
          id: 1,
        },
        {
          price: 399,
          title: "Audio-Note",
          qty: 0,
          img: "https://cdn.worldvectorlogo.com/logos/audio-note-18955.svg",
          id: 2,
        },
        {
          price: 499,
          title: "Crown",
          qty: 0,
          img: "https://cdn.worldvectorlogo.com/logos/crown-audio.svg",
          id: 3,
        },
        {
          price: 449,
          title: "Choclat",
          qty: 0,
          img: "https://cdn.worldvectorlogo.com/logos/chocolat.svg",
          id: 3,
        },
        {
          price: 599,
          title: "Convex",
          qty: 0,
          img: "https://cdn.worldvectorlogo.com/logos/convex.svg",
          id: 3,
        },
      ],
      isLoggedIn: true
    };
  }
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;

    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products: products,
    });
  };

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;

    this.setState({
      products: products,
    });
  };
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items,
    });
  };

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };
  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.map((product) => {
      if (product.qty > 0) {
        cartTotal = cartTotal + product.qty * product.price;
      }
      return "";
    });
    return cartTotal;
  };
  
  render() {
    const { products } = this.state;
    return (
      <div>
        <Navbar count={this.getCartCount()}/>
        <Cart
          count={this.getCartCount()}
          cartTotal={this.getCartTotal()}
          products={products}
          onDecrease={this.handleDecreaseQuantity}
          onIncrease={this.handleIncreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
      </div>
    );
  }
}

export default Home;
