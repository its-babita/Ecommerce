import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="footer-col">
                <h4>company</h4>
                <ul>
                  <li>
                    <NavLink className="navbar-link" to="#">
                      about us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="navbar-link" to="#">
                      our services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="navbar-link" to="#">
                      privacy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="navbar-link" to="#">
                      affiliate program
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>get help</h4>
                <ul>
                  <li>
                    <NavLink className="navbar-link" to="#">
                      FAQ
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="navbar-link" to="#">
                      Shipping
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="navbar-link" to="#">
                      Returns
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="navbar-link" to="#">
                      Order Status
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="navbar-link" to="#">
                      Payment Options
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>online shop</h4>
                <ul>
                  <li>
                    <NavLink className="navbar-link" to="#">
                      Watch
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="navbar-link" to="#">
                      Bag
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="navbar-link" to="#">
                      Shoes
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="navbar-link" to="#">
                      Dress
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>follow us</h4>
                <div className="social-links">
                  <NavLink className="navbar-link" to="#">
                    <FaFacebook />
                  </NavLink>
                  <NavLink className="navbar-link" to="#">
                    <FaTwitter />
                  </NavLink>
                  <NavLink className="navbar-link" to="#">
                    <FaInstagram />
                  </NavLink>
                  <NavLink className="navbar-link" to="#">
                    <FaLinkedin />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .footer {
    background-color: #24262b;
    padding: 70px 0;
  }
  .footer-col {
    width: 25%;
    padding: 0 15px;
  }

  .footer-col h4 {
    font-size: 18px;
    color: #ffffff;
    text-transform: capitalize;
    margin-bottom: 35px;
    font-weight: 500;
    position: relative;
  }
  .footer-col h4::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    background-color: #e91e63;
    height: 2px;
    box-sizing: border-box;
    width: 50px;
  }

  .footer-col ul li:not(:last-child) {
    margin-bottom: 10px;
  }
  .footer-col ul li a {
    font-size: 16px;
    text-transform: capitalize;
    color: #ffffff;
    text-decoration: none;
    font-weight: 300;
    color: #bbbbbb;
    display: block;
    transition: all 0.3s ease;
  }

  .footer-col ul li a:hover {
    color: #ffffff;
    padding-left: 8px;
  }

  .footer-col .social-links a {
    display: inline-block;
    height: 40px;
    width: 40px;
    background-color: rgba(255, 255, 255, 0.2);
    margin: 0 10px 10px 0;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: #ffffff;
    transition: all 0.5s ease;
  }

  .footer-col .social-links a:hover {
    color: #24262b;
    background-color: #ffffff;
  }

  .container {
    background-color: black;
    margin: auto;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
  }

  ul {
    list-style: none;
  }

  /* responsive */
  @media (max-width: 767px) {
    .footer-col {
      width: 50%;
      margin-bottom: 30px;
    }
  }
  @media (max-width: 574px) {
    .footer-col {
      width: 100%;
    }
  }
`;

export default Footer;
