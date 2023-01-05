import React from "react";
import Cart from "./cart";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const NewArrivals = () => {
  return (
    <>
      <Wrapper className="NewArrivals background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <img src="https://img.icons8.com/glyph-neue/64/26e07f/new.png" />
              <h2>New Arrivals </h2>
            </div>
            <div className="heading-right row ">
              <span>View all</span>
              <FontAwesomeIcon icon="fa-solid fa-arrow-right" />            </div>
          </div>

          <Cart />
        </div>
      </Wrapper>
    </>
  );
};

export const Wrapper = styled.section`
  .heading img {
    width: 80px;
    height: 70px;
    margin-top: 15px;
  }
  .heading h2 {
    font-weight: 400;
  }
  .heading span {
    color: #e94560;
    font-size: 25px;
    font-weight: 500;
  }
 
`;

export default NewArrivals;
