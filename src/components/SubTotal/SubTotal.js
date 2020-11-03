import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";
import "./SubTotal.css";

const SubTotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subTotal">
      <CurrencyFormat
        renderText={(value) => (
          <React.Fragment>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subTotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </React.Fragment>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
};

export default SubTotal;
