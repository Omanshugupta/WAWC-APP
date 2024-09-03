import React from 'react';
import Imge from '../assets/img.jpg';
import './Style.css'


function Edu() {
  return (
    <div className="main">
      <div className="heading">
      <h1 style={{textDecorationLine: 'underline'}}>EDUCATION</h1>
      <h3 style={{color: "Darksalmon"}}>Education in Beauty Therapy</h3>
      </div>
      <div className="para" >
      <p style={{padding:'30px'}}>We offer a range of beauty and spa qualifications that are highly valued by employers worldwide.
      <br/><br/><br/>
      Our flexible programs, available for full-time, part-time, and online study, cater to diverse lifestyles and career goals.<br/> Whether you're a beginner or an experienced professional, we have the perfect course to elevate your skills and career prospects.</p>
      <div className="pic"><img src={Imge} height={250} width={400} alt=""/></div>
      </div>
      <br/>
      <br/>
      <div className="button1">
        <div className="buttoni"><a href="#Diplomas">Diplomas</a></div>
        <div className="buttonii"><a href="#Certificates">Certificates</a></div>
        <div className="buttoniii"><a href="#Industry Guides">Industry Guides</a></div>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="button2">
        <div className="buttonxi"><a href="#Course Details">Course Details</a></div>
        <div className="buttonxii"><a href="#Application Forms">Application Forms</a></div>
        <div className="buttonxiii"><a href="#Subscribe Newsletter">Subscribe Newsletter</a></div>
      </div>
      
    </div>
     
  );
}

export default Edu;
