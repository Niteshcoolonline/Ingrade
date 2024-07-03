import React from 'react'
import './App.css'
function Crousal() {
  return (
    <div className="hero-slide owl-carousel site-blocks-cover">
          <div className="intro-section" style={{ backgroundImage: `url(images/hero_2.jpeg)` }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12 mx-auto text-center" data-aos="fade-up">
                  <h1>Transform Your Future: Master, Innovate, and Thrive with Premier Courses </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="intro-section" style={{ backgroundImage: `url(images/hero_3.jpeg)` }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12 mx-auto text-center" data-aos="fade-up">
                  <h1>Empower Your Future with InGrade: Learn, Grow, and Succeed with Premier Tech Courses</h1>
                </div>
              </div>
            </div>
          </div>

        </div>
  )
}

export default Crousal
