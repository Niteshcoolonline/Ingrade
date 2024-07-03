
export default function Feature2() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card border bg-white p-4 text-center shadow-sm">
                <div className="bg-primary p-3 d-flex align-items-center justify-content-center">
                  <BookIcon className="text-white" />
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl fw-bold">200+ Courses</h3>
                  <p className="text-muted">
                    Explore our extensive library of online courses across a wide range of subjects.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border bg-white p-4 text-center shadow-sm">
                <div className="bg-primary p-3 d-flex align-items-center justify-content-center">
                  <TrendingUpIcon className="text-white" />
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl fw-bold">Salary Hike 40%-60%</h3>
                  <p className="text-muted">
                    Boost your earning potential with our industry-leading training programs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border bg-white p-4 text-center shadow-sm">
                <div className="bg-primary p-3 d-flex align-items-center justify-content-center">
                  <BriefcaseIcon className="text-white" />
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl fw-bold">250+ Hiring Partners</h3>
                  <p className="text-muted">
                    Get connected with top companies actively seeking skilled professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  function BookIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    )
  }
  
  function BriefcaseIcon(props) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect x="2" y="6" width="20" height="14" rx="2" />
      </svg>
    )
  }
  
  function TrendingUpIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    )
  }