import React from "react";
import Hdata from "../data/Hdata";
const HeroSlider = () => {
  return (
    <>
      {/* hero banner section start */}
      <section className="hero-banner">
        <div
          id="carouselExampleCaptions"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            {Hdata.slice(0, 1).map((a, index) => (
              <div className="carousel-item active" key={index}>
                <img src={a.img} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block"data-aos="fade-up"
     data-aos-duration="3000">
                  <h5>
                    Amazing Tour
                    <br /> in{" "}
                    <span className="text-uppercase fw-bold">{a.title}</span>
                  </h5>
                </div>
              </div>
            ))}
            {Hdata.slice(1, 3).map((a, index) => (
              <div className="carousel-item" key={index}>
                <img src={a.img} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>
                    Amazing Tour <br />
                    in
                    <span className="text-uppercase fw-bold ms-3">
                      {a.title}
                    </span>
                  </h5>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* form section start */}
        <div className="container text-form ">
          <div className="row rounded-3 py-5 text-form1 mx-auto text-center justify-content-between align-items-center">
            <div className="col-lg-3">
              <form action="">
                <input type="text" placeholder="Where to..." />
              </form>
            </div>
            <div className="col-lg-3 ">
              <form action="">
                <input type="date" placeholder="where to..." />
              </form>
            </div>
            <div className="col-lg-3">
              <form action="">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Travel Type</option>
                  <option value="1">City Tours</option>
                  <option value="2">Vacation Tours</option>
                  <option value="3">Couple Tour</option>
                </select>
              </form>
            </div>
            <div className="col-lg-3">
              <form action="">
              <button type="button" class="btn btn-danger"><i class="bi bi-search pe-3"></i>Find now</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* hero banner section end */}
    </>
  );
};

export default HeroSlider;
