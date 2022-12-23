import React from "react";

const CartItem = ({ cartItem, removeFromCart, addItemQty, removeItemQty }) => {
  return (
    <>
      <div className="row mt-3 no-gutters">
        <div className="col-md-3">
          <img
            className="rounded"
            style={{ maxWidth: "100%", maxHeight: "200px" }}
            src={cartItem.product_image}
            alt=""
          />
        </div>
        <div className="col-md-6">
          <div className="mt-3">
            <h5 style={{ color: "black" }}>{cartItem.product_name}</h5>
            <p style={{ color: "black" }}>{cartItem.product_desc}</p>
            <div className="mt-3">
              <button
                className="button"
                variant="text"
                style={{ color: "black" }}
                onClick={() => removeFromCart(cartItem)}
              >
                REMOVE ITEM
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div class="input-group mt-3 mb-5">
            <div class="input-group-prepend">
              <button
                className="button"
                disabled={cartItem.product_qty === 1}
                onClick={() => removeItemQty(cartItem)}
              >
                {" "}
                --{" "}
              </button>
            </div>
            <input
              type="text"
              readOnly
              class="form-control text-center"
              value={cartItem.product_qty}
              style={{ color: "black" }}
            />
            <div class="input-group-append">
              <button className="button" onClick={() => addItemQty(cartItem)}>
                +
              </button>
            </div>
          </div>
          <h5 style={{ color: "black" }}>{cartItem.product_price}</h5>
        </div>
      </div>
    </>
  );
};

export default CartItem;
