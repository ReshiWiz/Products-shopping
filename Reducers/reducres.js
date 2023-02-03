export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS": {
      return { ...state, products: action.payload };
    }
    case "ADD_CARD": {
      return { ...state, cart: [{ ...action.payload }, ...state.cart] };
    }
    case "REMOVE_CARD": {
      return {
        ...state,
        cart: state.cart.filter((v) => v.id !== action.payload.id),
      };
    }
    case "CHANGE_CARD_QTY": {
      return {
        ...state,
        cart: state.cart.filter((q) =>
          q.id === action.payload.id 
          ? (q.qty = action.payload.qty)
           : q.qty
        ),
      };
    }
    default:
      break;
  }
};
