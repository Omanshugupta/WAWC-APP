import './App.css';
import Navbar2 from './Components/Navbar2';

  function About() {
    return (
      <div>
        <Navbar2 title="WCWA" />
        <div className="background-section">
          <div className="about-us-container">
            <h2 className="about-us-heading">About Us</h2>
            <div className="about-us-content">
              <p>
                Welcome to Worldwide Cosmetology and Wellness Accreditation Pvt Ltd, the premier destination for world-class beauty and spa education and services. Our mission is to elevate the standards of the beauty and spa industry by providing exceptional training, accreditation, and professional support to individuals and institutions worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default About;
