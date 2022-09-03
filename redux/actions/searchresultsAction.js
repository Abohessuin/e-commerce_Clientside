import axios from "axios";
import { objToQuery } from "../reduxHelper";

export const handleFetchSearchResults = (filters) => (dispatch) => {
  const { body, query } = objToQuery(filters);
  console.log("body", body, "query", query);
  //   const {data}=await axios.post()

  dispatch({
    type: "GET_SEARCH_RESULTS",
    payload: {
      filteredsearchdata: [],
      searchdatacount: 0,
      filteredqueryurl: query,
      isfilteredsearchdataready: false,
    },
  });
};
