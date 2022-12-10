import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="HomePage landingPage">
      <div className="container">
        <div className="m-auto signContainer">
          <div className="">
            <img src="Images/student4.jpg" alt="Student" />
            <Link className="link_class navLink" to="/studentLogin">
              <h3>SignIn as Student</h3>
            </Link>
          </div>
          <div className="card admin">
            <img src="Images/backgg.jpg" alt="Teacher" />
            <Link className="link_class navLink" to="/teacherLogin">
              <h3>SignIn as Teacher</h3>
            </Link>
          </div>
          <div className="card admin">
            <img src="Images/admin2.jpg" alt="Admin" />
            <Link className="link_class navLink" to="/adminLogin">
              <h3>SignIn as Admin</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
