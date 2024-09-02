import React from "react";
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarlogo}>
        <h1>WCWA</h1>
      </div>
      <ul className={styles.navbarlist}>
        <li>Education</li>
        <li>Membership</li>
        <li>Beauty Salon</li>
        <li>Networking</li>
        <li>Conferences</li>
        <li>Workshops</li>
        <li>Webinars</li>
        <li>About Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
