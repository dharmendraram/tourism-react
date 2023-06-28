import React from "react";
import CommonSlider from "./CommonSlider";
import CommonSlider1 from "./CommonSlider1";
import CommonSlider3 from "./CommonSlider3";

const BestDestination = () => {
  
  return (
    <>
      {/* best destination section start */}
      <div className="container best-destination">
        <h5 className=" text-center py-1 best-title">Popular Destinations</h5>
        <h1 className="text-center  text-capitalize">
          Select Our Best Popular <br /> Destinations
        </h1>

        <CommonSlider/>
        <CommonSlider1/>
        <CommonSlider3/>
      </div>
      {/* best destination section end */}
    </>
  );
};

export default BestDestination;
