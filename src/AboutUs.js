import React from 'react'

function AboutUs() {
  return (
    <section className="py-5 py-md-6 py-lg-7" id='aboutingrade'>
        <div className="row mb-5 justify-content-center text-center">
              <div className="col-lg-8">
                <h2 className="section-title-underline mb-3">
                  <span>About InGrade</span>
                </h2>
              </div>
            </div>
      <div className="container-md px-4 px-md-5">
        <div className="row gx-5 align-items-center gy-6 gy-lg-0 justify-content-center">
       
          <div className="col-lg-9">
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="max-w-600 text-muted">Welcome to InGrade, the leading EdTech platform dedicated to transforming your career through cutting-edge online education. We are committed to providing high-quality, comprehensive courses that cater to the evolving needs of the modern job market. Specializing in Data Science, Artificial Intelligence, Machine Learning, Data Analytics, Business Analytics, Full Stack Development, Generative AI, and AWS, InGrade is your partner in achieving professional success and growth.
                </p>
              </div>
              <ul className="list-unstyled grid gap-4">
                <li className="d-flex gap-2 align-items-start">
                  <div>
                    <h3 className="fw-semibold fs-lg text-black">Our Mission</h3>
                    <p className="text-muted">At InGrade, our mission is to empower individuals by equipping them with the latest skills and knowledge required to excel in the technology-driven world. We believe that education is the key to unlocking potential and driving innovation. Our goal is to provide accessible, flexible, and top-notch education that prepares our students for the challenges and opportunities of the future.</p>
                  </div>
                </li>
                <li className="d-flex gap-2 align-items-start">
                  <div>
                    <h3 className="fw-semibold fs-lg text-black">Our Vision</h3>
                    <p className="text-muted">Our vision is to create a global community of learners who are equipped to lead and innovate in their respective fields. We aim to be the go-to platform for anyone looking to enhance their technical skills and advance their careers. By fostering a culture of continuous learning and development, we strive to make a lasting impact on the lives of our students and the broader tech industry.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

function CheckIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    );
  }

export default AboutUs
