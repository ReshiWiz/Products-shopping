import React, { useEffect } from "react";
import axios from "axios";
import { useReducer } from "react";
import { cartReducer } from "./Reducers/reducres";
import Products from "./components/Products";
import Cart from "./components/Cart";
const App = () => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
   
  });
  console.log(state);
  const fetchAPI = async () => {
    try {
      let { data } = await axios.get("https://dummyjson.com/products");
      // console.log(data.products)
      dispatch({ type: "ADD_PRODUCTS", payload: data.products });
    } catch (error) {
      console.log("oops something went wrong", error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Products state={state} dispatch={dispatch}></Products>
      <Cart state={state} dispatch={dispatch}></Cart>
      {/* <Search></Search> */}
    </div>
  );
};

export default App;
