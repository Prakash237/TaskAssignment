import React, { Component } from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { removeFromCart, addItemQty, removeItemQty } from "../actions";
import "./cart.css";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      showHideFName: true
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    switch (name) {
      case "showHideCart":
        this.setState({ showHideCart: !this.state.showHideCart });
        break;
      default:
        null;
    }
  }

  render() {
    const { cartItems, removeFromCart, addItemQty, removeItemQty } = this.props;
    const { showHideCart } = this.state;
    return (
      <div className="footer">
        <div className="col-lg-8 row-md-12">
          {showHideCart && (
            <div>
              <h4>Cart ( {cartItems.length} Items)</h4>
              <hr className="my-3" />
              {cartItems.map((cartItem) => (
                <CartItem
                  key={cartItem.id}
                  cartItem={cartItem}
                  removeFromCart={removeFromCart}
                  addItemQty={addItemQty}
                  removeItemQty={removeItemQty}
                />
              ))}
            </div>
          )}
        </div>
        <br />
        <div className="col-lg-1 col-md-112">
          <div className="custom-card" style={{ borderRadius: "10px" }}>
            <div className="d-flex justify-content-between">
              <hr className="my-0" />
              <div className="d-flex justify-content-between align-items-center mb-0">
                <strong style={{ color: "black" }}>
                  Qty: {cartItems.length} <br />
                  Total: &nbsp;
                  {cartItems.length > 0
                    ? parseFloat(
                        cartItems.reduce(
                          (acc, { product_price, product_qty }) => {
                            let qty = parseInt(product_qty);
                            let item = parseFloat(product_price).toFixed(2);
                            let accumulator = parseFloat(acc).toFixed(2);
                            let res =
                              parseFloat(item) * qty + parseFloat(accumulator);
                            return parseFloat(res).toFixed(2);
                          },
                          0
                        )
                      )
                    : 0}
                </strong>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button
                className="button"
                onClick={() => this.hideComponent("showHideCart")}
              >
                CHECKOUT
              </button>{" "}
              &nbsp;&nbsp;
              <button
                className="button"
                onClick={() => alert("Your order is successfully Placed")}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems
  };
};

function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: (product) => dispatch(removeFromCart(product)),
    addItemQty: (product) => dispatch(addItemQty(product)),
    removeItemQty: (product) => dispatch(removeItemQty(product))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
