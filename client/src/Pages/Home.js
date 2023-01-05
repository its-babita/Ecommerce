import React from "react";
import styled from "styled-components";
import NewArrivals from "../Components/newarrivals/NewArrivals";
import Search from "../Components/Search";
const Home = () => {
  return (
    <>
      <Wrapper>
        <br />
        <center>
          <Search />
        </center>
        <NewArrivals />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.white};

   {
    /* Slider */
  }

  .carousel-item {
    height: 50vh;
    min-height: 300px;
    background: no-repeat scroll center scroll;
    -webkit-background-size: cover;
    background-size: cover;
  }
  .carousel-item::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #000;
    opacity: 0.7;
  }
  .carousel-caption {
    bottom: 60px;
    padding-left: 100px;
    padding-right: 100px;
  }

  .carousel-caption h5 {
    font-size: 50px;
    font-weight: 700;
  }

  .carousel-caption p {
    font-size: 18px;
    top: 2rem;
    color: white;
  }
  .slider-btn {
    margin-top: 30px;
  }
  .slider-btn .btn {
    background-color: #e74c3c;
    color: white;
    border-radius: 0;
    padding: 1.5rem 2rem;
    font-size: 1rem;
    margin-right: 15px;
  }
  .slider-btn .btn-2 {
    background-color: white;
    color: #000;
  }
`;

export default Home;
