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
                      <a href="about.html" className="nav-link text-left">Courses</a>
                      <ul className="dropdown">
                        <li><a href="teachers.html">Data Science & AI</a></li>
                        <li><a href="about.html">Data Analytics</a></li>
                        <li><a href="teachers.html">Business Analytics</a></li>
                        <li><a href="about.html">Data Science & ML</a></li>
                        <li><a href="teachers.html">Generative AI</a></li>
                        <li><a href="about.html">Cyber Security</a></li>
                        <li><a href="teachers.html">Full Stack</a></li>
                        <li><a href="about.html">AWS</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="admissions.html" className="nav-link text-left">Admissions</a>
                    </li>
                    <li>
                      <a href="courses.html" className="nav-link text-left">Contact Us</a>
                    </li>
                    <li>
                      <a href="contact.html" className="nav-link text-left">About Us</a>
                    </li>
                    <li>
                      <a href="contact.html" className="nav-link text-left">Success Stories</a>
                    </li>
                  </ul>
                </nav>

              </div>
              <div className="ml-auto">
                <div className="social-wrap">
                  <a href="#"><span className="icon-facebook"></span></a>
                  <a href="#"><span className="icon-twitter"></span></a>
                  <a href="#"><span className="icon-linkedin"></span></a>

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
