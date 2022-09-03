import { filterInput } from "../src/lib/filterTypes.js/filterInput";
import {
  colorFilters,
  constructionFilters,
  matrialFilters,
  priceFilters,
  roomFilters,
  sizesFilters,
  styleFilters,
} from "../src/lib/inputsdata";

export const addNewFilters = (state, filters) => {
  filters.map((filter) => {
    if (filter && filter.key) {
      state[filter.key].addAValue(filter);
    }
  });
  return state;
};

export const handleSetFiltersQuery = (state, query) => {
  for (const key in query) {
    console.log(key);
    state[key].handleReadQuary(query[key]);
  }
  return state;
};

export const handleResetFilters = (state) => {
  for (const key in state) {
    state[key].resetAllValues();
  }
  return state;
};

export const handleResetAFilter = (state, filterKey) => {
  console.log("fff", filterKey);
  state[filterKey].resetAllValues();
  return state;
};

export const handleClearAnAppliedFilter = (state, data) => {
  state[data.filterkey].handleClearAppliedFilter(data.displayedvalue);
  return state;
};
export const objToQuery = (filters) => {
  if (!filters) return;
  const body = {};
  const url = "";
  const ll = Object.keys(filters).length - 1;
  const ind = 0;
  Object.entries(filters).forEach(([key, value], index) => {
    if (filters[key].buildFilterUrlQuary()) {
      console.log(index);
      if (ind != 0) url += "&";
      ind++;
      url += filters[key].buildFilterUrlQuary();
    }
    if (filters[key].quaryParamsSendToApi()) {
      body = { ...filters[key].quaryParamsSendToApi() };
    }
  });

  // const newbody = { filter_phase: body };
  return { body: body, query: url };
};

// function that change filters state and add filters value for each filter key
export const addFiltersInputsData = (state, inputsdata) => {
  inputsdata.map((curr) => {
    state[curr.keysusedinfiltercontainer].addInputsData({
      inputdata: curr.inputdata,
      defaultvalue: curr.defaultvalue,
    });
  });
  return state;
};

// function s that take filters data from back end and map it in our object to work as we want4

// sizes filters data
const getGrapedFiltersInput = (
  FiltersDataEndPoint,
  Endpointkey,
  mapedInputId,
  subscribedfilterkey
) => {
  const sizeInputsData = FiltersDataEndPoint.map((curr) => {
    const input = Object.create(filterInput);
    input.constructor(
      Endpointkey,
      curr.id,
      curr.title,
      curr.title,
      mapedInputId
    );
    return input;
  });
  const input = Object.create(filterInput);
  input.constructor(Endpointkey, "All", "All", "", mapedInputId);
  sizeInputsData.splice(0, 0);
  return {
    inputdata: sizeInputsData,
    defaultvalue: "All",
    keysusedinfiltercontainer: subscribedfilterkey,
  };
};

// const getRangesFiltersInput = (
//   FiltersDataEndPoint,
//   Endpointkey,
//   mapedInputId,
//   subscribedfilterkey
// ) => {
//   const min_max = [];
//   fil
// };

const prepareGrapOneFiltersDataInputs = () => {
  const sizeDataEndPoint = sizesFilters();
  const colorDataEndPoint = colorFilters();
  const roomDataEndPoint = roomFilters();
  const materialDataEndPoint = matrialFilters();
  const constructionDataEndPoint = constructionFilters();
  const priceDataEndPoint = priceFilters();
  const styleDataEndPoint = styleFilters();
  return [
    getGrapedFiltersInput(sizeDataEndPoint, "sizes", "", "sizes"),
    getGrapedFiltersInput(colorDataEndPoint, "color", "", "color"),
    getGrapedFiltersInput(priceDataEndPoint, "price", "", "price"),
    getGrapedFiltersInput(roomDataEndPoint, "room", "", "room"),
    getGrapedFiltersInput(materialDataEndPoint, "matrial", "", "matrial"),
    getGrapedFiltersInput(
      constructionDataEndPoint,
      "construction",
      "",
      "construction"
    ),
    getGrapedFiltersInput(styleDataEndPoint, "style", "", "style"),
  ];
};

// const prepareRangesFilterDataInputs = () => {
//   const priceDataEndPoint = priceFilters();
// };

export const prepareFilterInputs = () => {
  return [...prepareGrapOneFiltersDataInputs()];
};
