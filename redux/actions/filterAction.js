import { getSizeFiltersInput, prepareFilterInputs } from "../reduxHelper";

export const handlePreparingFiltersInputsData = () => (dispatch) => {
  const filtersInput = prepareFilterInputs();

  dispatch({
    type: "ADD_INPUTS_FILTERS_DATA",
    payload: filtersInput,
  });
};

export const handleAddFilters = (appliedFilters) => (dispatch) => {
  dispatch({
    type: "ADD_FILTER",
    payload: appliedFilters,
  });
};

export const handleReadQuery = (query) => (dispatch) => {
  dispatch({
    type: "READ_VALUES_FROM_QUERY",
    payload: { query: query },
  });
};

export const handleResetAllFilters = () => (dispatch) => {
  dispatch({
    type: "RESET_ALL_FILTERS",
  });
};

export const handleClearAFilter = (filterKey) => (dispatch) => {
  dispatch({
    type: "CLEAR_A_FILTER",
    payload: filterKey,
  });
};

export const handleClearAnAppliedFilter = (filterKey, displayedvalue) => (
  dispatch
) => {
  dispatch({
    type: "CLEAR_AN_APPLIED_FILTER",
    payload: { filterkey: filterKey, displayedvalue: displayedvalue },
  });
};
