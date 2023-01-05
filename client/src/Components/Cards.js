import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Cardsdata from "./CardsData";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { ADD } from "../Services/Actions/action";

const Cards = () => {
  const [data, setData] = useState(Cardsdata);
  //console.log(Cardsdata);

  const dispatch=useDispatch();
  
  const send=(e)=>{
    //console.log(e);
    dispatch(ADD(e))
  }

  return (
    <Wrapper>
      <div className="container mt-3">
        <h2 className="text-center">Products</h2>
        <div className="row d-flex justify-content-center align-items-center">
          {data.map((element, id) => {
            return (
              <>
                <Card
                  className="card_style mx-3 mt-5"
                  style={{ width: "32rem", border: "none" }}
                >
                  <Card.Img
                    className="mt-3"
                    variant="top"
                    src={element.imgdata}
                    style={{ height: "32rem" }}
                  />
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>Price: रु{element.price}</Card.Text>
                    <div className="button_div d-flex justify-content-center">
                      <Button onClick={()=>send(element)} variant="primary" className="col-md-10" style={{fontSize:"20px"}}>Add to Cart</Button>
                    </div>
                  </Card.Body>
                </Card>
              </>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .card_style {
    cursor: pointer;
    transition: 0.3s;
  }
  .card_style:hover {
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.082);
  }
`;

export default Cards;