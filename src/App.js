import './App.css';

export function App() {
  return (

    <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
      <div className="site-wrap">
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>

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


        <div></div>

        <div className="site-section">
          <div className="container">
            <div className="row mb-5 justify-content-center text-center">
              <div className="col-lg-4 mb-5">
                <h2 className="section-title-underline mb-5">
                  <span>Courses</span>
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="feature-1 border">
                  <div className="icon-wrapper bg-primary">
                    <span className="flaticon-mortarboard text-white"></span>
                  </div>
                  <div className="feature-1-content">
                    <h2>Data Science & AI</h2>
                    <p>12 Months</p>
                    <p><a href="#" className="btn btn-primary px-4 rounded-0">Learn More</a></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="feature-1 border">
                  <div className="icon-wrapper bg-primary">
                    <span className="flaticon-school-material text-white"></span>
                  </div>
                  <div className="feature-1-content">
                    <h2>Data Analytics</h2>
                    <p>6 Months</p>
                    <p><a href="#" className="btn btn-primary px-4 rounded-0">Learn More</a></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="feature-1 border">
                  <div className="icon-wrapper bg-primary">
                    <span className="flaticon-library text-white"></span>
                  </div>
                  <div className="feature-1-content">
                    <h2>Business Analytics</h2>
                    <p>6 Months</p>
                    <p><a href="#" className="btn btn-primary px-4 rounded-0">Learn More</a></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="feature-1 border">
                  <div className="icon-wrapper bg-primary">
                    <span className="flaticon-mortarboard text-white"></span>
                  </div>
                  <div className="feature-1-content">
                    <h2>Data Science & ML</h2>
                    <p>8 Months</p>
                    <p><a href="#" className="btn btn-primary px-4 rounded-0">Learn More</a></p>
                  </div>
                </div>
              </div>
            </div>
            <br /><br />
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="feature-1 border">
                  <div className="icon-wrapper bg-primary">
                    <span className="flaticon-school-material text-white"></span>
                  </div>
                  <div className="feature-1-content">
                    <h2>Generative AI</h2>
                    <p>11 Months</p>
                    <p><a href="#" className="btn btn-primary px-4 rounded-0">Learn More</a></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="feature-1 border">
                  <div className="icon-wrapper bg-primary">
                    <span className="flaticon-library text-white"></span>
                  </div>
                  <div className="feature-1-content">
                    <h2>Cyber Security</h2>
                    <p>8 Months</p>
                    <p><a href="#" className="btn btn-primary px-4 rounded-0">Learn More</a></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="feature-1 border">
                  <div className="icon-wrapper bg-primary">
                    <span className="flaticon-mortarboard text-white"></span>
                  </div>
                  <div className="feature-1-content">
                    <h2>Full Stack</h2>
                    <p>11 Months</p>
                    <p><a href="#" className="btn btn-primary px-4 rounded-0">Learn More</a></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="feature-1 border">
                  <div className="icon-wrapper bg-primary">
                    <span className="flaticon-school-material text-white"></span>
                  </div>
                  <div className="feature-1-content">
                    <h2>AWS</h2>
                    <p>8 Months</p>
                    <p><a href="#" className="btn btn-primary px-4 rounded-0">Learn More</a></p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


        <div className="site-section">
          <div className="container">

            <div className="row course-1-item">
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="">
                  <div className="course-1-content pb-4">
                    <h2>200 + Courses</h2>
                    
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="">
                  <div className="course-1-content pb-4">
                    <h2 className='section-title-underline style-2'>Avg Salary Hike 40%-60%</h2>
                    
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="">
                  <div className="course-1-content pb-4">
                    <h2 className='section-title-underline style-2'>250 + Hiring Partners</h2>
                  </div>
                </div>
              </div>              
            </div>
          </div>
        </div>




        <div className="section-bg style-1" style={{ backgroundImage: `url(images/about_1.jpg)` }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <h2 className="section-title-underline style-2">
                  <span>About Our University</span>
                </h2>
              </div>
              <div className="col-lg-8">
                <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem nesciunt quaerat ad reiciendis perferendis voluptate fugiat sunt fuga error totam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus assumenda omnis tempora ullam alias amet eveniet voluptas, incidunt quasi aut officiis porro ad, expedita saepe necessitatibus rem debitis architecto dolore? Nam omnis sapiente placeat blanditiis voluptas dignissimos, itaque fugit a laudantium adipisci dolorem enim ipsum cum molestias? Quod quae molestias modi fugiat quisquam. Eligendi recusandae officiis debitis quas beatae aliquam?</p>
                <p><a href="#">Read more</a></p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row mb-5 justify-content-center text-center">
              <div className="col-lg-8">
                <h2 className="section-title-underline mb-3">
                  <span>Success Stories</span>
                </h2>
              </div>
            </div>


            <div className="owl-slide owl-carousel">

              <div className="ftco-testimonial-1">
                <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                  <img src="images/person_1.jpg" alt="Image" className="img-fluid mr-3" />
                  <div>
                    <h3>Allison Holmes</h3>
                    <span>Designer</span>
                  </div>
                </div>
                <div>
                  <p>&ldquo;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, mollitia. Possimus mollitia nobis libero quidem aut tempore dolore iure maiores, perferendis, provident numquam illum nisi amet necessitatibus. A, provident aperiam!&rdquo;</p>
                </div>
              </div>

              <div className="ftco-testimonial-1">
                <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                  <img src="images/person_2.jpg" alt="Image" className="img-fluid mr-3" />
                  <div>
                    <h3>Allison Holmes</h3>
                    <span>Designer</span>
                  </div>
                </div>
                <div>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, mollitia. Possimus mollitia nobis libero quidem aut tempore dolore iure maiores, perferendis, provident numquam illum nisi amet necessitatibus. A, provident aperiam!</p>
                </div>
              </div>

              <div className="ftco-testimonial-1">
                <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                  <img src="images/person_4.jpg" alt="Image" className="img-fluid mr-3" />
                  <div>
                    <h3>Allison Holmes</h3>
                    <span>Designer</span>
                  </div>
                </div>
                <div>
                  <p>&ldquo;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, mollitia. Possimus mollitia nobis libero quidem aut tempore dolore iure maiores, perferendis, provident numquam illum nisi amet necessitatibus. A, provident aperiam!&rdquo;</p>
                </div>
              </div>

              <div className="ftco-testimonial-1">
                <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                  <img src="images/person_3.jpg" alt="Image" className="img-fluid mr-3" />
                  <div>
                    <h3>Allison Holmes</h3>
                    <span>Designer</span>
                  </div>
                </div>
                <div>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, mollitia. Possimus mollitia nobis libero quidem aut tempore dolore iure maiores, perferendis, provident numquam illum nisi amet necessitatibus. A, provident aperiam!</p>
                </div>
              </div>

              <div className="ftco-testimonial-1">
                <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                  <img src="images/person_2.jpg" alt="Image" className="img-fluid mr-3" />
                  <div>
                    <h3>Allison Holmes</h3>
                    <span>Designer</span>
                  </div>
                </div>
                <div>
                  <p>&ldquo;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, mollitia. Possimus mollitia nobis libero quidem aut tempore dolore iure maiores, perferendis, provident numquam illum nisi amet necessitatibus. A, provident aperiam!&rdquo;</p>
                </div>
              </div>

              <div className="ftco-testimonial-1">
                <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                  <img src="images/person_4.jpg" alt="Image" className="img-fluid mr-3" />
                  <div>
                    <h3>Allison Holmes</h3>
                    <span>Designer</span>
                  </div>
                </div>
                <div>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, mollitia. Possimus mollitia nobis libero quidem aut tempore dolore iure maiores, perferendis, provident numquam illum nisi amet necessitatibus. A, provident aperiam!</p>
                </div>
              </div>

            </div>

          </div>
        </div>


        <div className="section-bg style-1" style={{ backgroundImage: `url(images/hero_1.jpg)` }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                <span className="icon flaticon-mortarboard"></span>
                <h3>Our Philosphy</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis recusandae, iure repellat quis delectus ea? Dolore, amet reprehenderit.</p>
              </div>
              <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                <span className="icon flaticon-school-material"></span>
                <h3>Academics Principle</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis recusandae, iure repellat quis delectus ea?
                  Dolore, amet reprehenderit.</p>
              </div>
              <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                <span className="icon flaticon-library"></span>
                <h3>Key of Success</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis recusandae, iure repellat quis delectus ea?
                  Dolore, amet reprehenderit.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="news-updates">
          <div className="container">

            <div className="row">
              <div className="col-lg-9">
                <div className="section-heading">
                  <h2 className="text-black">News &amp; Updates</h2>
                  <a href="#">Read All News</a>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="post-entry-big">
                      <a href="news-single.html" className="img-link"><img src="images/blog_large_1.jpg" alt="Image" className="img-fluid" /></a>
                      <div className="post-content">
                        <div className="post-meta">
                          <a href="#">June 6, 2019</a>
                          <span className="mx-1">/</span>
                          <a href="#">Admission</a>, <a href="#">Updates</a>
                        </div>
                        <h3 className="post-heading"><a href="news-single.html">Campus Camping and Learning Session</a></h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="post-entry-big horizontal d-flex mb-4">
                      <a href="news-single.html" className="img-link mr-4"><img src="images/blog_1.jpg" alt="Image" className="img-fluid" /></a>
                      <div className="post-content">
                        <div className="post-meta">
                          <a href="#">June 6, 2019</a>
                          <span className="mx-1">/</span>
                          <a href="#">Admission</a>, <a href="#">Updates</a>
                        </div>
                        <h3 className="post-heading"><a href="news-single.html">Campus Camping and Learning Session</a></h3>
                      </div>
                    </div>

                    <div className="post-entry-big horizontal d-flex mb-4">
                      <a href="news-single.html" className="img-link mr-4"><img src="images/blog_2.jpg" alt="Image" className="img-fluid" /></a>
                      <div className="post-content">
                        <div className="post-meta">
                          <a href="#">June 6, 2019</a>
                          <span className="mx-1">/</span>
                          <a href="#">Admission</a>, <a href="#">Updates</a>
                        </div>
                        <h3 className="post-heading"><a href="news-single.html">Campus Camping and Learning Session</a></h3>
                      </div>
                    </div>

                    <div className="post-entry-big horizontal d-flex mb-4">
                      <a href="news-single.html" className="img-link mr-4"><img src="images/blog_1.jpg" alt="Image" className="img-fluid" /></a>
                      <div className="post-content">
                        <div className="post-meta">
                          <a href="#">June 6, 2019</a>
                          <span className="mx-1">/</span>
                          <a href="#">Admission</a>, <a href="#">Updates</a>
                        </div>
                        <h3 className="post-heading"><a href="news-single.html">Campus Camping and Learning Session</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="section-heading">
                  <h2 className="text-black">Campus Videos</h2>
                  <a href="#">View All Videos</a>
                </div>
                <a href="https://vimeo.com/45830194" className="video-1 mb-4" data-fancybox="" data-ratio="2">
                  <span className="play">
                    <span className="icon-play"></span>
                  </span>
                  <img src="images/course_5.jpg" alt="Image" className="img-fluid" />
                </a>
                <a href="https://vimeo.com/45830194" className="video-1 mb-4" data-fancybox="" data-ratio="2">
                  <span className="play">
                    <span className="icon-play"></span>
                  </span>
                  <img src="images/course_5.jpg" alt="Image" className="img-fluid" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section ftco-subscribe-1" style={{ backgroundImage: `url(images/bg_1.jpg)` }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <h2>Subscribe to us!</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,</p>
              </div>
              <div className="col-lg-5">
                <form action="" className="d-flex">
                  <input type="text" className="rounded form-control mr-2 py-3" placeholder="Enter your email" />
                  <button className="btn btn-primary rounded py-3 px-4" type="submit">Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>


        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <p className="mb-4"><img src="images/logo.png" alt="Image" className="img-fluid" /></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nemo minima qui dolor, iusto iure.</p>
                <p><a href="#">Learn More</a></p>
              </div>
              <div className="col-lg-3">
                <h3 className="footer-heading"><span>Our Campus</span></h3>
                <ul className="list-unstyled">
                  <li><a href="#">Acedemic</a></li>
                  <li><a href="#">News</a></li>
                  <li><a href="#">Our Interns</a></li>
                  <li><a href="#">Our Leadership</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Human Resources</a></li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h3 className="footer-heading"><span>Our Courses</span></h3>
                <ul className="list-unstyled">
                  <li><a href="#">Math</a></li>
                  <li><a href="#">Science &amp; Engineering</a></li>
                  <li><a href="#">Arts &amp; Humanities</a></li>
                  <li><a href="#">Economics &amp; Finance</a></li>
                  <li><a href="#">Business Administration</a></li>
                  <li><a href="#">Computer Science</a></li>
                </ul>
              </div>
              <div className="col-lg-3">
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
                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>




      </div>
    </div>
  )
}
