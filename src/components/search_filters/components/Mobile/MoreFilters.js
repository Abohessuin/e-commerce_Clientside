import { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  handleAddFilters,
  handleResetAllFilters,
} from "../../../../../redux/actions/filterAction";
import ConstructionFilter from "./constructionFilter";
import FilterCollapse from "./FilterCollapse";
import MatrialFilter from "./matrialFilter";
import PriceFilter from "./PriceFilter";
import RoomFilter from "./RoomFilter";
import StyleFilter from "./StyleFilter";

const MoreFilters = ({ isOpen, setIsOpen, tempFilters, setTempFilters }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isOpen) {
      setTempFilters([]);
    }
  }, [isOpen]);

  const handleAddAppliedFilters = () => {
    dispatch(handleAddFilters(tempFilters));
    setTempFilters([]);
    setIsOpen(false);
  };
  const handleClearAllFilters = () => {
    dispatch(handleResetAllFilters());
    setTempFilters([]);
    setIsOpen(false);
  };

  return (
    <Modal
      show={isOpen}
      onHide={() => setIsOpen(false)}
      dialogClassName="morefiltermodel"
      aria-labelledby="more-options-modal"
      style={{ zIndex: "99999" }}
    >
      <MoreFilterContainer>
        <Modal.Header>
          <Modal.Title>
            <div className="titlebuttons">
              <div>
                <img
                  onClick={() => setIsOpen(false)}
                  src="assets/icons/close.png"
                />
              </div>
              <div>
                <button
                  className="clear"
                  onClick={() => handleClearAllFilters()}
                >
                  Clear All
                </button>
                <button
                  className="apply"
                  onClick={() => {
                    handleAddAppliedFilters();
                  }}
                >
                  Apply
                </button>
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RoomFilter
            setTempFilters={setTempFilters}
            tempFilters={tempFilters}
            isOpen={isOpen}
          />
          <PriceFilter
            setTempFilters={setTempFilters}
            tempFilters={tempFilters}
            isOpen={isOpen}
          />
          <MatrialFilter
            setTempFilters={setTempFilters}
            tempFilters={tempFilters}
            isOpen={isOpen}
          />
          <ConstructionFilter
            setTempFilters={setTempFilters}
            tempFilters={tempFilters}
            isOpen={isOpen}
          />
          <StyleFilter
            setTempFilters={setTempFilters}
            tempFilters={tempFilters}
            isOpen={isOpen}
          />
        </Modal.Body>
      </MoreFilterContainer>
    </Modal>
  );
};

const MoreFilterContainer = styled.div`
  .titlebuttons {
    width: 90%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 20px;
      object-fit: cover;
    }
    .clear {
      width: 85px;
      height: 36px;
      background: white;
      border: 1px solid #0c314e;
      border-radius: 5px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      color: #0c314e;
      margin: 0px 20px;
    }

    .apply {
      width: 78px;
      height: 36px;
      background: #0c314e;
      border: 1px solid #0c314e;
      border-radius: 5px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      color: #ffffff;
    }
  }
`;

export default MoreFilters;
