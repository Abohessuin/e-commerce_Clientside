import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Graponeinput from "../../../common/Graponeinput";

const SingleGrapInputView = ({ filterkey, setTempFilters }) => {
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
    setTempFilters([onChange]);
  }, [onChange]);

  return (
    <>
      <Graponeinput
        grapedoptions={grapedOptions}
        onChangeOptions={SetOnChange}
        alreadySettedValue={settedValue}
      />
    </>
  );
};

export default SingleGrapInputView;
