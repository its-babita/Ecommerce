import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import image from "../Assests/Images/cart.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons/faCircleXmark";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import "../Assests/Styles/style.css";
import { DLT } from "../redux/actions/action";

const Navbar = () => {

  const [price,setPrice]=useState(0)
  //console.log(price);

  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [menuIcon, setMenuIcon] = useState();

  const dlt=(id)=>{
    dispatch(DLT(id))
  }

  const total=()=>{
    let price=0;
    getdata.map((ele,idx)=>{
      price=ele.price+price;
    })
    setPrice(price);
  }

  useEffect(()=>{
    total()
  },[total])

  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists ">
          <li>
            <NavLink className="navbar-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/contact">
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink className="navbar-link" to="/signin">
              SignIn
            </NavLink>
          </li>

          <li>
            <NavLink className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolley" />
              {/* Badge */}
              <span
                className="cart-total-item"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                {getdata.length}
              </span>
            </NavLink>
            <Menu
              style={{ marginRight: "18px" }}
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {getdata.length ? (
                <div
                  className="card_details"
                  style={{ width: "24rem", padding: 10 }}
                >
                  <Table>
                    <thead>
                      <tr>
                        <th>Photo</th>
                        <th>Restaurant Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getdata.map((e) => {
                        return (
                          <>
                            <tr>
                              <td>
                                <NavLink
                                  to={`/cart/${e.id}`}
                                  onClick={handleClose}>
                                  <img
                                    src={e.imgdata}
                                    style={{ width: "5rem", height: "5rem" }}
                                    alt=""
                                  />
                                </NavLink>
                              </td>
                              <td>
                                <p>{e.rname}</p>
                                <p>Price:रु{e.price}</p>
                                <p>Quantity:{e.qnty}</p>
                                <p
                                onClick={()=>dlt(e.id)}
                                  style={{
                                    color: "red",
                                    fontSize: 20,
                                    cursor: "pointer",
                                  }}
                                >
                                  <FontAwesomeIcon
                                    className="smalltrash"
                                    icon={faTrash}
                                  />
                                </p>
                              </td>
                              <td
                                className="mt-5"
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                              >
                                <FontAwesomeIcon
                                onClick={()=>dlt(e.id)}
                                  className="largetrash"
                                  icon={faTrash}
                                />
                              </td>
                            </tr>
                          </>
                        );
                      })}
                      <p className="text-center">Total:{price}</p>
                    </tbody>
                  </Table>
                </div>
              ) : (
                <div
                  className="card_details d-flex justify-content-center align-items-center"
                  style={{
                    position: "relative",
                    padding: 10,
                    width: "34rem",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    style={{
                      fontSize: 23,
                      position: "absolute",
                      top: 2,
                      right: 20,
                      cursor: "pointer",
                    }}
                    onClick={handleClose}
                  />
                  <br />
                  <p style={{ fontSize: 22 }}>Your carts is empty</p>
                  <img
                    src={image}
                    alt=""
                    className="emptycart_img"
                    style={{ width: "8rem", padding: 10 }}
                  />
                </div>
              )}
            </Menu>
          </li>
        </ul>

        {/* two button for open and close of menu */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Nav>
  );
};
const Nav = styled.nav`

  .navbar-lists {
    display: flex;
    gap: 4.8rem;

    li {
      list-style: none;

      .navbar-link {
        &:link,
        &:visited {
          text-decoration: none;
          display:inline-block;
          font-size:1.8rem;
          text-transform:uppercase;
          color:${({ theme }) => theme.colors.black}
          transition: color 0.3s linear;
        }
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
  }
  
  .cart-trolley--link{
    position:relative;
  }

  .cart-trolley{
    position:relative;
    font-size:3.2rem

  }

  .cart-total-item{
    width:2.4rem;
    height:2.4rem;
    position:absolute;
    display:grid;
    place-items:center;
    top: -20%;
    left:70%;
    color:#000;
    border-radius:50%;
    background-color:${({ theme }) => theme.colors.helper}
  }

  .mobile-navbar-btn{
    display:none;
    background-color:transparent;
    cursor:pointer;
    border:none;
  }
  .mobile-nav-icon[name="close-outline"]{
    display:none;
  }
  .close-outline{
    display:none;
  }

  @media (max-width:${({ theme }) => theme.media.mobile}){
    .mobile-navbar-btn{
      display:inline-block;
      z-index:9999;
      border:${({ theme }) => theme.colors.black};

     .mobile-nav-icon{
      font-size:4.2rem;
      color:${({ theme }) => theme.colors.black}
     }

    }

    .active .mobile-nav-icon {
      display:none;
      font-size:4.2rem;
      position:absolute;
      top:30%;
      right:10%;
      color:${({ theme }) => theme.colors.black};
      z-index:9999;

    }
    .active .close-outline{
      display:inline-block;
    }
    .navbar-lists{
      width:100vw;
      height:100vh;
      position:absolute;
      top:0;
      left:0;
      backgroun-color:#fff;

      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;

      visibility:hidden;
      opacity:0;
      transform:translateX(100%)
      /* transform-rigin:top; */

      transition: all 3s linear;
    }

    .active .navbar-lists{
      visibility:visible;
      opacity:1;
      transform:translateX(0);
      z-index:999;
      transform-origin:right;
      transition:all 3s linear;
    }
    .navbar-link{
      font-size:4.2rem;
    }
  }
`;

export default Navbar;
