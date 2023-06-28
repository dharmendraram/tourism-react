import React from "react";
import { Link, useParams } from "react-router-dom";
import Pdata from "../data/Pdata";

const Blog = () => {
  const {id}=useParams()
  return (
    <>
      {/* blog section start */}
      <section className="blog py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-head py-4">
                <h5 className="py-1">Latest Blog</h5>
                <h1 className="text-capitalize text-center">
                  Stay Updated And new <br /> post our Blog
                </h1>
              </div>
            </div>
          </div>

          <div className="row mb-5">
            {Pdata.slice(6,9).map((a) => (
              <div className="col-lg-4 py-2">
                <div className="card shadow border-0">
                  <div className="card-img">
                    <img src={a.img} className="w-100" alt="" />
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="card-lift">
                       <a href="" className="text-dark"><i class="bi bi-person pe-2"></i>Dina Jems</a>
                        </div>
                      <div className="card-right">
                       <a href="" className="text-dark"> <i class="bi bi-wallet-fill pe-2"></i>(3)Comment</a>
                        </div>
                    </div>
                   <h3> <a href="" className="text-dark fs-5">{a.title}</a></h3>
                    <div className="card-btn mb-4">
                        <Link to={`/details/${a.id}`} className="btn btn-primary d-inline-block">Read more</Link>
                    </div>
                  </div>

                  <div className="card-date text-center">
                    <p className="fw-bold p-0 m-0"><i class="bi bi-calendar-date-fill pe-2"></i> 1 April, 2021</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* blog section end  */}
    </>
  );
};

export default Blog;
