import React from "react";
import styled from "styled-components";
import image1 from "../Assests/Images/slider1.jpeg";
import image2 from "../Assests/Images/slider2.jpeg";
import image3 from "../Assests/Images/slider3.jpeg";

import HeroSection from "../Components/HeroSection";
const Home = () => {
  return (
    <>
      <Wrapper>
        <Search />
        <ImageSlider />
        <HeroSection />
      </Wrapper>
    </>
  );
};

function Search() {
  return (
    <>
      <h1 style={{ height: 50, width: "200px" }}>Hello</h1>
    </>
  );
}

function ImageSlider() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={image1} alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Lorem ipsum dolor sit amet.</h5>
              <p>Lorem ipsum dolor sit amet.</p>

              <div className="slider-btn">
                <button className="btn btn-1">Shop Now</button>
                <button className="btn btn-2">Shop Now</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={image2} alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Lorem ipsum dolor sit amet.</h5>
              <p>Lorem ipsum dolor sit amet.</p>
              <div className="slider-btn">
                <button className="btn btn-1">Shop Now</button>
                <button className="btn btn-2">Shop Now</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={image3} alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Lorem ipsum dolor sit amet.</h5>
              <p>Lorem ipsum dolor sit amet.</p>
              <div className="slider-btn">
                <button className="btn btn-1">Shop Now</button>
                <button className="btn btn-2">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}

const Wrapper = styled.section`
  height: 200vh;
  background-color: ${({ theme }) => theme.colors.bg};

{/* Slider */}

.carousel-item{
  height:70vh;
  min-height:300px;
  background:no-repeat scroll center scroll;
  -webkit-background-size:cover;
  background-size:cover
}
.carousel-item::before{
  content:"";
  display:block;
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
  background:#000;
  opacity:0.7;
}
.carousel-caption{
  bottom:180px;
  padding-left:100px;
  padding-right:100px;
}

.carousel-caption h5{
  font-size:100px;
  font-weight:700;
}

.carousel-caption p{
  font-size:18px;
  top:2rem;
  color:white;
}
.slider-btn{
  margin-top:30px;
}
.slider-btn .btn {
  background-color:#e74c3c;
  color:white;
  border-radius:0;
  padding:1.5rem 2rem;
  font-size:1rem;
  margin-right:15px;
}
.slider-btn .btn-2{
  background-color:white;
  color:#000;
}

`;



export default Home;
