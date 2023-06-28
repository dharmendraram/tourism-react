import React from "react";
import logo from "../logo-2.png";
import card from "../payment-card-1.png";
import card1 from "../payment-card-2.png";
import card2 from "../payment-card-3.png";
import card3 from "../payment-card-4.png";
import card4 from "../payment-card-5.png";
import { Link } from "react-router-dom";
const Footer_top = () => {
  return (
    <>
      <div className="container text-light p-4 pt-5 footer-top">
        <div className="row">
          <div className="col-lg-3">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <p className="pt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              maxime aut ut voluptate dolorum nisi ducimus ratione
            </p>
            <h5>Follow Us:</h5>
            <ul className="p-0 m-0 d-flex gap-3 icon">
              <li>
                <a href="">
                  <i class="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="bi bi-instagram"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="bi bi-dribbble"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h4>Contact us</h4>
            <div className="content-box pt-4 d-flex gap-3 align-items-center">
              <span>
                <i class="bi bi-telephone "></i>
              </span>
              <div className="content-text1">
                <a href="">+01852-1265122</a> <br />
                <a href="">+01852-1265122</a>
              </div>
            </div>
            <div className="content-box d-flex gap-3 align-items-center">
              <span>
              <i class="bi bi-envelope-plus-fill"></i></span>
              <div className="content-text1">
                <a href="">info@example.com</a> <br />
                <a href="">support@example.com</a>
              </div>
            </div>
            <div className="content-box d-flex gap-3 align-items-center">
              <span>
              <i class="bi bi-geo-alt"></i>
              </span>
              <div className="content-text1">
                <a href="">27521265122 Willison Street </a> <br />
                <a href="">Eagan, United State</a>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <h4>support</h4>
            <ul className="pt-3 content-text">
              <li>
                <a href="">Contact us</a>
              </li>
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">our Blogs</a>
              </li>
              <li>
                <a href="">terms and conditions</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h4>We Accepts:</h4>
            <div className="icon-card ">
              <img src={card} className="" alt="" />
              <img src={card1} alt="" />
              <img src={card2} alt="" />
              <br />
              <img src={card3} alt="" />
              <img src={card4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer_top;
