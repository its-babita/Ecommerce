import React from "react";
import styled from "styled-components";
import image from "../Assests/Images/bg.jpeg";

const Contact = () => {
  return (
    <Wrapper>
      <div
        className="contact"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat:"no-repeat",
          width:"100vw",
          height:"100%",
          backgroundPosition:"center"
        }}
      >
        <div className="content">
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            omnis veniam obcaecati optio? Eveniet dignissimos esse, sint tempora
            corrupti dolores blanditiis voluptates omnis earum voluptate?
            Aspernatur expedita alias corrupti ex.
          </p>
        </div>

        <div className="container">
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>
                  44600 Har har mahadev, <br />
                  kadaghari,
                  <br />
                  Kathmandu
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i class="fa fa-phone" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>9848667098</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>conatct@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form>
              <h2>Send Message</h2>
              <div className="inputBox">
                <input type="text" name="" required="required" />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input type="text" name="" required="required" />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <textarea required="required"></textarea>
                <span>Type Your Message...</span>
              </div>
              <div className="inputBox">
                <input type="submit" name="" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact {
    position: relative;
    min-height: 100vh;
    padding: 50px 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .content {
    max-width: 800px;
    text-align: center;
  }
  h2 {
    font-size: 36px;
    font-weight: 500;
    color: #fff;
  }
  p {
    font-weight: 500;
    color: blue;
  }
  .container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }
  .contactInfo {
    width: 50%;
    display: flex;
    flex-direction: column;
  }
  .box {
    position: relative;
    padding: 20px 0;
    display: flex;
  }

  .icon {
    min-width: 60px;
    height: 60px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 22px;
  }
  .text {
    display: flex;
    margin-left: 20px;
    font-size: 16px;
    color: #000;
    flex-direction: column;
    font-weight: 300;
  }
  h3 {
    font-weight: 500;
    color: #00bcd4;
  }
  .contactForm {
    width: 40%;
    padding: 40px;
    background: #fff;
  }
  h2 {
    font-size: 30px;
    color: #333;
    font-weight: 500;
  }
  .inputBox {
    position: relative;
    width: 100%;
    margin-top: 10px;
  }

  input,
  textarea {
    width: 100%;
    padding: 5px 0;
    font-size: 16px;
    margin: 10px 0;
    border: none;
    border-bottom: 2px solid #333;
    outline: none;
    resize: none;
  }

  span {
    position: absolute;
    left: 0;
    padding: 5px 0;
    font-size: 16px;
    margin: 10px 0;
    pointer-events: none;
    transition: 0.5s;
    color: #666;
  }

  input:focus ~ span,
  textarea:focus ~ span,
  input:valid ~ span,
  textarea:valid ~ span {
    color: #e91e63;
    font-size: 12px;
    transform: translateY(-20px);
  }

  input[type="submit"] {
    width: 100px;
    background: #00bcd4;
    color: #fff;
    cursor: pointer;
    padding: 10px;
    font-size: 18px;
  }
  @media (max-width: 991px) {
    .contact {
      padding: 50px;
    }
    .container {
      flex-direction: column;
    }
    .contactInfo {
      margin-b0tt0m: 40px;
      width: 100%;
    }
    .contactForm {
      width: 100%;
    }
  }
`;

export default Contact;
