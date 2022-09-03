import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ProductCard from "../../common/ProductCard";
import AppliedFilters from "./AppliedFilters";
const p = {
  image:
    "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
  name: "Table Wood",
  price: "90",
};
const SearchBody = () => {
  const filters = useSelector((state) => state.searchFilters.subscribedFilters);
  const [appliedfilters, setAppliedFilters] = useState([]);
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

  return (
    <SearchBodyContainer>
      <div className="appliedfiltersbar">
        {appliedfilters &&
          appliedfilters.map((curr) => (
            <AppliedFilters
              appliedfiltername={curr.displayedValue}
              appliedkey={curr.key}
            />
          ))}
      </div>
      <div className="productsgrid">
        <ProductCard product={p} />
        <ProductCard product={p} />
        <ProductCard product={p} />
        <ProductCard product={p} />
        <ProductCard product={p} />
      </div>
    </SearchBodyContainer>
  );
};

const SearchBodyContainer = styled.div`
  min-height: 100vh;
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
    min-height: 100vh;
    width: 99%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px 16px;
  }
`;

export default SearchBody;
