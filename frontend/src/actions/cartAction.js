export const addToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    item: item,
  };
};

export const removeFromCart = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    id: id,
  };
};
