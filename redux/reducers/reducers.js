import { combineReducers } from "redux";
import FilterReducer from "./filterReducer";
import searchresultsReducer from "./searchresultsReducer";

const rootReducer = combineReducers({
  searchFilters: FilterReducer,
  searchResults: searchresultsReducer,
});

export default rootReducer;
