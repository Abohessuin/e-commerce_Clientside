import { useRouter } from "next/router";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  handleReadQuery,
  handleResetAllFilters,
} from "../../../../redux/actions/filterAction";
import { handleFetchSearchResults } from "../../../../redux/actions/searchresultsAction";
import CollapseButtonFilter from "./CollapseButtonFilter";
import MultiGrapInputView from "./filtersview/MultiInputGrapVIew";
import { FaFilter } from "react-icons/fa";
import SingleGrapInputView from "./filtersview/SingleInputGrapView";
import useWindowDimensions from "../../../lib/Custom Hooks/WindowDimensions";
import MoreFilters from "./Mobile/MoreFilters";

const SearchFilters = () => {
  const [tempFilters, setTempFilters] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { width } = useWindowDimensions();
  const router = useRouter();
  const { query } = useRouter();
  let Firstrender = useRef(true);
  let urlLoadQueryFirstRender = useRef(true);
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.searchFilters.subscribedFilters);
  const theQueryFilter = useSelector(
    (state) => state.searchResults.filteredqueryurl
  );
  useEffect(() => {
    dispatch(handleFetchSearchResults(filters));
  }, [filters]);
  // to update query url as filters query change
  useEffect(() => {
    if (Firstrender.current) {
      Firstrender.current = false;
      return;
    }
    router.push(
      {
        pathname: `/search`,
        query: theQueryFilter,
      },
      null,
      { getServerSideProps: true }
    );
  }, [theQueryFilter]);
  // to read from query if there is filters in query
  useEffect(() => {
    if (query && urlLoadQueryFirstRender.current) {
      if (Object.keys(query).length > 0) {
        urlLoadQueryFirstRender.current = false;

        dispatch(handleReadQuery(query));
      }
    }
  }, [query]);
  const handleclearAllFilters = () => {
    dispatch(handleResetAllFilters());
  };
  return width > 700 ? (
    <SearchFiltersContainer>
      <div className="filters">
        <div className="filtericon">
          <FaFilter />
        </div>
        <div className="filterview">
          <CollapseButtonFilter
            filtername={"Size"}
            tempFilters={tempFilters}
            setTempFilters={setTempFilters}
            filterkey={"sizes"}
          >
            <MultiGrapInputView
              filterkey={"sizes"}
              setTempFilters={setTempFilters}
            />
          </CollapseButtonFilter>
        </div>
        <div className="filterview">
          <CollapseButtonFilter
            filtername={"Color"}
            tempFilters={tempFilters}
            setTempFilters={setTempFilters}
            filterkey={"color"}
          >
            <MultiGrapInputView
              filterkey={"color"}
              setTempFilters={setTempFilters}
            />
          </CollapseButtonFilter>
        </div>
        <div className="filterview">
          <CollapseButtonFilter
            filtername={"Price"}
            tempFilters={tempFilters}
            setTempFilters={setTempFilters}
          >
            <SingleGrapInputView
              filterkey={"price"}
              setTempFilters={setTempFilters}
            />
          </CollapseButtonFilter>
        </div>

        <div className="filterview">
          <CollapseButtonFilter
            filtername={"Room"}
            tempFilters={tempFilters}
            setTempFilters={setTempFilters}
            filterkey={"room"}
          >
            <MultiGrapInputView
              filterkey={"room"}
              setTempFilters={setTempFilters}
            />
          </CollapseButtonFilter>
        </div>
        <div className="filterview">
          <CollapseButtonFilter
            filtername={"Material"}
            tempFilters={tempFilters}
            setTempFilters={setTempFilters}
            filterkey={"matrial"}
          >
            <MultiGrapInputView
              filterkey={"matrial"}
              setTempFilters={setTempFilters}
            />
          </CollapseButtonFilter>
        </div>
        <div className="filterview">
          <CollapseButtonFilter
            filtername={"Construction"}
            tempFilters={tempFilters}
            setTempFilters={setTempFilters}
            filterkey={"construction"}
          >
            <MultiGrapInputView
              filterkey={"construction"}
              setTempFilters={setTempFilters}
            />
          </CollapseButtonFilter>
        </div>
        <div className="filterview">
          <CollapseButtonFilter
            filtername={"Style"}
            tempFilters={tempFilters}
            setTempFilters={setTempFilters}
            filterkey={"style"}
          >
            <MultiGrapInputView
              filterkey={"style"}
              setTempFilters={setTempFilters}
            />
          </CollapseButtonFilter>
        </div>
      </div>
      <div className="resetbutt">
        <button onClick={() => handleclearAllFilters()}>Reset all</button>
      </div>
    </SearchFiltersContainer>
  ) : (
    <SearchFilterContainerMobile>
      <div className="filtericon">
        <FaFilter />
      </div>
      <div className="filterview">
        <CollapseButtonFilter
          filtername={"Size"}
          tempFilters={tempFilters}
          setTempFilters={setTempFilters}
          filterkey={"sizes"}
        >
          <MultiGrapInputView
            filterkey={"sizes"}
            setTempFilters={setTempFilters}
            tempFilters={tempFilters}
          />
        </CollapseButtonFilter>
      </div>
      <div className="filterview">
        <CollapseButtonFilter
          filtername={"Color"}
          tempFilters={tempFilters}
          setTempFilters={setTempFilters}
          filterkey={"color"}
          isOpen={isOpenModal}
        >
          <MultiGrapInputView
            filterkey={"color"}
            setTempFilters={setTempFilters}
            tempFilters={tempFilters}
            isOpen={isOpenModal}
          />
        </CollapseButtonFilter>
      </div>
      <button
        className="morefilters morefilterstest"
        onClick={() => setIsOpenModal(!isOpenModal)}
      >
        Filters
      </button>
      <MoreFilters
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
        tempFilters={tempFilters}
        setTempFilters={setTempFilters}
      />
    </SearchFilterContainerMobile>
  );
};

const SearchFiltersContainer = styled.div`
  padding: 8px 16px;
  border: 1px solid #a9c7db;
  border-width: 1px 0px 1px 0px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  .resetbutt {
    button {
      width: 90px;
      height: 40px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      color: white;
      border: 1px solid #0c314e;
      background-color: #0c314e;
      border-radius: 4px;
    }
  }
  .filters {
    display: flex;
    align-items: center;
  }
  align-items: center;
  .filtericon {
    margin: 0px 10px;
    font-size: 22px;
  }

  .filterview {
    margin: 0px 10px;
  }
  .morefilters {
    background-color: transparent;
    border: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
  }
`;

const SearchFilterContainerMobile = styled.div`
  padding: 8px 16px;
  border: 1px solid #a9c7db;
  border-width: 1px 0px 1px 0px;
  display: flex;
  align-items: center;
  .filtericon {
    margin: 0px 10px;
    font-size: 22px;
  }

  .filterview {
    margin: 0px 10px;
  }
  .morefilters {
    width: 80px;
    background-color: transparent;
    border: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
  }
`;

export default SearchFilters;
