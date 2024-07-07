import React from 'react'

function DemoForm() {
  return (
    <div className="site-section ftco-subscribe-1" id='demoform' style={{ backgroundImage: `url(images/bg_1.jpg)` }}>
          <div className="container">
            <div className="row align-items-center container bg-secondary p-3">
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
                  <div class="row">
                    <div class="col-auto">
                      <div class="form-check d-flex align-items-center">
                        <input class="form-check-input" type="radio" name="type" id="fresher" value="Fresher" />
                        <label class="form-check-label ml-2 label-color" for="fresher">
                          Fresher
                        </label>
                      </div>
                    </div>
                    <div class="col-auto">
                      <div class="form-check d-flex align-items-center">
                        <input class="form-check-input" type="radio" name="type" id="working" value="Working Professional" />
                        <label class="form-check-label ml-2 label-color" for="working">
                          Working Professional
                        </label>
                      </div>
                    </div>
                  </div>
                  <br />
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
  )
}

export default DemoForm
