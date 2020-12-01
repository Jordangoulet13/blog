import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  // can use a dummy key as boiler plate to run
  // without initial errors.
  // i.e replaceMe: () => "hi there"
  users: usersReducer,
  posts: postsReducer,
});
