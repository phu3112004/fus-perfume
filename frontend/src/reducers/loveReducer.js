const loveReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_LOVE":
      return [...state, action.item];
    case "REMOVE_FROM_LOVE":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

export default loveReducer;
