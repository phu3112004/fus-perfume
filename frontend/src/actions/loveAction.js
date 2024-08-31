export const addToLove = (item) => {
  return {
    type: "ADD_TO_LOVE",
    item: item,
  };
};

export const removeFromLove = (id) => {
  return {
    type: "REMOVE_FROM_LOVE",
    id: id,
  };
};
