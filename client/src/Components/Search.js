import React from "react";
import styled from "styled-components";

const Search = () => {
  return (
    <Wrapper>
    <div className="input-box">
      <i className="uil uil-search"></i>
      <input type="text" placeholder="Search here..." />
      <button className="button">Search</button>
    </div>
    </Wrapper>
  );
};

const Wrapper = styled.section `

.input-box {
  position: relative;
  height: 60px;
  max-width: 1200px;
  width: 60%;
  background: #fff;
  margin: 0 140px;
  border-radius: 8px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
.input-box i,
.input-box .button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.input-box i {
  left: 20px;
  font-size: 30px;
  color: #707070;
}
.input-box input {
  height: 100%;
  width: 100%;
  outline: none;
  font-size: 18px;
  font-weight: 400;
  border: none;
  padding: 0 155px 0 65px;
  background-color: transparent;
}
.input-box .button {
  right: 20px;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  border: none;
  padding: 12px 30px;
  border-radius: 6px;
  background-color: #4070f4;
  cursor: pointer;
}
.input-box .button:active {
  transform: translateY(-50%) scale(0.98);
}

/* Responsive */
@media screen and (max-width: 500px) {
  .input-box {
    height: 66px;
    margin: 0 8px;
  }
  .input-box i {
    left: 12px;
    font-size: 25px;
  }
  .input-box input {
    padding: 0 112px 0 50px;
  }
  .input-box .button {
    right: 12px;
    font-size: 14px;
    padding: 8px 18px;
  }
}
`

export default Search;
