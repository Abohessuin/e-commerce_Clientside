import { useState } from "react";
// import { useTranslation } from "next-i18next";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect } from "react";
const Graponeinput = ({
  grapedoptions,
  onChangeOptions,
  alreadySettedValue,
}) => {
  // const { t } = useTranslation("common");
  const { locale } = useRouter();
  const [grapedid, SetGrapedId] = useState("All");
  useEffect(() => {
    if (alreadySettedValue) SetGrapedId(alreadySettedValue);
  }, [alreadySettedValue]);
  const ButtonOptions = ({ buttonid, name, buttdata }) => {
    const [buttid] = useState(buttonid);
    const handleChoosenButton = (e) => {
      SetGrapedId(e.target.id);
      onChangeOptions(buttdata);
    };
    return (
      <button
        id={buttonid}
        className={buttid && buttid == grapedid ? "choosen" : ""}
        onClick={(e) => {
          handleChoosenButton(e);
        }}
      >
        {name ? name : ""}
      </button>
    );
  };

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
export default Graponeinput;
