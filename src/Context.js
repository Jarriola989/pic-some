import React, { useState, useEffect } from "react";
const Context = React.createContext();

function ContextProvider({ children }) {
  const [photos, setPhotos] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartMessage, setCartMessage] = useState("Place Order");

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  const toggleFavorite = (id) => {
    const newPhotoArray = photos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setPhotos(newPhotoArray);
  };

  const addToCart = (img) => {
    setCart([...cart, img]);
  };

  const removeFromCart = (id) => {
    setCart((prevCartImages) =>
      prevCartImages.filter((cartImage) => cartImage.id !== id)
    );
  };

  const placeOrder = () => {
    setCartMessage("Ordering...");
    setTimeout(() => {
      setCart([]);
      setCartMessage("Order Successful");
      console.log("order placed");
      setTimeout(() => setCartMessage("Place Order"), 3000);
    }, 3000);
  };

  return (
    <Context.Provider
      value={{
        photos,
        toggleFavorite,
        cart,
        addToCart,
        removeFromCart,
        placeOrder,
        cartMessage,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
