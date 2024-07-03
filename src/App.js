import './App.css';
import Courses from './Courses';
import Crousal from './Crousal';
import Feature2 from './Feature2';
import Feature3 from './Feature3';
import Courses2 from './Courses';
import Header from './Header';
import SuccessStories from './SuccessStories';

export function App() {
  return (

    <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
      <div className="site-wrap">
        <Header />
        <Crousal />
        <Courses2 />
        <Feature3 />
        <br />

        <SuccessStories />


        <div className="section-bg style-1" style={{ backgroundImage: `url(images/hero_1.jpg)` }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                <span className="icon flaticon-mortarboard"></span>
                <h3>Interactive Online Classes</h3>
                <p>-Live classes with real-time interaction</p>
                <p>-Pre recorded video lectures for flexible learning</p>
                <p>-Webinars and workshops with industry experts</p>
              </div>
              <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                <span className="icon flaticon-school-material"></span>
                <h3>Study Material</h3>
                <p>-Downloadable PDFs</p>
                <p>-Lecture notes and summaries</p>
                <p>-Quizzes and Assessments</p>
              </div>
              <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                <span className="icon flaticon-library"></span>
                <h3>Regular quizzes to assess understanding</h3>
                <p>Mock exams and practice tests</p>
                <p>Automated feedback and grading</p>
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
