import { useState, useEffect, useRef } from "react";
// import { useTranslation } from "next-i18next";
import styled from "styled-components";

const ToggleInput = ({ toggledata, onChangeOptions, alreadySettedValue }) => {
  // const { t } = useTranslation("common");
  const [choosenbuttid, SetChoosenButtID] = useState(-1);
  const ToggleButtons = ({ buttonid, name }) => {
    const [buttid] = useState(buttonid);

    const handleChoosenButton = (e) => {
      SetChoosenButtID(e.target.id);
      handlAddToAdaptedFilters(e.target.id, name);
    };

    return (
      <button
        id={buttonid}
        className={buttid && buttid == choosenbuttid ? "thechoosen" : ""}
        onClick={(e) => {
          handleChoosenButton(e);
        }}
      >
        {name}
      </button>
    );
  };
  useEffect(() => {
    if (alreadySettedValue) {
      SetChoosenButtID(alreadySettedValue);
    }
  }, [alreadySettedValue]);
  const handlAddToAdaptedFilters = (value) => {
    onChangeOptions(value);
  };

  return (
    <ToggleInputContainer>
      {toggledata &&
        toggledata.map((option) => (
          <ToggleButtons
            buttonid={option.value}
            name={option.label}
            key={option.value}
          />
        ))}
    </ToggleInputContainer>
  );
};

const ToggleInputContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid #0c314e;
  border-radius: 8px;
  box-sizing: border-box;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1.0416666666666667vw;
  line-height: 1.2369791666666667vw;
  text-align: center;
  button {
    background-color: transparent;
    border: none;
    box-sizing: border-box;
    border-radius: none;
    width: 33.3%;
    height: 100%;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #0c314e;
  }
  .thechoosen {
    background: #0c314e !important;
    border: 1px solid #0c314e !important;
    box-sizing: border-box;
    border-radius: 8px !important;
    color: #ffffff;
  }
  /* @media (max-width: 750px) {
    height: 100%;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    border: 1px solid #a9c7db;
    box-sizing: border-box;
    border-radius: 8px;
    font-size: 16px;
    line-height: 19px;
    color: #0c314e;
    button {
      color: #0c314e;
    }

    .thechoosen {
      border-radius: 8px !important;
    }
  } */
`;
export default ToggleInput;
