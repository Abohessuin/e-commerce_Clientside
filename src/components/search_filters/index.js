import styled from "styled-components";
import SearchBody from "./components/SearchBody";
import SearchFilters from "./components/SearchFilters";

const Search_filters = () => {
  return (
    <SearchFilterContainer>
      <div className="upperintro">
        <img src="/assets/icons/intro.jpg" />
        <p>Our Products</p>
      </div>
      <div className="searchfilter">
        <SearchFilters />
      </div>
      <div className="searchbody">
        <SearchBody />
      </div>
    </SearchFilterContainer>
  );
};

const SearchFilterContainer = styled.section`
  .upperintro {
    height: 35vh;
    width: 100%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: Roboto;
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 1.1067708333333333vw;
      color: #0c314e;
    }
  }
  .searchfilter {
    position: sticky;
    top: 0px;
    left: 0px;
    background-color: white;
    z-index: 1;
  }
`;

export default Search_filters;
