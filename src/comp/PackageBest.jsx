import React from "react";
import Pdata from "../data/Pdata";
import { Link, useParams } from "react-router-dom";
const PackageBest = () => {
  let {id}=useParams()
  return (
    <>
      {/* best package section start */}
      <div className="container best-package">
        <h5 className=" text-center best-title py-1">Choose Your Package</h5>
        <h1 className="text-center text-capitalize">
          Select Your best Package <br /> For Your Travel
        </h1>

        <div className="row p-4">
          {Pdata.slice(0,6).map((a, index) =>(
            <div className="col-lg-4 py-3" key={index}>
              <div className="card shadow" data-aos="fade-up" data-aos-duration="3000">
                <div className="card-img">
              <img src={a.img} className="w-100" alt="" />
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                <p className="fw-bold p-0 m-0">{a.price} <span>/Per Person</span></p>
                <p className="fw-bold p-0 m-0"><span> <i class="bi bi-calendar-date pe-2"></i> 5 Days/6 night</span></p>
                </div>
                <p className="p-0 m-0 fw-bold"><Link  to={`/details/${a.id}`} className="card-title"><i class="bi bi-geo-alt pe-2"></i>{a.title}</Link></p>
                <p className="p-0 m-0 icon"><i class="bi bi-star-fill pe-2"></i>8K+ Rating</p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* best package section end */}
    </>
  );
};

export default PackageBest;
