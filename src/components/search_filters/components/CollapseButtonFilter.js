import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleAddFilters,
  handleClearAFilter,
} from "../../../../redux/actions/filterAction";
import { handleChangeLoadingStatues } from "../../../../redux/actions/searchresultsAction";
const CollapseButtonFilter = ({
  filtername,
  tempFilters,
  setTempFilters,
  filterkey,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const filters = useSelector((state) => state.searchFilters.subscribedFilters);
  const countfilter =
    filters && filters[filterkey] && filters[filterkey].values;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isOpen) {
      setTempFilters([]);
    }
  }, [isOpen]);
  // console.log(tempFilters);
  const handleAddAppliedFilters = () => {
    dispatch(handleChangeLoadingStatues());
    dispatch(handleAddFilters(tempFilters));
    setTempFilters([]);
    setIsOpen(false);
  };
  const handleClearThisFilter = () => {
    dispatch(handleClearAFilter(filterkey));
    setTempFilters([]);
    setIsOpen(false);
  };
  console.log(
    "counter",
    filters[filterkey] && filters[filterkey].values,
    filterkey
  );
  return (
    <CollapseButtonFilterContainer isOpen={isOpen}>
      <div className="filtercontainer">
        <button className="filtername" onClick={() => setIsOpen(!isOpen)}>
          {filtername}{" "}
          <span>
            {" "}
            {countfilter && countfilter.length > 0 && `(${countfilter.length})`}
          </span>
          <FaChevronDown className="arrowicon" />
        </button>
        <div className="filtermenu">
          {children}
          <div className="menufooter">
            <button onClick={() => handleAddAppliedFilters()}>Apply</button>
            <button onClick={() => handleClearThisFilter()}>Clear</button>
          </div>
        </div>
      </div>
    </CollapseButtonFilterContainer>
  );
};
const CollapseButtonFilterContainer = styled.div`
  width: 100%;
  .filtercontainer {
    position: relative;
    .filtername {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 8px;
      border: 1px solid #015c9a;
      border-radius: 8px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      background-color: white;
      color: #0c314e;
      span {
        font-size: 12px;
        margin: 0px 2px;
      }
      .arrowicon {
        margin: 0px 10px 0px 22px;
      }
    }
    .filtermenu {
      min-height: 250px;
      min-width: 452px;
      padding: 10px 20px;
      z-index: 1000000;
      background-color: red;
      display: ${(props) => (props.isOpen ? "flex" : "none")};
      position: absolute;
      top: 43px;
      left: 0px;
      justify-content: space-between;
      flex-direction: column;
      background: #ffffff;
      border: 1px solid #015c9a;
      box-shadow: 0px 4px 16px 6px rgba(52, 58, 82, 0.08),
        0px 4px 8px rgba(22, 56, 207, 0.25);
      border-radius: 16px;
      .menufooter {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 22px;
        border-top: 1px solid #a9c7db;
        button {
          width: 90px;
          height: 30px;
          font-family: Roboto;
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 16px;

          margin: 15px 10px;
          color: #0c314e;
          &:nth-child(1) {
            font-family: Roboto;
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 16px;
            text-align: center;
            color: white;
            border: 1px solid #0c314e;
            background-color: #0c314e;
            border-radius: 4px;
          }

          &:nth-child(2) {
            font-family: Roboto;
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 16px;
            text-align: center;
            color: #0c314e;
            border: 1px solid #0c314e;
            border-radius: 4px;
            background-color: #ffffff;
          }
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    .filtermenu {
      min-width: unset !important;
      width: 250px;
      position: absolute !important;
      top: 43px !important;
      left: -50px !important;
    }
  }
`;
export default CollapseButtonFilter;
