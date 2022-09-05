import axios from "axios";
import { getproductsSearchEndPoint } from "../../src/lib/api";
import { objToQuery } from "../reduxHelper";

export const handleFetchSearchResults = (filters) => async (dispatch) => {
  const { body, query } = objToQuery(filters);
  console.log("body", body, "query", query);
  const SEARCHAPI_URL = getproductsSearchEndPoint();
  const { data } = await axios.post(SEARCHAPI_URL, body);
  console.log("data", data);

  dispatch({
    type: "GET_SEARCH_RESULTS",
    payload: {
      filteredsearchdata: data,
      searchdatacount: 0,
      filteredqueryurl: query,
      isfilteredsearchdataready: false,
    },
  });
};

export const handleChangeLoadingStatues = () => (dispatch) => {
  dispatch({
    type: "CHANGE_LOADING_STATUES",
  });
};
