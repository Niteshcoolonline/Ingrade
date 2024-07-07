import './App.css';
import Courses from './Courses';
import Crousal from './Crousal';
import Feature2 from './Feature2';
import Feature3 from './Feature3';
import Courses2 from './Courses2';
import Header from './Header';
import SuccessStories from './SuccessStories';
import EducationalContent from './EducationalContent';
import LearningSupport from './LearningSupport';
import ComingStrategies from './ComingStrategies';
import DemoForm from './DemoForm';
import HiringPartner from './HiringPartner';
import Footer from './Footer';
import AboutUs from './AboutUs';

export function App() {
  return (

    <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300" style={{'overflow-x': 'hidden'}}>
      <div className="site-wrap">
        <Header />
        <Crousal />
        <Courses2 />
        <br />
        <br />
        <EducationalContent />
        <LearningSupport />
        <ComingStrategies />
        <SuccessStories />
        <br />
        <DemoForm />
        <br />
        <br />
        <HiringPartner />
        <br />
        <br />
        <AboutUs /> 
        <Footer />
      </div>
    </div>
  )
}
