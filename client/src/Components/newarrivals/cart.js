import React from "react";
import styled from "styled-components";
import Ndata from "./Ndata";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cart = () => {
  return (
    <>
      <Wrapper>
      <div className="row d-flex justify-content-center align-items-center">

        {Ndata.map((value, index) => {
          return (
            <>
              <Card
                className="card_style mx-3 mt-5"
                style={{ width: "20rem", border: "none" }}
              >
                <Card.Img
                  className="mt-2"
                  style={{ height: "20rem" }}
                  variant="top"
                  src={value.cover}
                />
                <Card.Body>
                  <Card.Title>{value.name}</Card.Title>
                  <span>Rs.{value.price}</span>
                  <Card.Text>Lorem ipsum dolor sit amet.</Card.Text>
                  <Button
                    variant="primary"
                    className="col-md-8"
                    style={{ height: "30px", fontSize: "15px" }}
                  >
                    Buy
                  </Button>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
      </Wrapper>
    </>
  );
};

export const Wrapper = styled.div`
  .card_style {
    cursor: pointer;
    transition: 0.3s;
  }
  .card_style:hover {
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.082);
  }
`;

export default Cart;
