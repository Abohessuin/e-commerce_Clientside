export class filtersHolder {
  constructor(
    key,
    values = [],
    displayedValues = [],
    filteredValues = [],
    inputsData = {}
  ) {
    this.key = key;
    this.values = values;
    this.displayedValues = displayedValues;
    this.filteredValues = filteredValues;
    this.inputsData = inputsData;
  }

  addAValue = (filter) => {
    if (!this.values.includes(filter.value)) {
      this.values.push(filter.value);
      this.displayedValues.push(filter.displayedValue);
      this.filteredValues.push(filter);
    } else {
      return;
    }
  };

  addInputsData = (data) => {
    this.inputsData = { ...data };
  };

  removeAValue = (filter) => {
    if (this.values.includes(filter.value)) {
      this.values.remove(filter.value);
      this.displayedValues.remove(filter.displayedValue);
    } else {
      return;
    }
  };

  resetAllValues = () => {
    this.values = [];
    this.displayedValues = [];
    this.filteredValues = [];
  };

  buildFilterUrlQuary = () => {
    if (this.values.length == 0) return;
    const url = "";
    url += `${this.key}=`;
    this.values.map((curr, indx) => {
      if (indx != this.values.length && indx != 0) url += `%2c`;
      url += curr;
    });
    return url;
  };

  quaryParamsSendToApi = () => {
    if (this.values.length == 0) return;
    const body = {};
    const values = "";
    this.values.map((value, ind) => {
      if (ind != 0 && ind != this.values.length) values += ",";
      values += value;
    });
    body[this.key] = values;
    return body;
  };

  handleReadQuary = (values) => {
    const newvalues = values.split(",");
    console.log("newvalues", newvalues);

    this.inputsData.inputdata.map((input) => {
      if (
        input.key == this.key &&
        newvalues.includes(input.value) &&
        !this.values.includes(input.value)
      ) {
        this.displayedValues.push(input.displayedValue);
      }
    });
    newvalues.map((value) => {
      if (!this.values.includes(value)) {
        this.values.push(value);
      }
    });
    this.inputsData.inputdata.map((curr) => {
      if (
        newvalues.includes(curr.value) &&
        !this.filteredValues.includes(curr)
      ) {
        this.filteredValues.push(curr);
      }
    });
  };

  handleClearAppliedFilter = (displayedvalue) => {
    const appliedindex = this.displayedValues.indexOf(displayedvalue);
    this.values.splice(appliedindex, 1);
    this.displayedValues.splice(appliedindex, 1);
    this.filteredValues.splice(appliedindex, 1);
  };
}
