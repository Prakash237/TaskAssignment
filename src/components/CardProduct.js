import React from "react";

const CardProduct = ({ product, addToCart }) => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-0">
        <img
          src={product.product_image}
          class="card-img-top"
          style={{ maxHeight: "200px", maxWidth: "200px" }}
          alt="..."
        />

        <div class="card-body">
          <h5 class="card-title">{product.product_name}</h5>
          <p class="card-text">{product.product_desc}</p>
          <p>{product.offer} OFF</p>
          <strong>MRP: {product.MRP}</strong>
          <br />
          <strong className="text-muted mt-2">
            Price: {product.product_price}
          </strong>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={() => addToCart(product)} className="hi">
            Add To Cart
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default CardProduct;
