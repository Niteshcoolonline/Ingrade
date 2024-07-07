import React from 'react'
import './App.css';

function Header() {
  return (
    <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">

          <div className="container">
            <div className="d-flex align-items-center">
              <div className="site-logo">
                <a href="index.html" className="d-block">
                  <img src="images/logo4.jpg" alt="Image" className="img-fluid" />
                </a>
              </div>
              <div className="mr-auto">
                <nav className="site-navigation position-relative text-right" role="navigation">
                  <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                    <li className="has-children">
                      <a href="#course" className="nav-link text-left">Courses</a>
                      <ul className="dropdown">
                        <li><a href="#course">Data Science & AI</a></li>
                        <li><a href="#course">Data Analytics</a></li>
                        <li><a href="#course">Business Analytics</a></li>
                        <li><a href="#course">Data Science & ML</a></li>
                        <li><a href="#coursebelow">Generative AI</a></li>
                        <li><a href="#coursebelow">Cyber Security</a></li>
                        <li><a href="#coursebelow">Full Stack</a></li>
                        <li><a href="#coursebelow">AWS</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#demoform" className="nav-link text-left">Contact Us</a>
                    </li>
                    <li>
                      <a href="#aboutingrade" className="nav-link text-left">About Us</a>
                    </li>
                    <li>
                      <a href="#successstories" className="nav-link text-left">Success Stories</a>
                    </li>
                  </ul>
                </nav>

              </div>
              <div className="ml-auto">
                <div className="social-wrap">
                  <a href="https://www.facebook.com/profile.php?id=61560326330457"><span className="icon-facebook"></span></a>
                  <a href="#"><span className="icon-twitter"></span></a>
                  <a href="https://www.linkedin.com/company/ingrade-learning/"><span className="icon-linkedin"></span></a>
                  <a href="https://www.instagram.com/ingrade_learning?igsh=NWpnbzBpd3g4dnlo"><span className="icon-instagram"></span></a>
                  <a href="#"><span className="icon-quora"></span></a>
                  <a href="https://www.youtube.com/@InGrade"><span className="icon-youtube"></span></a>
                  <a href="#" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"><span
                    className="icon-menu h3"></span></a>
                </div>
              </div>

            </div>
          </div>

        </header>
  )
}

export default Header
