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
                    <div className="col-lg-3 rounded-lg border bg-light p-6 shadow-sm rounded">
                        <div className="mb-4 d-flex align-items-center justify-content-center mt-4">
                            <img src='../images/OnlineClasses.png' className="img-w-25 text-primary" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold text-black">Online Classes</h3>
                        <p className="text-muted-foreground">Engage in interactive online classes with experienced instructors.</p>
                    </div>
                    <div className="col-lg-3 rounded-lg border bg-light p-6 shadow-sm rounded">
                        <div className="mb-4 d-flex align-items-center justify-content-center mt-4">
                          <img src='../images/StudyMaterial.png' className="img-w-25 text-primary" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold text-black">Study Material</h3>
                        <p className="text-muted-foreground">Access a wide range of study materials to support your learning.</p>
                    </div>
                    <div className="col-lg-3 rounded-lg border bg-light p-6 shadow-sm rounded">
                        <div className="mb-4 d-flex align-items-center justify-content-center mt-4">
                          <img src='../images/quiz.png' className="img-w-25 text-primary" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold text-black">Regular Quizzes</h3>
                        <p className="text-muted-foreground">Assess your understanding with regular quizzes and tests.</p>
                    </div>
                </div>
            </div>
        </section>
    )
  }