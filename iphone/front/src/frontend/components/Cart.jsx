import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart)
  return (
    <div className="cart-container">
      <h2 className="cart-title"> Shopping Cart</h2>

      {cart.cartItems.length === 0 ? (
        <div className=" cart-empty">
          <p>your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>start shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">product</h3>
            <h3 className="price">price</h3>
            <h3 className="Quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems?.map((cartitem) => (
              <div className="cart-item" key={cartitem.id}>
                <div className="cart-product">
                  <img
                    className="img_cart"
                    src="https://m.media-amazon.com/images/I/71uuDYxn3XL._SL1500_.jpg"
                    alt="{cartItem.name}"
                  />
                  <div style={{ fontSize: "20px" }}>
                    <h3> {cartitem.name} </h3>
                    <p>{cartitem.desc}</p>
                    <button>Remove</button>
                  </div>
                </div>
               
                <div className="cart-product-price">${cartitem.price}</div>
                <div className="cart-product-quantity">
                  <button>-</button>
                 
                  <div className="count">{cartitem.Quantity}</div>
                  <button>+</button>
                </div>
                <div className="cart-product-total-price">
                  ${cartitem.price }
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button className="clear-cart">Clear Cart</button>
            <div className="cart-chekout">
            <div className="subtotal">
              <span>Subtotal</span>
              <span className="amount">${cart.cartTotalmount}</span>
            </div>
            <div>
              <p>Taxes and shipping calculated at chekout</p>
              <button >CheckOut</button>
              </div>
              <div className="continue-shopping">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>continue shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
