import styled from "styled-components";
import { FaStar } from "react-icons/fa";
const ProductCard = ({ product }) => {
  return (
    <ProductCardContainer>
      <div className="upperblock">
        <img src={product.image} />
      </div>

      <div className="lowerblock">
        <div className="productname">
          <p>{product.name} </p>
          <div className="rate">
            <FaStar className="r1" /> <FaStar className="r1" />{" "}
            <FaStar className="r1" />
            <FaStar /> <FaStar />
          </div>
        </div>
        <div className="productdetails">
          Lorem ipsum dolor sit amet. Aut excepturi magni qui pariatur maxime.
        </div>
        <div className="price">{product.price}$</div>
      </div>
    </ProductCardContainer>
  );
};
const ProductCardContainer = styled.div`
  flex-basis: 350px;
  height: 450px;
  box-shadow: 0px 1px 2px rgba(49, 52, 66, 0.08),
    0px 4px 8px rgba(22, 56, 207, 0.08);
  border-radius: 16px;
  overflow: hidden;
  transition: all 1s ease-in-out;
  &:hover {
    box-shadow: 0px 4px 16px 6px rgba(52, 58, 82, 0.08),
      0px 4px 8px rgba(22, 56, 207, 0.25);
  }
  cursor: pointer;
  .upperblock {
    height: 70%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      overflow: hidden;
      transition: all 0.5s ease-in-out;
      &:hover {
        transform: ${(props) => (!props.isMobile ? "scale(1.1)" : "none")};
      }
    }
    overflow: hidden;
  }
  .lowerblock {
    height: 30%;
    width: 90%;
    margin: 0 auto;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .productname {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-family: Roboto;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 16px;
        color: brown;
        margin: 0px !important;
      }
      .rate {
        .r1 {
          color: orange;
        }
      }
    }
    .productdetails {
      font-family: Roboto;
      font-style: normal;
      font-weight: 200;
      font-size: 14px;
      line-height: 16px;

      color: brown;
    }
    .price {
      font-family: Roboto;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 16px;
      color: brown;
    }
  }
`;

export default ProductCard;
