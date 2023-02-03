import React, { useEffect, useState } from "react";
import {  Button } from "react-bootstrap";
const Cart = ({ state, dispatch }) => {
  const { cart } = state;

  const [total, setTotal] = useState(0);
  const changeQty = (id, qty) => {
    dispatch({
      type: "CHANGE_CARD_QTY",
      payload: {
        id,
        qty,
      },
    });
  };
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty,0)
      
    );
  }, [cart]);
  return (
    <div
     
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 10,
        backgroundColor: "#ecec",
        padding: 10,
        width: "20%",
        borderRadius: "5px",
      }}
    >
    
      <b style={{ fontSize: 30, alignSelf: "center" }}>List of items</b>
      <b style={{ alignSelf: "center" }}>${total}</b>

      {cart.length > 0 ? (
        cart.map((pro) => (
          <div
            key={pro.id}
            style={{
              display: "flex",
              padding: 10,
              border: "1px solid grey",
              margin: 5,
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: 10 }}>
              <img
                src={pro.thumbnail}
                alt={pro.title}
                style={{ width: 70, objectFit: "cover", borderRadius: "5px" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <span style={{ fontSize: "14px" }}>{pro.title}</span>
                <b style={{ fontSize: "14px" }}>${pro.price}</b>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Button
                onClick={() => changeQty(pro.id, pro.qty - 1)}
                style={{
                  backgroundColor: "#ccc",
                  border: "none",
                  color: "#000",
                  fontWeight: 600,
                }}
              >
                -
              </Button>
              <span>{pro.qty}</span>
              <Button
                onClick={() => changeQty(pro.id, pro.qty + 1)}
                style={{
                  backgroundColor: "#ccc",
                  border: "none",
                  color: "#000",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                +
              </Button>
            </div>
          </div>
        ))
      ) : (
        <span style={{ padding: 20, alignSelf: " center" }}>cart is empty</span>
      )}
    </div>
  );
};

export default Cart;
