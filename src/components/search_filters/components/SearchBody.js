import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ProductCard from "../../common/ProductCard";
import AppliedFilters from "./AppliedFilters";
import { Spinner } from "react-bootstrap";
// const p = {
//   image:
//     "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
//   name: "Table Wood",
//   price: "90",
// };
const SearchBody = () => {
  const filters = useSelector((state) => state.searchFilters.subscribedFilters);
  const searchresults = useSelector((state) => state.searchResults);
  const [appliedfilters, setAppliedFilters] = useState([]);
  const [loadProducts, setLoadProducts] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    if (filters) {
      setAppliedFilters(() => {
        const res = [];
        for (let key in filters) {
          res.push(...filters[key].filteredValues);
        }
        return res;
      });
    }
  }, [filters]);

  useEffect(() => {
    if (searchresults) {
      setLoadProducts([...searchresults.filteredsearchdata]);
      setisLoading(searchresults.isfilteredsearchdataready);
    }
  }, [searchresults]);

  return (
    <SearchBodyContainer>
      {!isLoading ? (
        <>
          <div className="appliedfiltersbar">
            {appliedfilters &&
              appliedfilters.map((curr) => (
                <AppliedFilters
                  appliedfiltername={curr.displayedValue}
                  appliedkey={curr.key}
                />
              ))}
          </div>

          {loadProducts.length > 0 ? (
            <div className="productsgrid">
              {loadProducts &&
                loadProducts.map((product) => (
                  <ProductCard product={product} key={product.name} />
                ))}
            </div>
          ) : (
            <div className="nosearch">No Search Results...</div>
          )}
        </>
      ) : (
        <div class="spinner-border" role="status">
          <Spinner />
        </div>
      )}
    </SearchBodyContainer>
  );
};

const SearchBodyContainer = styled.div`
  min-height: 100vh;
  .nosearch {
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 16px;
    color: #0c314e;
    position: absolute;
    text-align: center;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media screen and (max-width: 800px) {
      font-size: 19px;
      line-height: 16px;
      color: #0c314e;
      position: absolute;
      top: 45%;
      left: 50%;
    }
  }
  .spinner-border {
    width: 3rem !important;
    height: 3rem !important;
    color: #0c314e;
    position: absolute;
    top: 50%;
    left: 50%;
  }
  .appliedfiltersbar {
    padding: 10px 14px;
    display: flex;
    height: 40px;
    align-items: center;
    background: #ffffff;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);
    position: sticky;
    top: 52px;
    left: 0px;
  }
  .productsgrid {
    padding: 22px 0px;
    margin-top: 20px;

    width: 98%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px 28px;
  }
  @media screen and (max-width: 800px) {
    .appliedfiltersbar {
      height: 60px;
      white-space: nowrap;
      overflow-x: scroll;
      overflow-y: hidden;
      ::-webkit-scrollbar {
        display: none;
      }
      ::-webkit-scrollbar-thumb {
        display: none;
      }
      ::-webkit-scrollbar-track {
        display: none;
      }
    }
  }
`;

export default SearchBody;
