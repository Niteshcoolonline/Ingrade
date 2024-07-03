import React, {useEffect} from 'react'
import './App.css'

function Features() {
  useEffect(() => {
    // Intersection Observer to trigger animations when elements come into view
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate'); // Add animate class to trigger animation
        }
      });
    }, { threshold: 0.5 }); // Trigger animation when 50% of the element is in view

    // Observe each animated element
    document.querySelectorAll('.course-1-content h2').forEach(h2 => {
      observer.observe(h2);
    });

    // Clean up observer
    return () => observer.disconnect();
  }, []);
  return (
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
  )
}

export default Features
