import React from 'react'
import PropTypes from 'prop-types'
import './Navbar2.css';



export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {/* Navbar items aligned to the right */}
                <li className="nav-item">
                  <a className="nav-link" href="/">Education</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Membership</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Beauty Salons and Spas</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Networking</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Conferences</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Workshops</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Webinars</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Accreditation & Quality Control</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">About Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
}
Navbar.protoType = {title: PropTypes.string, 
}

Navbar.defaultProps = {
 title: 'set title here'
};
