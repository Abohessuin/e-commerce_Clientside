// import { getAreasWithSummary, getFooterLinksCached } from "../lib/api";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { handlePreparingFiltersInputsData } from "../../redux/actions/filterAction";
import Search_filters from "../components/search_filters/index";
const Search = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handlePreparingFiltersInputsData());
  }, []);
  return (
    <Container>
      <Search_filters />
    </Container>
  );
};

const Container = styled.section`
  background-color: white;
  min-height: 100vh;
`;

export default Search;
