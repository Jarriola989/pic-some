import React, { useContext, useState } from "react";
import { Context } from "../Context";

function CartItem({ item }) {
  const { removeFromCart } = useContext(Context);
  const [trashHovered, setTrashHovered] = useState(false);

  return (
    <div className="cart-item">
      <i
        className={`ri-delete-bin-${trashHovered ? "fill" : "line"}`}
        onClick={() => removeFromCart(item.id)}
        onMouseOver={() => setTrashHovered(true)}
        onMouseLeave={() => setTrashHovered(false)}
      ></i>
      <img src={item.url} width="130px" alt="stock" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;
