import { filtersHolder } from "./filtersHolder";

export class grapOneFilter extends filtersHolder {
  constructor(
    key,
    values = [],
    displayedValues = [],
    filteredValues = [],
    inputsData = {}
  ) {
    super(key, values, displayedValues, filteredValues, inputsData);
  }

  addAValue = (filter) => {
    this.values = [];
    this.displayedValue = [];
    this.filteredValues = [];
    this.values.push(filter.value);
    this.displayedValues.push(filter.displayedValue);
    this.filteredValues.push(filter);
  };
}
