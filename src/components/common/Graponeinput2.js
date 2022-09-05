import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect } from "react";
const Graponeinput2Memod = ({
  grapedoptions,
  onChangeOptions,
  alreadySettedValue,
  settedFiltersObj,
}) => {
  const { locale } = useRouter();
  const [grapedid, SetGrapedId] = useState(["All"]);
  const [result, setResult] = useState(new Map());
  const ButtonOptions = ({ buttonid, name, buttdata }) => {
    const [buttid] = useState(buttonid);
    const handleChoosenButton = (e) => {
      SetGrapedId((state) => [...state, e.target.id]);
      setResult([...result, buttdata]);
      onChangeOptions([...result, buttdata]);
    };

    return (
      <button
        id={buttonid}
        className={buttid && grapedid.includes(buttid) ? "choosen" : ""}
        onClick={(e) => {
          handleChoosenButton(e);
        }}
      >
        {name ? name : ""}
      </button>
    );
  };

  useEffect(() => {
    if (alreadySettedValue && alreadySettedValue.length > 0) {
      console.log("sss", settedFiltersObj);
      SetGrapedId([...alreadySettedValue]);
      setResult([...settedFiltersObj]);
    } else {
      SetGrapedId(["All"]);
    }
  }, [alreadySettedValue, settedFiltersObj]);
  console.log("alreadysetted", settedFiltersObj, result);
  return (
    <GrapOneContainer locale={locale} data-cy="grap-one">
      {grapedoptions &&
        grapedoptions.map((option) => (
          <ButtonOptions
            buttonid={option.value}
            name={option.label}
            key={option.value}
            buttdata={option}
          />
        ))}
    </GrapOneContainer>
  );
};

const GrapOneContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px 16px;
  margin-top: 8px;
  button {
    min-width: 48px;
    background-color: #f3faff;
    border: 1px solid #a9c7db;
    border-radius: 5px;
    padding: 7px 8px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 0.9114583333333334vw;
    line-height: 1.1067708333333333vw;
    text-align: center;
    color: #0c314e;
  }
  .choosen {
    background-color: #0c314e !important;
    border-radius: 5px;
    color: white !important;
  }
  @media (max-width: 765px) {
    button {
      font-size: 14px;
      line-height: 17px;
    }
  }
`;
const isEquel = (prevProps, nextProps) => {
  return (
    prevProps.grapedoptions == nextProps.grapedoptions &&
    prevProps.alreadySettedValue.join() === nextProps.alreadySettedValue.join()
  );
};

export const Graponeinput2 = React.memo(Graponeinput2Memod, isEquel);
