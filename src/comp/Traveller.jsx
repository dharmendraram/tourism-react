import React from "react";
import Adata from "../data/Adata";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Traveller = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 992, min: 576 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      {/* tarveller section start */}
      <section className="traveller py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-head py-4">
                <h5 className="py-1">Our Traveller Say</h5>
                <h1 className="text-capitalize">What Oue Traveller Say <br /> About Us</h1>
              </div>
            </div>

          <Carousel
            infinite={true}
            arrows={false}
            showDots={true}
            autoPlaySpeed={3000}
            responsive={responsive}
          >
        {Adata.map((a, index) => (
            <div className="travel-box m-4" key={index}>
                <div className="img-box text-center">
                    <img src={a.img} className="w-100" alt="" />
                    <h6 className="pt-3">{a.name}</h6>
                    <p className="text-secondary py-2 m-0">{a.title}</p>
                </div>
                <p>{a.subtitle}</p>

            </div>

            ))}
          </Carousel>

          </div>
        
        </div>
      </section>
      {/* traveller section end */}
    </>
  );
};

export default Traveller;
