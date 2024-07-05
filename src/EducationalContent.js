/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Rp3vpvP7vtW
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function EducationalContent() {
    return (
        <section className="py-12 md:py-24 lg:py-32">
            <div className="container grid gap-8 px-4 md:px-6">
                <div className="space-y-3 text-center">
                    <div className="row mb-2 justify-content-center text-center">
                        <div className="col-lg-4">
                            <h2 className="section-title-underline">
                                <span>Educational Content</span>
                            </h2>
                        </div>
                    </div>
                    <p className="max-w-700px text-muted-foreground md:text-xl lg:text-base xl:text-xl mb-5">
                        Discover our comprehensive educational offerings to help you succeed.
                    </p>
                </div>
                <div className="row mb-5 justify-content-between text-center">
                    <div className="col-lg-3 rounded-lg border bg-light p-6 shadow-sm">
                        <div className="mb-4 d-flex align-items-center justify-content-center">
                            <BookOpenIcon className="h-10 w-10 text-primary" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold">Interactive online classes</h3>
                        <p className="text-muted-foreground">Engage in interactive online classes with experienced instructors.</p>
                    </div>
                    <div className="col-lg-3 rounded-lg border bg-light p-6 shadow-sm">
                        <div className="mb-4 d-flex align-items-center justify-content-center">
                            <FileTextIcon className="h-10 w-10 text-primary" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold">Study material</h3>
                        <p className="text-muted-foreground">Access a wide range of study materials to support your learning.</p>
                    </div>
                    <div className="col-lg-3 rounded-lg border bg-light p-6 shadow-sm">
                        <div className="mb-4 d-flex align-items-center justify-content-center">
                            <CircleCheckIcon className="h-10 w-10 text-primary" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold">Regular quizzes</h3>
                        <p className="text-muted-foreground">Assess your understanding with regular quizzes and tests.</p>
                    </div>
                </div>
            </div>
        </section>
    )
  }
  
  function BookOpenIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="59"
        height="59"
        viewBox="0 0 30 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    )
  }
  
  
  function CircleCheckIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="59"
        height="59"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  }
  
  
  function FileTextIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="59"
        height="59"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M10 9H8" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
      </svg>
    )
  }