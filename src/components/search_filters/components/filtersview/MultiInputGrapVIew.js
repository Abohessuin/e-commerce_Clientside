import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Graponeinput2 } from "../../../common/Graponeinput2";

const MultiGrapInputView = ({ filterkey, setTempFilters }) => {
  const [settedValue, setSettedValue] = useState([]);
  const [onChange, SetOnChange] = useState([]);
  const filters = useSelector((state) => state.searchFilters.subscribedFilters);
  const grapedOptions =
    filters && filters[filterkey] && filters[filterkey].inputsData.inputdata;

  useEffect(() => {
    filters &&
      filters[filterkey].values &&
      setSettedValue([...filters[filterkey].values]);
  }, [filters]);

  useEffect(() => {
    setTempFilters([...onChange]);
  }, [onChange]);

  return (
    <>
      <Graponeinput2
        grapedoptions={grapedOptions}
        onChangeOptions={SetOnChange}
        alreadySettedValue={settedValue}
      />
    </>
  );
};

export default MultiGrapInputView;
