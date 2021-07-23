import { createStore } from "redux";

const initialState = {
  postList: [],
};
const CHANGE_POSTLIST = "CHANGE_POSTLIST";

function reducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_POSTLIST":
      return { ...state, postList: action.payload };

    default:
      return state;
  }
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

const changePostList = (newPostList) => {
  return {
    type: CHANGE_POSTLIST,
    payload: newPostList,
  };
};

// store.dispatch(changePostList([1, 2, 3, 4]));
// store.dispatch(changePostList([1, 2, 3, 4, 5, 6, 7]));

export default store;
