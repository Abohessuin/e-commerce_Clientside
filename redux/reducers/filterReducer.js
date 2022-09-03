import { filtersHolder } from "../../src/lib/filterTypes.js/filtersHolder";
import { grapOneFilter } from "../../src/lib/filterTypes.js/grapOneFilter";
import {
  addNewFilters,
  handleSetFiltersQuery,
  handleResetFilters,
  addFiltersInputsData,
  handleResetAFilter,
  handleClearAnAppliedFilter,
} from "../reduxHelper";

const intialState = {
  subscribedFilters: {
    sizes: new filtersHolder("sizes"),
    color: new filtersHolder("color"),
    price: new grapOneFilter("price"),
    room: new filtersHolder("room"),
    matrial: new filtersHolder("matrial"),
    construction: new filtersHolder("construction"),
    style: new filtersHolder("style"),
  },
};

const filterReducer = (state = intialState, action) => {
  let newState;
  switch (action.type) {
    case "ADD_INPUTS_FILTERS_DATA":
      newState = addFiltersInputsData(state.subscribedFilters, action.payload);

      return {
        ...state,
        subscribedFilters: { ...newState },
      };
    case "ADD_FILTER":
      newState = addNewFilters(state.subscribedFilters, action.payload);
      return {
        ...state,
        subscribedFilters: { ...newState },
      };
    case "READ_VALUES_FROM_QUERY":
      newState = handleSetFiltersQuery(
        state.subscribedFilters,
        action.payload.query
      );
      return {
        ...state,
        subscribedFilters: { ...newState },
      };
    case "RESET_ALL_FILTERS":
      newState = handleResetFilters(state.subscribedFilters);
      return {
        ...state,
        subscribedFilters: { ...newState },
      };

    case "CLEAR_A_FILTER":
      newState = handleResetAFilter(state.subscribedFilters, action.payload);
      return {
        ...state,
        subscribedFilters: { ...newState },
      };

    case "CLEAR_AN_APPLIED_FILTER":
      newState = handleClearAnAppliedFilter(
        state.subscribedFilters,
        action.payload
      );
      return {
        ...state,
        subscribedFilters: { ...newState },
      };
    default:
      return { ...state };
  }
};

export default filterReducer;
