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
                  <li><a href="#" data-toggle="modal" data-target=".terms-modal">Terms of Services</a></li>
                  <li><a href="#" data-toggle="modal" data-target=".privacy-modal">Privacy Policy</a></li>
                  <li><a href="#aboutingrade">About us</a></li>
                  <li><a href="#demoform">Get in Touch</a></li>
                  <li><a href="#successstories">Success Stories</a></li>
                </ul>
              </div>
              <div className="">
                <h3 className="footer-heading"><span>Follow us on</span></h3>
                <ul className="list-unstyled">
                  <li><a href="https://www.linkedin.com/company/ingrade-learning/">linkedin</a></li>
                  <li><a href="https://www.instagram.com/ingrade_learning?igsh=NWpnbzBpd3g4dnlo">Instagram</a></li>
                  <li><a href="https://x.com/IngradeLearning">Twitter</a></li>
                  <li><a href="https://www.facebook.com/profile.php?id=61560326330457">Facebook</a></li>
                  <li><a href="https://www.youtube.com/@InGrade">Youtube</a></li>
                  <li><a href="https://www.quora.com/profile/Ingrade-2">Quora</a></li>
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

          <div class="modal fade terms-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title text-black" id="exampleModalLabel">Terms of Services</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div class="modal-body">
              <h6 className='text-black'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Why do we use it?
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </h6>
            </div>

              </div>
            </div>
          </div>


          <div class="modal fade privacy-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title text-black" id="exampleModalLabel">Terms of Services</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div class="modal-body">
              <h6 className='text-black'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Why do we use it?
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                privacy
              </h6>
            </div>

              </div>
            </div>
          </div>

        </div>
  )
}

export default Footer
