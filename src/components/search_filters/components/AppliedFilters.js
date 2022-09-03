import { useDispatch } from "react-redux";
import styled from "styled-components";
import { handleClearAnAppliedFilter } from "../../../../redux/actions/filterAction";

const AppliedFilters = ({ appliedfiltername, appliedkey }) => {
  const dispatch = useDispatch();
  const handleRemoveAFilter = () => {
    dispatch(handleClearAnAppliedFilter(appliedkey, appliedfiltername));
  };
  return (
    <AppliedFiltersContainer>
      <p>{appliedfiltername}</p>
      <img
        src="/assets/icons/closebutt.png"
        alt="closeicon"
        onClick={() => handleRemoveAFilter()}
      />
    </AppliedFiltersContainer>
  );
};

const AppliedFiltersContainer = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  background-color: #f3faff;
  border: 1px solid #a9c7db;
  border-radius: 30px;
  margin-left: 8px;
  margin-right: 8px;
  height: 24px;

  img {
    margin-left: 7px;
    margin-right: 8px;
    cursor: pointer;
  }
  p {
    margin: 0px 8px;
    font-family: Roboto;

    font-style: normal;
    font-weight: normal;
    font-size: 0.9114583333333334vw;
    line-height: 1.1067708333333333vw;
    color: #0c314e;
  }
  @media (max-width: 768px) {
    margin-bottom: 15px;
    :first-child {
      margin-left: 15px;
    }
    p {
      font-size: 14px;
      line-height: 17px;
    }
  }
`;
export default AppliedFilters;
