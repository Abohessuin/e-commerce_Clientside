const intialState = {
  filteredsearchdata: [],
  searchdatacount: 0,
  filteredqueryurl: "",
  isfilteredsearchdataready: false,
};

const searchresultsReducer = (state = intialState, action) => {
  let newState;
  switch (action.type) {
    case "GET_SEARCH_RESULTS":
      return {
        filteredsearchdata: [],
        searchdatacount: 0,
        filteredqueryurl: action.payload.filteredqueryurl,
        isfilteredsearchdataready: true,
      };

    default:
      return { ...state };
  }
};

export default searchresultsReducer;
