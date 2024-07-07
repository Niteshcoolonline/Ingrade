import React from 'react'

function Footer() {
  return (
    <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <p className="mb-4"><img src="images/logo4.jpg" alt="Image" className="img-fluid" /></p>
                <p>Fast Forward your career in Tech Fields with InGrade
                Best-in-class Training Programs</p>
              </div>
              <div className="col-lg-4">
                <h3 className="footer-heading"><span>Our Courses</span></h3>
                <ul className="list-unstyled">
                  <li><a href="#">Data Science & AI</a></li>
                  <li><a href="#">Data Analytics</a></li>
                  <li><a href="#">Business Analytics</a></li>
                  <li><a href="#">Data Science & ML</a></li>
                  <li><a href="#">Generative AI</a></li>
                  <li><a href="#">Cyber Security</a></li>
                  <li><a href="#">Full Stack</a></li>
                  <li><a href="#">AWS</a></li>
                </ul>
              </div>
              <div className="col-lg-4">
                <h3 className="footer-heading"><span>Contact</span></h3>
                <ul className="list-unstyled">
                  <li><a href="#">Help Center</a></li>
                  <li><a href="#">Support Community</a></li>
                  <li><a href="#">Press</a></li>
                  <li><a href="#">Share Your Story</a></li>
                  <li><a href="#">Our Supporters</a></li>
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="copyright">
                  <p>
                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://ingrade.com" target="_blank" >InGrade</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Footer
