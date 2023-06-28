import React from 'react'
import img1 from "../1.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Pdata from '../data/Pdata';
import { Link, useParams } from 'react-router-dom';

const CommonSlider = () => {
  let {id}=useParams()
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 992 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 992, min: 576 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 576, min: 0 },
          items: 1,
        },
      };
  return (
    <>
     <div className="row p-2"
    >
          <div className="col-lg-3 ">
            <div className="img-slider">
              <img src={img1} className="w-100" height={350} alt="" />
              <div className="content">
                <p>Spain</p>
              </div>
            </div>
          </div>
          <div className="col-lg-9">

              {/* slider section  */}
              <Carousel
                infinite={true}
                // autoPlay={true}
                autoPlaySpeed={1000}
                responsive={responsive}
              >
                {Pdata.slice(1,6).map((a, index) => (
                  <div className=" p-1" key={index}>
                    <div className="card border">
                      <div className="card-img">
                        <img src={a.img} className="w-100"height={230} alt="" />
                      </div>
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <p className="fw-bold p-0 m-0">
                            {a.price} <span>/Per Person</span>
                          </p>
                          <p className="fw-bold p-0 m-0">
                            <span>
                              {" "}
                              <i class="bi bi-calendar-date pe-2"></i> 5 Days/6
                              night
                            </span>
                          </p>
                        </div>
                        <p className="p-0 m-0 fw-bold">
                          <Link to={`/details/${a.id}`} className="card-title">
                            <i class="bi bi-geo-alt pe-2"></i>
                            {a.title}
                          </Link>
                        </p>
                        <p className="p-0 m-0 icon">
                          <i class="bi bi-star-fill pe-2"></i>8K+ Rating
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
                      
          </div>
        </div> 
    </>
  )
}

export default CommonSlider
