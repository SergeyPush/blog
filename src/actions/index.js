import jsonPlaceHolder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
  const result = await jsonPlaceHolder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: result
  });
};
