import React from "react";
import Pdata from "../data/Pdata";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const item = Pdata.find((a) => a.id == id);
  return (
    <>
      {/* details section start */}
      <section className="details-bg d-flex align-items-center">
      <div className="container"data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
          <div className="row ">
            <div className="col-lg-12 col-md-12 col-sm-12 ">
              <div className="details-text text-center">
                <h1 className="text-light fw-bold">Tour Package Details</h1>
                <ul className="d-flex justify-content-center align-items-cente pt-3">
                  <li>
                    <Link to="/" className="fw-bold ">
                      Home
                    </Link>
                  </li>
                  <li>
                    <i class="bi bi-arrow-right-short ps-2"></i>
                  </li>
                  <li className="package-details">Package Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* card section  */}
      <div className="main-details">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8 "data-aos="fade-right"
     data-aos-easing="linear"
     data-aos-duration="1500">
              <div className="card shadow bg-light border-0">
                <div className="details-img p-2 rounded-3">
                  <img
                    src={item.img}
                    className="card-img-top w-100"
                    alt="..."
                  />
                </div>
                <div className="card-body my-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <h2 className="card-text">
                      {item.title}
                      <br />
                      <span className="fs-6 pt-1 text-secondary">
                        <i class="bi bi-geo-alt"></i> Mount Dtna, Spain
                      </span>
                    </h2>
                    <div className="card-left">
                      <p className="p-0 m-0 fs-6 fw-bold">Excellent</p>
                      <p className="p-0 m-0 text-warning">
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star px-1"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star ps-1"></i>
                      </p>
                      <p className="fs-6">800 Review</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row icon-box ">
                    <div className="col-lg-3 ">
                      <div className="d-flex gap-3 px-4  align-items-center">
                        <i class="bi bi-clock fs-4"></i>
                        <div className="box">
                          <p className="p-0 m-0 fw-bold">
                            Duration <br /> <span>Daily Tour</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="d-flex gap-3 px-4 align-items-center">
                      <i class="bi bi-arrow-clockwise fs-4"></i>
                        <div className="box">
                          <p className="p-0 m-0 fw-bold">
                            Tour Type <br /> <span>4 Days</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="d-flex gap-3 px-4 align-items-center">
                      <i class="bi bi-person-hearts fs-4"></i>
                        <div className="box">
                          <p className="p-0 m-0 fw-bold">
                            Group Size <br /> <span>30 Peoples</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="d-flex px-4 gap-3 align-items-center">
                      <i class="bi bi-translate fs-4"></i>
                        <div className="box">
                          <p className="p-0 m-0 fw-bold">
                            Languages <br /> <span>Any Language</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>

            {/* form section  */}

            <div className="col-lg-4 form-text "data-aos="fade-left"data-aos-easing="linear"
     data-aos-duration="1500">
              <div className="card border-0 shadow p-3 pb-4">
                <h5 className="py-4">Book This Package</h5>

                <form action="">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Full Name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="phone"
                      className="form-control"
                      placeholder="Phone "
                    />
                  </div>

                  <select
                    class="form-select form-select-sm mb-3 ms-0"
                    aria-label=".form-select-sm example"
                  >
                    <option selected>Tickets Types</option>
                    <option value="1">Travel with Bus</option>
                    <option value="2">Travel With Plane</option>
                  </select>

                  <div className="mb-3 d-flex justify-content-between">
                    <select
                      class="form-select form-select-sm me-1 ms-0"
                      aria-label=".form-select-sm example"
                    >
                      <option selected>Adult</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>

                    <select
                      class="form-select form-select-sm ms-1 "
                      aria-label=".form-select-sm example"
                    >
                      <option selected>Child</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <input type="date" className="form-control" />
                  </div>

                  <div className="mb-3">
                    <textarea
                      className="form-control message"
                      id="exampleFormControlTextarea1"
                      placeholder="Message"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="submit"
                      className="form-control btn-text bg-primary fw-bold text-light"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                      value="Book Now"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details section end  */}
    </>
  );
};

export default Details;
