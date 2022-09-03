import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Range from "rc-slider/lib/Range";
import "rc-slider/assets/index.css";
// import { useTranslation } from "next-i18next";
import { commifyNumber, unCommifyNumber } from "../../lib/helpers";
const RangeInput = ({ rangedata, onChangeOptions, alreadySettedValue }) => {
  const { locale } = useRouter();
  // const { t } = useTranslation("common");
  const [minvalue, Setminvalue] = useState(0);
  const [maxvalue, Setmaxvalue] = useState(10);
  const [rangevalue, SetRangeValue] = useState([0, 10]);
  const [mininput, SetMinInput] = useState(null);
  const [mininputdisplay, SetMinInputDisplay] = useState(null);
  const [maxinput, SetMaxInput] = useState(null);
  const [maxinputdisplay, SetMaxInputDisplay] = useState(null);
  const [step, SetStep] = useState(null);
  const [isvalidinputmin, SetIsValidInputMin] = useState(true);
  const [isvalidinputmax, SetIsValidInputMax] = useState(true);
  const errormessage = "please enter a valid number";
  useEffect(() => {
    SetMinInput(rangedata.min);
    SetMinInputDisplay(commifyNumber(rangedata.min));
    if (rangedata.fixedstep > 0) {
      SetMaxInput(rangedata.fixedstep);
      SetMaxInputDisplay(commifyNumber(rangedata.fixedstep));
      SetRangeValue([rangedata.min, rangedata.fixedstep]);
    } else {
      SetMaxInput(rangedata.max);
      SetRangeValue([rangedata.min, rangedata.max]);
      SetMaxInputDisplay(commifyNumber(rangedata.max));
    }

    if (rangedata.fixedstep > 0) {
      Setmaxvalue(rangedata.fixedstep);
    } else {
      Setmaxvalue(rangedata.max);
    }
    Setminvalue(rangedata.min);
    SetStep(rangedata.step);
  }, []);

  useEffect(() => {
    if (alreadySettedValue) {
      SetRangeValue([alreadySettedValue.min, alreadySettedValue.max]);
      SetMinInput(parseInt(alreadySettedValue.min));
      SetMaxInput(parseInt(alreadySettedValue.max));
      SetMinInputDisplay(commifyNumber(alreadySettedValue.min));
      SetMaxInputDisplay(commifyNumber(alreadySettedValue.max));
    }
  }, [alreadySettedValue]);

  const handleMinInput = (e) => {
    const uncommathenumber = unCommifyNumber(e.target.value);
    const input = parseInt(uncommathenumber);
    SetMinInput(input);
    SetMinInputDisplay(commifyNumber(uncommathenumber));
    if (validMinInput(input)) {
      SetRangeValue([input, rangevalue[1]]);
      handlAddToFilters(input, maxinput);
      SetIsValidInputMin(true);
    } else {
      SetIsValidInputMin(false);
    }
  };
  const handleMaxInput = (e) => {
    const uncommathenumber = unCommifyNumber(e.target.value);
    const input = parseInt(uncommathenumber);

    SetMaxInput(input);
    SetMaxInputDisplay(commifyNumber(uncommathenumber));
    if (validMaxInput(input)) {
      SetRangeValue([rangevalue[0], input]);
      handlAddToFilters(mininput, input);
      SetIsValidInputMax(true);
    } else {
      SetIsValidInputMax(false);
    }
  };
  const onchange = (range) => {
    SetRangeValue(range);
    SetMinInput(parseInt(range[0]));
    SetMaxInput(parseInt(range[1]));
    SetMinInputDisplay(commifyNumber(range[0]));
    SetMaxInputDisplay(commifyNumber(range[1]));
    handlAddToFilters(range[0], range[1]);
  };
  const validMinInput = (number) => {
    if (number >= minvalue && number <= maxvalue && number < rangevalue[1]) {
      return true;
    }
    return false;
  };
  const validMaxInput = (number) => {
    if (number >= minvalue && number <= maxvalue && number > rangevalue[0]) {
      return true;
    }
    return false;
  };
  const handlAddToFilters = (mininput, maxinput) => {
    onChangeOptions({ min: mininput, max: maxinput });
  };

  return (
    <FilterSlider>
      <div className="theinputrange">
        <Range
          min={minvalue}
          max={maxvalue}
          step={step}
          onChange={onchange}
          value={rangevalue}
          className="filterslider"
        />
      </div>
      <FilterOtherRange locale={locale} data-cy="sliderinput">
        <div>
          <label>
            {" "}
            <label>{rangedata.measure}</label>
          </label>
          <input
            onChange={(e) => handleMinInput(e)}
            type="tel"
            placeholder={minvalue == 0 ? 0 : commifyNumber(minvalue)}
            value={mininputdisplay}
          />
        </div>

        <div>
          {" "}
          <label>{rangedata.measure}</label>
          <input
            type="tel"
            placeholder={commifyNumber(maxvalue)}
            value={maxinputdisplay}
            onChange={(e) => handleMaxInput(e)}
          />
        </div>
      </FilterOtherRange>
      <div className="error">
        <div className="errordiv">{!isvalidinputmin ? errormessage : ""}</div>
        <div className="errordiv">{!isvalidinputmax ? errormessage : ""}</div>
      </div>
    </FilterSlider>
  );
};
const FilterSlider = styled.div`
  margin-top: 25px;
  .error {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 0.6510416666666666vw;
    line-height: 0.78125vw;
    color: #ff3a00;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 3px 0px;
  }
  .theinputrange {
    width: 95%;
    margin: auto;
  }
  .filterslider .rc-slider-track {
    background-color: #00bdcf !important;
  }
  .filterslider .rc-slider-handle {
    width: 24px !important;
    height: 24px !important;
    border: none !important;
    background-color: #0c314e !important;
    margin-top: -10px !important;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    .error {
      font-size: 10px;
      line-height: 12px;
    }
  }
`;
const FilterOtherRange = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 33px;

  div {
    display: flex;
    align-items: center;
    width: 47.5%;
    label {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 0.9114583333333334vw;
      line-height: 1.1067708333333333vw;
      color: #7f8487;
      margin-inline-end: 5%;
      margin-bottom: 0px;
    }

    input {
      width: 100%;
      height: 30px;
      border: 1px solid #7f8487;
      border-radius: 5px;
      padding: 0px 5px;
      color: #7f8487;
    }
    input :focus {
      color: #0c314e;
    }
  }
`;

export default RangeInput;
