import React from 'react'

function Footer() {
  return (
    <div className="footer">
          <div className="container">
            <div className="row align-content-center center justify-content-around">
              <div className="">
                <p className="mb-4"><img src="images/logo4.jpg" alt="Image" className="img-fluid" /></p>
                <p>Fast Forward your career in Tech Fields with InGrade
                Best-in-class Training Programs</p>
              </div>
              <div className="">
                <h3 className="footer-heading"><span>Our Courses</span></h3>
                <ul className="list-unstyled">
                  <li><a href="#course">Data Science & AI</a></li>
                  <li><a href="#course">Data Analytics</a></li>
                  <li><a href="#course">Business Analytics</a></li>
                  <li><a href="#course">Data Science & ML</a></li>
                  <li><a href="#coursebelow">Generative AI</a></li>
                  <li><a href="#coursebelow">Cyber Security</a></li>
                  <li><a href="#coursebelow">Full Stack</a></li>
                  <li><a href="#coursebelow">AWS</a></li>
                </ul>
              </div>
              <div className="">
                <h3 className="footer-heading"><span>Resources</span></h3>
                <ul className="list-unstyled">
                  <li><a href="#">Terms of Services</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Get in Touch</a></li>
                  <li><a href="#aboutingrade">About us</a></li>
                  <li><a href="#demoform">Contact us</a></li>
                  <li><a href="#successstories">Success Stories</a></li>
                </ul>
              </div>
              <div className="">
                <h3 className="footer-heading"><span>Follow us on</span></h3>
                <ul className="list-unstyled">
                  <li><a href="https://www.linkedin.com/company/ingrade-learning/">linkedin</a></li>
                  <li><a href="https://www.instagram.com/ingrade_learning?igsh=NWpnbzBpd3g4dnlo">Instagram</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="https://www.facebook.com/profile.php?id=61560326330457">Facebook</a></li>
                  <li><a href="https://www.youtube.com/@InGrade">Youtube</a></li>
                  <li><a href="#">Quora</a></li>
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
