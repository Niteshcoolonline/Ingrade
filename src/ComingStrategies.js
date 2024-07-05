import React from 'react'

function ComingStrategies() {
  return (
    <div className="section-bg style-1" style={{ backgroundImage: `url(images/hero_1.jpg)` }}>
          <div className="space-y-3 text-center">
            <div className="row mb-2 justify-content-center text-center">
              <div className="col-lg-4">
                <h2 className="section-title-underline-white">
                    <span>Coming Strategies</span>
                </h2>
              </div>
            </div>
            <p className="max-w-700px md:text-xl lg:text-base xl:text-xl mb-5">
               
            </p>
          </div>
          <div className="container">
            <div className="d-flex justify-content-center" style={{gap: '100px'}}>
              <div className="col-md-4 educationalContentCard">
                <span className="icon flaticon-mortarboard"></span>
                <h3>Experiential Learning</h3>
                <p>Access of real-world projects and case studies, along with internship opportunities at partner companies, to gain practical experience and industry connections.</p>
              </div>
              <div className="col-md-4 educationalContentCard">
                <span className="icon flaticon-school-material"></span>
                <h3>Certification Programs</h3>
                <p>Learners receive an accredited certification upon course completion, alongside badges and micro-credentials highlighting specific skills gained.
                </p>
              </div>
              <div className="col-md-4 educationalContentCard">
                <span className="icon flaticon-library"></span>
                <h3>Career Services</h3>
                <p>Guidance on resume building and job application strategies, as well as thorough interview preparation through mock interviews to enhance their readiness for career opportunities.</p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ComingStrategies
