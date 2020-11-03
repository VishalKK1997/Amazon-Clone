import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../context/StateProvider";

const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
  const [state, dispatch] = useStateValue();

  const handleRemoveFromBasket = () => {
    // remove the item from the basket
    dispatch({ type: "REMOVE_FROM_BASKET", id });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" alt="" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>🌟</p>
            ))}
        </div>

        {!hideButton && (
          <button onClick={handleRemoveFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
