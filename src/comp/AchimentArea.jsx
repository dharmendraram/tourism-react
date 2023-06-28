import React from "react";

const AchimentArea = () => {
  return (
    <>
      {/* achievement section start */}
      <section className="achiment-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-head py-5">
                <h5 className="py-1">Why TourX</h5>
                <h1 className="text-capitalize">Why you are travel with tourx</h1>
              </div>
            </div>
          </div>

          <div className="row pb-4 "data-aos="fade-right"  data-aos-duration="3000">
            <div className="col-lg-3 p-2 col-md-6">
              <div className="achievement-card">
                <i class="bi bi-people-fill"></i>
                <h5>2000+ Our worldwide guide</h5>
              </div>
            </div>

            <div className="col-lg-3 p-2 col-md-6">
              <div className="achievement-card">
                <i class="bi bi-people-fill"></i>
                <h5>100% trusted travel agency</h5>
              </div>
            </div>

            <div className="col-lg-3 p-2 col-md-6">
              <div className="achievement-card">
                <i class="bi bi-people-fill"></i>
                <h5>10+ year of travel experience</h5>
              </div>
            </div>

            <div className="col-lg-3 p-2 col-md-6">
              <div className="achievement-card">
                <i class="bi bi-people-fill"></i>
                <h5>90% of our traveller happy</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* achievement section end */}
    </>
  );
};

export default AchimentArea;
