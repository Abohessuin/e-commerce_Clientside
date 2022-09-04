import { useState } from "react";

import styled from "styled-components";
import MultiGrapInputView from "../filtersview/MultiInputGrapVIew";
import FilterCollapse from "./FilterCollapse";
const StyleFilter = ({ setTempFilters, tempFilters, isOpen }) => {
  const [isopen, SetIsOpen] = useState(true);
  return (
    <Container isopen={isopen}>
      <div className="collapseparent">
        <FilterCollapse
          filterType="Style"
          isopen={isopen}
          SetIsOpen={SetIsOpen}
        />
      </div>
      <div className="maincontent">
        <div className="fullborderview">
          <div className="view">
            {" "}
            <MultiGrapInputView
              filterkey={"style"}
              setTempFilters={setTempFilters}
              tempFilters={tempFilters}
              isOpen={isOpen}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .collapseparent {
    height: 40px;
  }
  .maincontent {
    display: ${(props) => (props.isopen ? "block" : "none")};
    .fullborderview {
      border-bottom: 0.5px solid #c4c4c4;
    }
    .view {
      width: 85%;
      margin-left: auto;
      margin-right: auto;
      padding: 30px 0px;
    }
  }
`;
export default StyleFilter;
