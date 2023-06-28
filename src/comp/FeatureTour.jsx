import React from "react";
import "react-multi-carousel/lib/styles.css";
import img2 from "../f-1.png";
import img3 from "../f-2.png";
const FeatureTour = () => {
  return (
    <>
      {/* feature section start */}
      <section className="feature">
        <div className="container">
          <div className="text-center pt-4">
            <h6 className="py-1">Feature Tours</h6>
            <h1 className="text-capitalize">
              See Our Best Popular <br /> Package
            </h1>
          </div>

          <div className="row py-5">
            <div className="col-lg-6 py-2">
              <div className="feature-box d-flex justify-content-between ">
                <div className="img-box">
                  <img src={img2} className="w-100 h-100" alt="" />
                </div>
                <div className="card-body bg-light p-4">
                  <h3>
                    <a href="" className="text-dark fs-4 py-1">Group Travel Go To Bea Amsterdam</a>
                  </h3>
                  <h5 className="p-0 m-0">
                    <i class="bi bi-star-fill pe-2"></i>
                    <span className="text-secondary">7K+ Rating</span>
                  </h5>
                  <p className="fs-5 fw-bold pt-2 m-0">$150</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 py-2 ">
              <div className="feature-box d-flex justify-content-between ">
                <div className="img-box">
                  <img src={img3} className="w-100 h-100" alt="" />
                </div>
                <div className="card-body bg-light p-4">
                  <h3>
                    <a href="" className="text-dark fs-4 py-1">Group Travel Go To Bea Amsterdam</a>
                  </h3>
                  <h5 className="p-0 m-0">
                    <i class="bi bi-star-fill pe-2"></i>
                    <span className="text-secondary">7K+ Rating</span>
                  </h5>
                  <p className="fs-5 fw-bold pt-2 m-0">$150</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* feature section end */}
    </>
  );
};

export default FeatureTour;
