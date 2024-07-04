import React from 'react'

function Courses2() {
  return (
    <section className="container py-4">
      <div className="row mb-5 justify-content-center text-center">
        <div className="col-lg-4 mb-5">
          <h2 className="section-title-underline mb-1">
            <span>Popular Courses</span>
          </h2>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <div className="col">
          <div className="card shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out group d-flex flex-column">
            <a href="#">
              <a className="stretched-a"></a>
            </a>
            <img
              src="/placeholder.svg"
              alt="Data Science & AI"
              width={200}
              height={200}
              className="card-img-top"
            />
            <div className="card-body bg-light">
              <h3 className="card-title fw-bold">Data Science & AI</h3>
              <p className="card-text text-muted">
                Explore the intersection of data science and artificial intelligence, and learn how to leverage these
                powerful tools to uncover insights and drive innovation.
              </p>
              <div className="text-muted">Duration: 8 weeks</div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out group d-flex flex-column">
            <a href="#">
              <a className="stretched-a"></a>
            </a>
            <img
              src="/placeholder.svg"
              alt="Data Analytics"
              width={200}
              height={200}
              className="card-img-top"
            />
            <div className="card-body bg-light">
              <h3 className="card-title fw-bold">Data Analytics</h3>
              <p className="card-text text-muted">
                Dive into the world of data analytics and learn how to extract valuable insights from complex datasets to
                drive informed decision-making.
              </p>
              <div className="text-muted">Duration: 6 weeks</div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out group d-flex flex-column">
            <a href="#">
              <a className="stretched-a"></a>
            </a>
            <img
              src="/placeholder.svg"
              alt="Business Analytics"
              width={200}
              height={200}
              className="card-img-top"
            />
            <div className="card-body bg-light">
              <h3 className="card-title fw-bold">Business Analytics</h3>
              <p className="card-text text-muted">
                Explore the intersection of business strategy and data-driven decision-making, and learn how to leverage
                analytics to drive organizational success.
              </p>
              <div className="text-muted">Duration: 10 weeks</div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out group d-flex flex-column">
            <a href="#">
              <a className="stretched-a"></a>
            </a>
            <img
              src="/placeholder.svg"
              alt="Data Science & ML"
              width={200}
              height={200}
              className="card-img-top"
            />
            <div className="card-body bg-light">
              <h3 className="card-title fw-bold">Data Science & ML</h3>
              <p className="card-text text-muted">
                Dive deep into the world of machine learning and explore how to build intelligent systems that can learn and
                adapt from data.
              </p>
              <div className="text-muted">Duration: 12 weeks</div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out group d-flex flex-column">
            <a href="#">
              <a className="stretched-a"></a>
            </a>
            <img
              src="/placeholder.svg"
              alt="Generative AI"
              width={200}
              height={200}
              className="card-img-top"
            />
            <div className="card-body bg-light">
              <h3 className="card-title fw-bold">Generative AI</h3>
              <p className="card-text text-muted">
                Explore the cutting-edge field of generative AI and learn how to create intelligent systems that can
                generate human-like content and solve complex problems.
              </p>
              <div className="text-muted">Duration: 8 weeks</div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out group d-flex flex-column">
            <a href="#">
              <a className="stretched-a"></a>
            </a>
            <img
              src="/placeholder.svg"
              alt="Cyber Security"
              width={200}
              height={200}
              className="card-img-top"
            />
            <div className="card-body bg-light">
              <h3 className="card-title fw-bold">Cyber Security</h3>
              <p className="card-text text-muted">
                Dive into the world of cybersecurity and learn how to protect your digital assets from cyber threats and
                vulnerabilities.
              </p>
              <div className="text-muted">Duration: 6 weeks</div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out group d-flex flex-column">
            <a href="#">
              <a className="stretched-a"></a>
            </a>
            <img
              src="/placeholder.svg"
              alt="Full Stack"
              width={200}
              height={200}
              className="card-img-top"
            />
            <div className="card-body bg-light">
              <h3 className="card-title fw-bold">Full Stack</h3>
              <p className="card-text text-muted">
                Become a full-stack developer and learn how to build end-to-end web applications using a variety of
                technologies and frameworks.
              </p>
              <div className="text-muted">Duration: 12 weeks</div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out group d-flex flex-column">
            <a href="#">
              <a className="stretched-a"></a>
            </a>
            <img
              src="/placeholder.svg"
              alt="AWS"
              width={200}
              height={200}
              className="card-img-top"
            />
            <div className="card-body bg-light">
              <h3 className="card-title fw-bold">AWS</h3>
              <p className="card-text text-muted">
                Dive into the world of Amazon Web Services (AWS) and learn how to leverage the power of cloud computing to
                build scalable and reliable applications.
              </p>
              <div className="text-muted">Duration: 10 weeks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Courses2
