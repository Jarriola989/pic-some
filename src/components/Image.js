import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";

function Image({ img, className }) {
  const { cart, toggleFavorite, addToCart, removeFromCart } = useContext(
    Context
  );
  const [hovered, setHovered] = useState(false);

  const heartIcon = img.isFavorite ? (
    <i
      className="ri-heart-fill favorite"
      onClick={() => toggleFavorite(img.id)}
    ></i>
  ) : (
    hovered && (
      <i
        className="ri-heart-line favorite"
        onClick={() => toggleFavorite(img.id)}
      ></i>
    )
  );

  const plusIcon = cart.some((cartImage) => cartImage.id === img.id) ? (
    <i
      className="ri-shopping-cart-fill cart"
      onClick={() => removeFromCart(img.id)}
    ></i>
  ) : (
    hovered && (
      <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
    )
  );

  return (
    <div
      className={`${className} image-container`}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} className="image-grid" alt={img.id} />
      {heartIcon}
      {plusIcon}
    </div>
  );
}

Image.propTypes = {
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
  className: PropTypes.string,
};

export default Image;
