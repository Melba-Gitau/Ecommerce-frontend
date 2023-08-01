import React, { useState } from "react";

const QuantityCounter = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div>
      <div>
        <span>Quantity:</span>
      </div>
      <div>
        <button
          onClick={decreaseQuantity}
          style={{
            padding: "1px 12px",
            backgroundColor: "black",
            color: "white",
            fontSize: "25px",
          }}
        >
          -
        </button>
        <span
          style={{
            padding: "6px 15px",
            fontSize: "18px",
            backgroundColor: "white",
            border: "2px solid #000",
            fontSize: "22px",
            textAlign: "center",
          }}
        >
          {" "}
          {quantity}
        </span>
        <button
          onClick={increaseQuantity}
          style={{
            padding: "1px 12px",
            backgroundColor: "black",
            color: "white",
            fontSize: "25px",
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantityCounter;
