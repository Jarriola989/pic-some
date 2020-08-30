import React, { useContext } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart, placeOrder, cartMessage } = useContext(Context);

  const cartItemElements = cart.map((item) => (
    <CartItem item={item} key={item.id} />
  ));
  const total = cart.length * 5.99;
  const totalCostDisplay = total.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalCostDisplay}</p>
      <div className="order-button">
        <button onClick={placeOrder} disabled={cart.length === 0}>
          {cartMessage}
        </button>
      </div>
    </main>
  );
}

export default Cart;
