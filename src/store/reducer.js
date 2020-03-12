const initialState = {
  likeArr: []
};

const reducer = (state = initialState, action) => {
  if (action.type === "LIKE") {
    const likeItem = state.likeArr.find(item => item == action.likeID);
    if (!likeItem) {
      state.likeArr.push(action.likeID);
      return {
        likeArr: [...state.likeArr]
      };
    } else {
      const newArr = state.likeArr.filter(item => item !== action.likeID);
      return {
        likeArr: newArr
      };
    }
  }
  return state;
};

export default reducer;
