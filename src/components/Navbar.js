// import React, { Component } from 'react'

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { actionCreator } from "../services/actionCreators";
import { bindActionCreators } from "redux";
import { addToCart } from "../services/actions/actions";
import { NavLink } from "react-router-dom";


export default function Navbar(props) {
  console.log("header", props);

  const cardItem = useSelector((state) => state.cardItem);
  console.log("navbar:", cardItem);
  useEffect(() => {
    console.log('COMPONENT',cardItem);
  }, [cardItem]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/product-list">
            <span>
              <img
                src="https://i.pinimg.com/736x/a0/60/df/a060df244ca7b5091ba62d9e01f84f6c.jpg"
                className=""
                alt=""
                style={{ width: "4rem", height: "3rem" }}
              />
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/about"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/about"
                >
                  Contact Us
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/products"
                >
                  Products
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/employees"
                >
                  Employees
                </a>
              </li>
              <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/student-form">Registration</a>
        </li>
              <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/gallery">Photos</a>
        </li>
              <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/edit-employee">Employees</a>
        </li>
              <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/employee/details">Employee Details</a>
        </li>
              {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/user">User Details</a>
        </li> */}
            </ul>
            {/* <a  href='/signup' className="btn btn-outline-success mx-2">
          <span className='' style={{width: "100px", marginRight: "2px", color: 'white'}}>
            <i class="bi bi-box-arrow-in-left" style={{fontSize: '18px'}}></i>
          </span>  
          <span style={{float: 'right'}}>Signup</span>
        </a> */}

            <a href="login" className="btn btn-outline-success mx-2">
              <span
                className=""
                style={{ width: "100px", marginRight: "2px", color: "white" }}
              >
                <i
                  class="bi bi-box-arrow-in-right"
                  style={{ fontSize: "18px" }}
                ></i>
              </span>
              <span style={{ float: "right" }}>Login</span>
            </a>

            <form className="d-flex">
              <a
                href="/admin"
                className="btn btn-outline-success mx-2"
                type="submit"
              >
                <span
                  className=""
                  style={{ width: "100px", marginRight: "2px", color: "white" }}
                >
                  <i
                    class="bi bi-person-workspace"
                    style={{ fontSize: "18px" }}
                  ></i>
                </span>
                <span style={{ float: "right" }}>Admin</span>
              </a>

              <a href={`/cart-details`} className="btn btn-outline-success mx-2"  >{`Cart ${cardItem.length}`}</a>

            </form>
              {/* <a href={"/cart-details"} className="btn btn-outline-success mx-2 active"><span style={{ width: "100px", marginRight: "2px", color: "white" }}><i className="bi bi-cart-fill"></i></span>
                <span  style={{ float: "right" }}>
                  Cart
                  <span
                    className=""
                    style={{
                      background: "red",
                      borderRadius: "15px",
                      padding: "2px",
                      color: "white",
                      marginTop: "0px",
                      fontSize: "1rem",
                    }}
                  >{cardItem.length}</span>
                </span>
              </a> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
