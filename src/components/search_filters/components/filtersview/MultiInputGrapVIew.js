import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Graponeinput2 } from "../../../common/Graponeinput2";

const MultiGrapInputView = ({
  filterkey,
  setTempFilters,
  tempFilters,
  isOpen,
}) => {
  const [settedValue, setSettedValue] = useState([]);
  const [settedFiltersObj, setSettedFiltersObj] = useState([]);
  const [onChange, SetOnChange] = useState([]);
  const filters = useSelector((state) => state.searchFilters.subscribedFilters);
  const grapedOptions =
    filters && filters[filterkey] && filters[filterkey].inputsData.inputdata;
  useEffect(() => {
    filters &&
      filters[filterkey].values &&
      setSettedValue([...filters[filterkey].values]) &&
      setSettedFiltersObj(filters[filterkey].filteredValues);
  }, [filters]);

  useEffect(() => {
    console.log(isOpen, "onChange", onChange);
    if (!isOpen) {
      setTempFilters([...onChange]);
    } else {
      tempFilters && setTempFilters([...onChange, ...tempFilters]);
    }
  }, [onChange]);

  return (
    <>
      <Graponeinput2
        grapedoptions={grapedOptions}
        onChangeOptions={SetOnChange}
        alreadySettedValue={settedValue}
        settedFiltersObj={settedFiltersObj}
      />
    </>
  );
};

export default MultiGrapInputView;
