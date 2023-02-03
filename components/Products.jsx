import React from "react";
import { Button } from "react-bootstrap";
const Products = ({ state, dispatch }) => {
  const { products, cart } = state;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "80%",
      }}
    >
      {products.map((val) => (
        <div
          key={val.id}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 10,
            border: "1px solid #abc",
            borderRadius: "5px",
            backgroundColor: "#abce",
            width: "30%",
            marginTop: 10,
            gap: 10,
          }}
        >
          <img
            src={val.thumbnail}
            alt="val.title"
            style={{ height: 200, objectFit: "cover", borderRadius: "5px" }}
          />
          <span>{val.title}</span>
          <span>${val.price}</span>
          <div>
            {cart.some((p) => p.id === val.id) ? (
              <Button
                style={{
                  backgroundColor: "#d8adbe",
                  outline: "none",
                  border: "none",
                  color: "#000",
                }}
                onClick={() =>
                  dispatch({ type: "REMOVE_CARD", payload: val})
                }
              >
                Delete Card
              </Button>
            ) : (
              <Button
                style={{
                  backgroundColor: "#ccc",
                  outline: "none",
                  border: "none",
                  color: "#000",
                }}
                onClick={() =>
                  dispatch({
                    type: "ADD_CARD",
                    payload: {
                      id: val.id,
                      title: val.title,
                      thumbnail: val.thumbnail,
                      qty: 1,
                      price: val.price,
                    },
                  })
                }
              >
                Add Card
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
