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
            <div className="d-flex justify-content-center" style={{gap: '100px'}}>
              <div className="col-md-4 educationalContentCard">
                <span className="icon flaticon-mortarboard"></span>
                <h3>Interactive Online Classes</h3>
                <p>-Live classes with real-time interaction</p>
                <p>-Pre recorded video lectures for flexible learning</p>
                <p>-Webinars and workshops with industry experts</p>
              </div>
              <div className="col-md-4 educationalContentCard">
                <span className="icon flaticon-school-material"></span>
                <h3>Study Material</h3>
                <p>-Downloadable PDFs</p>
                <p>-Lecture notes and summaries</p>
                <p>-Quizzes and Assessments</p>
              </div>
              <div className="col-md-4 educationalContentCard">
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
                <h2>Book your Demo Session, and Get Amazing Courses
                Today!!!</h2>
                <p>Get an amazing career pathway which helps you to excel your career in the best possible way. Access to the community of experts who guide you to get the best out of you.</p>
              </div>
              <div className="col-lg-5">
              <form>
              <div class="form-group">
                  <label for="name" class='label-color'>Name</label>
                  <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" />
                </div>
                <div class="form-group">
                  <label for="email" class='label-color'>Email address</label>
                  <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="number" class='label-color'>Phone Number</label>
                  <input type="text" class="form-control" id="number" aria-describedby="emailHelp" placeholder="Enter email" />
                  <small id="numberHelp" class="form-text text-muted">We'll never share your number with anyone else.</small>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="type" id="fresher" value="Fresher" />
                  <label class="form-check-label label-color" for="fresher" >
                    Fresher
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="type" id="working" value="Working Professional" />
                  <label class="form-check-label label-color" for="working">
                    Working Professional
                  </label>
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
              </div>
            </div>
          </div>
        </div>


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




      </div>
    </div>
  )
}
