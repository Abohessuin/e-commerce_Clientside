const intialState = {
  filteredsearchdata: [],
  searchdatacount: 0,
  filteredqueryurl: "",
  isfilteredsearchdataready: false,
};

const searchresultsReducer = (state = intialState, action) => {
  switch (action.type) {
    case "GET_SEARCH_RESULTS":
      return {
        filteredsearchdata: [...action.payload.filteredsearchdata],
        searchdatacount: action.payload.searchdatacount,
        filteredqueryurl: action.payload.filteredqueryurl,
        isfilteredsearchdataready: action.payload.isfilteredsearchdataready,
      };

    case "CHANGE_LOADING_STATUES":
      return {
        ...state,
        isfilteredsearchdataready: true,
      };
    default:
      return { ...state };
  }
};

export default searchresultsReducer;
