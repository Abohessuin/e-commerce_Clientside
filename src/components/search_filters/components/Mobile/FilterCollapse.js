import styled from "styled-components";
import { useRouter } from "next/router";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const FilterCollapse = ({ filterType, SetIsOpen, isopen, }) => {
  const { locale } = useRouter();
  return (
    <FilterCollapseContainer
      onClick={() => {
        SetIsOpen(!isopen);
      }}
      id="filtercollabsetest"
      locale={locale}
    >
      <h1>{filterType}</h1>

      {!isopen ? (
        <div className="collapsediv">
          <FaChevronUp />
        </div>
      ) : (
        <div className="collapsediv">
          {" "}
          <FaChevronDown />
        </div>
      )}
    </FilterCollapseContainer>
  );
};

const FilterCollapseContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f3faff;
  border: 1px solid #a9c7db;
  box-sizing: border-box;
  padding: 0px 1.2rem;
  h1 {
    font-family: ${(props) =>
      props.locale == "en" ? "HelveticaNeueB" : "DubaiB"};
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #0c314e;
    margin: 0px !important;
  }
  .collapsediv {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-family: ${(props) =>
        props.locale == "en" ? "HelveticaNeueR" : "DubaiR"};
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 12px;
      color: #0c314e;
    }
    img {
      object-fit: cover;
    }
  }
`;
export default FilterCollapse;
